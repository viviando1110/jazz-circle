'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface MIDIDevice {
  id: string;
  name: string;
}

interface UseMIDIReturn {
  /** Whether the browser supports Web MIDI API */
  isSupported: boolean;
  /** Whether at least one MIDI input is connected */
  isConnected: boolean;
  /** List of connected MIDI input devices */
  devices: MIDIDevice[];
  /** Currently held MIDI note numbers */
  activeNotes: Set<number>;
  /** Last note-on MIDI number (for single-note tracking) */
  lastNoteOn: number | null;
  /** Request MIDI access from the browser */
  requestAccess: () => Promise<void>;
  /** Error message if access fails */
  error: string | null;
}

/**
 * Hook for Web MIDI API access.
 * Handles device enumeration, hot-plug, and Note On/Off parsing.
 * Gracefully degrades on unsupported browsers (Firefox, Safari).
 */
export function useMIDI(): UseMIDIReturn {
  const [isSupported] = useState(() =>
    typeof navigator !== 'undefined' && typeof navigator.requestMIDIAccess === 'function'
  );
  const [devices, setDevices] = useState<MIDIDevice[]>([]);
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const [lastNoteOn, setLastNoteOn] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const accessRef = useRef<MIDIAccess | null>(null);
  const listenersRef = useRef<Map<string, (e: MIDIMessageEvent) => void>>(new Map());

  const updateDevices = useCallback((access: MIDIAccess) => {
    const inputs: MIDIDevice[] = [];
    access.inputs.forEach((input) => {
      if (input.state === 'connected') {
        inputs.push({ id: input.id, name: input.name ?? 'Unknown Device' });
      }
    });
    setDevices(inputs);
  }, []);

  const handleMIDIMessage = useCallback((event: MIDIMessageEvent) => {
    const data = event.data;
    if (!data || data.length < 3) return;
    const status = data[0];
    const note = data[1];
    const velocity = data[2];
    const command = status & 0xf0;

    if (command === 0x90 && velocity > 0) {
      // Note On
      setActiveNotes((prev) => {
        const next = new Set(prev);
        next.add(note);
        return next;
      });
      setLastNoteOn(note);
    } else if (command === 0x80 || (command === 0x90 && velocity === 0)) {
      // Note Off (or Note On with velocity 0)
      setActiveNotes((prev) => {
        const next = new Set(prev);
        next.delete(note);
        return next;
      });
    }
  }, []);

  const attachListeners = useCallback((access: MIDIAccess) => {
    // Remove old listeners
    listenersRef.current.forEach((listener, id) => {
      const input = access.inputs.get(id);
      if (input) {
        input.onmidimessage = null;
      }
    });
    listenersRef.current.clear();

    // Attach new listeners
    access.inputs.forEach((input) => {
      if (input.state === 'connected') {
        input.onmidimessage = handleMIDIMessage as (e: Event) => void;
        listenersRef.current.set(input.id, handleMIDIMessage);
      }
    });
  }, [handleMIDIMessage]);

  const requestAccess = useCallback(async () => {
    if (!isSupported) {
      setError('Web MIDI API is not supported in this browser');
      return;
    }

    try {
      const access = await navigator.requestMIDIAccess!();
      accessRef.current = access;
      updateDevices(access);
      attachListeners(access);

      // Handle device hot-plug
      access.onstatechange = () => {
        updateDevices(access);
        attachListeners(access);
      };

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to access MIDI devices');
    }
  }, [isSupported, updateDevices, attachListeners]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (accessRef.current) {
        accessRef.current.onstatechange = null;
        accessRef.current.inputs.forEach((input) => {
          input.onmidimessage = null;
        });
      }
      listenersRef.current.clear();
    };
  }, []);

  return {
    isSupported,
    isConnected: devices.length > 0,
    devices,
    activeNotes,
    lastNoteOn,
    requestAccess,
    error,
  };
}

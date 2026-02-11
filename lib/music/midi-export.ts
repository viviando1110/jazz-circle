// lib/music/midi-export.ts
// Generate Standard MIDI File Format 0 from MelodyNote arrays.
// No external dependencies — hand-crafted binary format.

import type { MelodyNote } from '@/lib/music/types';

/** MIDI ticks per quarter note (standard resolution) */
const TICKS_PER_BEAT = 480;

/** Encode an integer as a MIDI variable-length quantity */
function encodeVLQ(value: number): number[] {
  if (value < 0) throw new Error('VLQ value must be non-negative');
  if (value < 0x80) return [value];

  const bytes: number[] = [];
  bytes.push(value & 0x7f);
  value >>= 7;
  while (value > 0) {
    bytes.push((value & 0x7f) | 0x80);
    value >>= 7;
  }
  return bytes.reverse();
}

/** Write a 16-bit big-endian integer */
function writeUint16(value: number): number[] {
  return [(value >> 8) & 0xff, value & 0xff];
}

/** Write a 32-bit big-endian integer */
function writeUint32(value: number): number[] {
  return [
    (value >> 24) & 0xff,
    (value >> 16) & 0xff,
    (value >> 8) & 0xff,
    value & 0xff,
  ];
}

/** Create a tempo meta event (microseconds per beat) */
function tempoEvent(bpm: number): number[] {
  const microsecondsPerBeat = Math.round(60_000_000 / bpm);
  return [
    0x00,       // delta time
    0xff, 0x51, // meta event: tempo
    0x03,       // length: 3 bytes
    (microsecondsPerBeat >> 16) & 0xff,
    (microsecondsPerBeat >> 8) & 0xff,
    microsecondsPerBeat & 0xff,
  ];
}

/** Create a track name meta event */
function trackNameEvent(name: string): number[] {
  const nameBytes = Array.from(new TextEncoder().encode(name));
  return [
    0x00,       // delta time
    0xff, 0x03, // meta event: track name
    ...encodeVLQ(nameBytes.length),
    ...nameBytes,
  ];
}

/** End of track meta event */
function endOfTrackEvent(): number[] {
  return [0x00, 0xff, 0x2f, 0x00];
}

/**
 * Create a Standard MIDI File (Format 0, single track) from melody notes.
 * @param notes Array of MelodyNote (midi, durationBeats, velocity)
 * @param bpm Tempo in beats per minute
 * @param name Optional track name
 * @returns Uint8Array containing the complete MIDI file
 */
export function createMidiFile(
  notes: MelodyNote[],
  bpm: number,
  name: string = 'Jazz Circle Export',
): Uint8Array {
  // Build track data
  const trackData: number[] = [];

  // Track name
  trackData.push(...trackNameEvent(name));

  // Tempo
  trackData.push(...tempoEvent(bpm));

  // Note events
  for (const note of notes) {
    const velocity = Math.round((note.velocity ?? 0.8) * 127);
    const durationTicks = Math.round(note.durationBeats * TICKS_PER_BEAT);

    // Note On (delta=0 for first note, subsequent handled by Note Off delta)
    trackData.push(...encodeVLQ(0));      // delta time
    trackData.push(0x90);                  // note on, channel 0
    trackData.push(note.midi & 0x7f);      // note number
    trackData.push(velocity & 0x7f);       // velocity

    // Note Off after duration
    trackData.push(...encodeVLQ(durationTicks)); // delta time
    trackData.push(0x80);                         // note off, channel 0
    trackData.push(note.midi & 0x7f);             // note number
    trackData.push(0x00);                         // release velocity
  }

  // End of track
  trackData.push(...endOfTrackEvent());

  // Build complete file
  const fileData: number[] = [];

  // Header chunk: MThd
  fileData.push(0x4d, 0x54, 0x68, 0x64); // "MThd"
  fileData.push(...writeUint32(6));        // header length (always 6)
  fileData.push(...writeUint16(0));        // format 0
  fileData.push(...writeUint16(1));        // 1 track
  fileData.push(...writeUint16(TICKS_PER_BEAT)); // ticks per beat

  // Track chunk: MTrk
  fileData.push(0x4d, 0x54, 0x72, 0x6b); // "MTrk"
  fileData.push(...writeUint32(trackData.length));
  fileData.push(...trackData);

  return new Uint8Array(fileData);
}

/**
 * Trigger a browser file download for a MIDI file.
 * @param data MIDI file as Uint8Array
 * @param filename Download filename (should end in .mid)
 */
export function downloadMidiFile(data: Uint8Array, filename: string): void {
  const blob = new Blob([data.buffer as ArrayBuffer], { type: 'audio/midi' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

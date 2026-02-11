import { describe, it, expect } from 'vitest';
import { createMidiFile } from '@/lib/music/midi-export';
import type { MelodyNote } from '@/lib/music/types';

describe('createMidiFile', () => {
  const singleNote: MelodyNote[] = [
    { midi: 60, durationBeats: 1, velocity: 0.8 },
  ];

  it('starts with MThd header', () => {
    const data = createMidiFile(singleNote, 120);
    // MThd in ASCII
    expect(data[0]).toBe(0x4d); // M
    expect(data[1]).toBe(0x54); // T
    expect(data[2]).toBe(0x68); // h
    expect(data[3]).toBe(0x64); // d
  });

  it('has correct header length (6 bytes)', () => {
    const data = createMidiFile(singleNote, 120);
    const headerLength = (data[4] << 24) | (data[5] << 16) | (data[6] << 8) | data[7];
    expect(headerLength).toBe(6);
  });

  it('is format 0 with 1 track', () => {
    const data = createMidiFile(singleNote, 120);
    const format = (data[8] << 8) | data[9];
    const tracks = (data[10] << 8) | data[11];
    expect(format).toBe(0);
    expect(tracks).toBe(1);
  });

  it('has ticks per beat = 480', () => {
    const data = createMidiFile(singleNote, 120);
    const tpb = (data[12] << 8) | data[13];
    expect(tpb).toBe(480);
  });

  it('contains MTrk track chunk', () => {
    const data = createMidiFile(singleNote, 120);
    // MTrk starts at byte 14
    expect(data[14]).toBe(0x4d); // M
    expect(data[15]).toBe(0x54); // T
    expect(data[16]).toBe(0x72); // r
    expect(data[17]).toBe(0x6b); // k
  });

  it('contains tempo meta event for given BPM', () => {
    const data = createMidiFile(singleNote, 120);
    // Find tempo meta event: FF 51 03
    const bytes = Array.from(data);
    let tempoIdx = -1;
    for (let i = 0; i < bytes.length - 2; i++) {
      if (bytes[i] === 0xff && bytes[i + 1] === 0x51 && bytes[i + 2] === 0x03) {
        tempoIdx = i;
        break;
      }
    }
    expect(tempoIdx).toBeGreaterThan(0);

    // 120 BPM = 500,000 microseconds per beat
    const usPerBeat = (bytes[tempoIdx + 3] << 16) | (bytes[tempoIdx + 4] << 8) | bytes[tempoIdx + 5];
    expect(usPerBeat).toBe(500000);
  });

  it('contains note-on and note-off events', () => {
    const data = createMidiFile(singleNote, 120);
    const bytes = Array.from(data);

    // Find note-on: 0x90
    const noteOnIdx = bytes.indexOf(0x90);
    expect(noteOnIdx).toBeGreaterThan(0);
    expect(bytes[noteOnIdx + 1]).toBe(60); // MIDI note 60 (C4)

    // Find note-off: 0x80
    const noteOffIdx = bytes.indexOf(0x80, noteOnIdx);
    expect(noteOffIdx).toBeGreaterThan(noteOnIdx);
    expect(bytes[noteOffIdx + 1]).toBe(60);
  });

  it('ends with end-of-track event', () => {
    const data = createMidiFile(singleNote, 120);
    const len = data.length;
    // End of track: FF 2F 00
    expect(data[len - 3]).toBe(0xff);
    expect(data[len - 2]).toBe(0x2f);
    expect(data[len - 1]).toBe(0x00);
  });

  it('handles multiple notes', () => {
    const notes: MelodyNote[] = [
      { midi: 60, durationBeats: 1 },
      { midi: 64, durationBeats: 1 },
      { midi: 67, durationBeats: 2 },
    ];
    const data = createMidiFile(notes, 140);
    expect(data.length).toBeGreaterThan(14); // More than just header

    // Should have 3 note-on events (0x90)
    const bytes = Array.from(data);
    const noteOns = bytes.filter((b, i) => b === 0x90 && i > 14).length;
    expect(noteOns).toBe(3);
  });

  it('produces valid output for empty notes', () => {
    const data = createMidiFile([], 120);
    // Should still be a valid MIDI file (header + empty track)
    expect(data[0]).toBe(0x4d); // M
    expect(data.length).toBeGreaterThan(14);
  });
});

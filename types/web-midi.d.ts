// TypeScript declarations for the Web MIDI API.
// These APIs are Chromium-only; Firefox/Safari do not support them.

interface MIDIOptions {
  sysex?: boolean;
  software?: boolean;
}

interface MIDIAccess extends EventTarget {
  readonly inputs: Map<string, MIDIInput>;
  readonly outputs: Map<string, MIDIOutput>;
  readonly sysexEnabled: boolean;
  onstatechange: ((event: MIDIConnectionEvent) => void) | null;
}

interface MIDIPort extends EventTarget {
  readonly id: string;
  readonly manufacturer: string | null;
  readonly name: string | null;
  readonly type: 'input' | 'output';
  readonly version: string | null;
  readonly state: 'connected' | 'disconnected';
  readonly connection: 'open' | 'closed' | 'pending';
  open(): Promise<MIDIPort>;
  close(): Promise<MIDIPort>;
  onstatechange: ((event: MIDIConnectionEvent) => void) | null;
}

interface MIDIInput extends MIDIPort {
  readonly type: 'input';
  onmidimessage: ((event: MIDIMessageEvent) => void) | null;
}

interface MIDIOutput extends MIDIPort {
  readonly type: 'output';
  send(data: number[] | Uint8Array, timestamp?: number): void;
  clear(): void;
}

interface MIDIMessageEvent extends Event {
  readonly data: Uint8Array;
}

interface MIDIConnectionEvent extends Event {
  readonly port: MIDIPort;
}

interface Navigator {
  requestMIDIAccess?(options?: MIDIOptions): Promise<MIDIAccess>;
}

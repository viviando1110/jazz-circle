import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { IIVIGenerator } from '@/components/progressions/IIVIGenerator';

vi.mock('@/components/audio/useAudio', () => ({
  useAudio: () => ({
    playChord: vi.fn(),
    playProgression: vi.fn(),
    stop: vi.fn(),
    isReady: true,
  }),
}));

describe('IIVIGenerator', () => {
  it('renders without crashing', () => {
    render(<IIVIGenerator />);
    expect(screen.getByText('Random ii-V-I Generator')).toBeDefined();
  });

  it('shows Generate button', () => {
    render(<IIVIGenerator />);
    expect(screen.getByRole('button', { name: 'Generate' })).toBeDefined();
  });

  it('displays 3 chord cards with valid chord names after clicking Generate', () => {
    render(<IIVIGenerator />);
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));

    // Should show roman numerals for ii, V, I
    expect(screen.getByText('iim7')).toBeDefined();
    expect(screen.getByText('V7')).toBeDefined();
    expect(screen.getByText('Imaj7')).toBeDefined();
  });

  it('shows the key name after generating', () => {
    render(<IIVIGenerator />);
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));

    // Should show "Key of X Major" for some key
    const keyText = screen.getByText(/^Key of .+ Major$/);
    expect(keyText).toBeDefined();
  });

  it('shows the practice tip text', () => {
    render(<IIVIGenerator />);
    expect(
      screen.getByText(/The ii-V-I is the most important jazz progression/),
    ).toBeDefined();
  });

  it('does not show the same key twice in a row', () => {
    render(<IIVIGenerator />);
    const btn = screen.getByRole('button', { name: 'Generate' });

    // Generate many times and verify no consecutive duplicates
    const keys: string[] = [];
    for (let i = 0; i < 30; i++) {
      fireEvent.click(btn);
      const keyText = screen.getByText(/^Key of .+ Major$/);
      keys.push(keyText.textContent!);
    }

    for (let i = 1; i < keys.length; i++) {
      expect(keys[i]).not.toBe(keys[i - 1]);
    }
  });

  it('shows Play button only after generating', () => {
    render(<IIVIGenerator />);
    expect(screen.queryByRole('button', { name: 'Play' })).toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));
    expect(screen.getByRole('button', { name: 'Play' })).toBeDefined();
  });
});

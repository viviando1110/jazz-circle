import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import EarTrainingClient from '@/components/ear-training/EarTrainingClient';
import ChordQualityQuiz from '@/components/ear-training/ChordQualityQuiz';
import KeyIdentificationQuiz from '@/components/ear-training/KeyIdentificationQuiz';

vi.mock('@/components/audio/useAudio', () => ({
  useAudio: () => ({
    playChord: vi.fn(),
    playProgression: vi.fn(),
    stop: vi.fn(),
    isReady: true,
    init: vi.fn(),
  }),
}));

describe('EarTrainingClient', () => {
  it('renders mode tabs', () => {
    render(<EarTrainingClient />);
    expect(screen.getByRole('button', { name: 'Chord Quality' })).toBeDefined();
    expect(
      screen.getByRole('button', { name: 'Identify the Key' }),
    ).toBeDefined();
  });

  it('default mode is Chord Quality', () => {
    render(<EarTrainingClient />);
    // Chord Quality quiz should render its Play Chord button
    expect(screen.getByRole('button', { name: 'Play Chord' })).toBeDefined();
  });

  it('clicking Identify the Key tab switches mode', () => {
    render(<EarTrainingClient />);
    fireEvent.click(
      screen.getByRole('button', { name: 'Identify the Key' }),
    );
    expect(
      screen.getByRole('button', { name: 'Play ii-V-I' }),
    ).toBeDefined();
  });
});

describe('ChordQualityQuiz', () => {
  it('renders Play Chord button', () => {
    render(<ChordQualityQuiz />);
    expect(screen.getByRole('button', { name: 'Play Chord' })).toBeDefined();
  });

  it('shows 4 answer buttons', () => {
    render(<ChordQualityQuiz />);
    const labels = ['Major 7', 'Minor 7', 'Dominant 7', 'Half-dim 7'];
    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeDefined();
    }
  });
});

describe('KeyIdentificationQuiz', () => {
  it('renders Play ii-V-I button', () => {
    render(<KeyIdentificationQuiz />);
    expect(
      screen.getByRole('button', { name: 'Play ii-V-I' }),
    ).toBeDefined();
  });

  it('shows 4 key answer buttons', () => {
    render(<KeyIdentificationQuiz />);
    // Should have exactly 4 buttons for keys + 1 for Play ii-V-I = 5 total
    const allButtons = screen.getAllByRole('button');
    // 1 play button + 4 key option buttons = 5
    expect(allButtons).toHaveLength(5);
  });
});

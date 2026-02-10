import type { Metadata } from 'next';
import PracticeMode from '@/components/practice/PracticeMode';

export const metadata: Metadata = {
  title: 'Practice Mode — Jazz Circle',
  description:
    'Practice jazz chord progressions with an interactive metronome, scale guide, and real-time feedback. Master ii-V-I progressions in all 12 keys.',
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold font-serif text-[var(--gold)] mb-2">
        Practice Mode
      </h1>
      <p className="text-[var(--cream-dim)] mb-8">
        Select a key and progression, set your tempo, and practice with a
        metronome and scale guide.
      </p>
      <PracticeMode />
    </div>
  );
}

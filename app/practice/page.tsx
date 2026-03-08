import type { Metadata } from 'next';
import Link from 'next/link';
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

      {/* Practice sub-pages */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/practice/melody"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--gold)]/40 transition-colors"
        >
          <h2 className="font-serif text-lg text-[var(--cream)] mb-1">
            Melody &amp; Lick Generator
          </h2>
          <p className="text-sm text-[var(--cream-dim)]">
            Generate jazz licks over any chord quality with notation and audio.
          </p>
        </Link>
        <Link
          href="/practice/ear-training"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--gold)]/40 transition-colors"
        >
          <h2 className="font-serif text-lg text-[var(--cream)] mb-1">
            Ear Training
          </h2>
          <p className="text-sm text-[var(--cream-dim)]">
            Identify chord qualities and key centers by ear with interactive quizzes.
          </p>
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import EarTrainingClient from '@/components/ear-training/EarTrainingClient';

export const metadata: Metadata = {
  title: 'Ear Training — Jazz Circle',
  description:
    'Train your ear to identify jazz chord qualities and key centers. Interactive quizzes with audio playback.',
  alternates: { canonical: '/practice/ear-training' },
};

export default function EarTrainingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold font-serif text-[var(--gold)] mb-2">
        Ear Training
      </h1>
      <p className="text-[var(--cream-dim)] mb-8">
        Sharpen your ear for jazz harmony. Identify chord qualities and key
        centers by listening.
      </p>
      <EarTrainingClient />
    </div>
  );
}

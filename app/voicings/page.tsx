import type { Metadata } from 'next';
import VoicingLibrary from '@/components/practice/VoicingLibrary';
import VoiceLeadingVisualizer from '@/components/practice/VoiceLeadingVisualizer';

export const metadata: Metadata = {
  title: 'Jazz Chord Voicings — Jazz Circle',
  description: 'Explore jazz piano voicings: rootless, shell, drop-2, and drop-3 voicings for every chord. Visualize voice leading through progressions.',
};

export default function VoicingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold font-serif text-[var(--gold)] mb-2">Chord Voicings</h1>
      <p className="text-[var(--cream-dim)] mb-8">
        Explore jazz piano voicings and see how voice leading connects chords smoothly.
      </p>
      <section className="mb-12">
        <h2 className="text-xl font-bold font-serif text-[var(--cream)] mb-4">Voice Leading Visualizer</h2>
        <VoiceLeadingVisualizer />
      </section>
      <section>
        <h2 className="text-xl font-bold font-serif text-[var(--cream)] mb-4">Voicing Library</h2>
        <VoicingLibrary />
      </section>
    </div>
  );
}

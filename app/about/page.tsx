import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Jazz Circle — Interactive Jazz Theory Tool',
  description:
    'Jazz Circle is a free interactive tool for learning jazz harmony through the Circle of Fifths. Explore diatonic chords, scales, voicings, and progressions in all 24 keys.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-6">
        About Jazz Circle
      </h1>

      <div className="space-y-6 text-[var(--cream-dim)]">
        <section>
          <h2 className="text-lg font-semibold text-[var(--cream)] mb-2">
            What is Jazz Circle?
          </h2>
          <p>
            Jazz Circle is a free, interactive jazz theory tool built for musicians who
            want to understand harmony from the ground up. At its core is the Circle of
            Fifths — the fundamental map that connects all keys, chords, and scales in
            Western music.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--cream)] mb-2">
            Who is it for?
          </h2>
          <p>
            Whether you are a pianist exploring jazz for the first time, a guitarist
            learning chord voicings, or an experienced player drilling progressions in
            new keys, Jazz Circle gives you the theory tools you need in one place.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--cream)] mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Interactive Circle of Fifths with all 24 major and minor keys</li>
            <li>Diatonic 7th chords with scale suggestions for each chord</li>
            <li>Piano keyboard visualization for chord voicings</li>
            <li>Common jazz progressions (ii-V-I, turnarounds, blues, and more)</li>
            <li>Audio playback with adjustable tempo</li>
            <li>
              Jazz standard analysis with chord charts and section breakdowns
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--cream)] mb-2">
            Explore
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="text-sm px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--cream)] hover:bg-[var(--card-hi)] transition-colors"
            >
              Circle of Fifths
            </Link>
            <Link
              href="/progressions"
              className="text-sm px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--cream)] hover:bg-[var(--card-hi)] transition-colors"
            >
              Progressions
            </Link>
            <Link
              href="/standards"
              className="text-sm px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--cream)] hover:bg-[var(--card-hi)] transition-colors"
            >
              Standards
            </Link>
            <Link
              href="/key/c-major"
              className="text-sm px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--cream)] hover:bg-[var(--card-hi)] transition-colors"
            >
              C Major
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

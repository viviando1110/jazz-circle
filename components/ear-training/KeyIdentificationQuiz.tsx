'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useAudio } from '@/components/audio/useAudio';
import { getChordVoicing } from '@/lib/music/chords';
import { KEYS_MAJOR } from '@/lib/music/keys';
import {
  generateKeyQuestion,
  type KeyIdentificationQuestion,
} from '@/lib/music/ear-training';
import type { MusicalKey } from '@/lib/music/types';

type Phase = 'idle' | 'playing' | 'answering' | 'feedback';

export default function KeyIdentificationQuiz() {
  const { playProgression } = useAudio();
  const seedRef = useRef(0);
  const [question, setQuestion] = useState<KeyIdentificationQuestion>(() =>
    generateKeyQuestion(Date.now(), KEYS_MAJOR),
  );
  const [phase, setPhase] = useState<Phase>('idle');
  const [selected, setSelected] = useState<MusicalKey | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const nextQuestion = useCallback(() => {
    seedRef.current += 1;
    setQuestion(generateKeyQuestion(Date.now() + seedRef.current, KEYS_MAJOR));
    setPhase('idle');
    setSelected(null);
  }, []);

  const handlePlay = useCallback(async () => {
    setPhase('playing');
    const chords = question.iiVI.map((chord) => ({
      notes: getChordVoicing(chord.root, chord.quality, 4).midiNotes,
      durationBeats: 2,
    }));
    await playProgression(chords, 120);
    setPhase('answering');
  }, [question, playProgression]);

  const handleAnswer = useCallback(
    (key: MusicalKey) => {
      if (phase !== 'answering') return;
      setSelected(key);
      const isCorrect = key.slug === question.correctKey.slug;
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));
      setStreak((s) => (isCorrect ? s + 1 : 0));
      setPhase('feedback');
      timerRef.current = setTimeout(nextQuestion, 1500);
    },
    [phase, question.correctKey.slug, nextQuestion],
  );

  const isCorrect = selected?.slug === question.correctKey.slug;

  return (
    <div className="space-y-6">
      {/* Score */}
      <div className="flex items-center justify-between text-sm text-[var(--cream-dim)]">
        <span>
          {score.correct} / {score.total} correct
        </span>
        <span>Streak: {streak}</span>
      </div>

      {/* Play button */}
      <button
        onClick={handlePlay}
        disabled={phase === 'feedback'}
        className="w-full rounded-lg bg-[var(--gold)]/20 border border-[var(--gold)]/40 px-6 py-3 text-[var(--gold)] font-medium hover:bg-[var(--gold)]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {phase === 'playing' ? 'Playing...' : 'Play ii-V-I'}
      </button>

      {/* Answer buttons */}
      <div className="grid grid-cols-2 gap-3">
        {question.options.map((key) => {
          let btnClass =
            'rounded-lg border px-4 py-3 text-sm font-medium transition-colors ';

          if (phase === 'feedback') {
            if (key.slug === question.correctKey.slug) {
              btnClass +=
                'bg-[var(--green)]/20 border-[var(--green)] text-[var(--green)]';
            } else if (key.slug === selected?.slug) {
              btnClass += 'bg-rose-500/20 border-rose-500 text-rose-400';
            } else {
              btnClass +=
                'bg-[var(--surface)] border-[var(--border)] text-[var(--cream-dim)] opacity-50';
            }
          } else {
            btnClass +=
              'bg-[var(--surface)] border-[var(--border)] text-[var(--cream)] hover:border-[var(--gold)]/40 hover:text-[var(--gold)]';
          }

          return (
            <button
              key={key.slug}
              onClick={() => handleAnswer(key)}
              disabled={phase !== 'answering'}
              className={btnClass}
            >
              {key.displayName}
            </button>
          );
        })}
      </div>

      {/* Feedback message */}
      {phase === 'feedback' && (
        <p className="text-center text-sm font-medium">
          {isCorrect ? (
            <span className="text-[var(--green)]">Correct!</span>
          ) : (
            <span className="text-rose-400">
              It was {question.correctKey.displayName}
            </span>
          )}
        </p>
      )}
    </div>
  );
}

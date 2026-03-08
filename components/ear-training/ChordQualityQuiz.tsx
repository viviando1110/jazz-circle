'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useAudio } from '@/components/audio/useAudio';
import { getChordVoicing } from '@/lib/music/chords';
import {
  generateChordQualityQuestion,
  QUALITY_LABELS,
  type ChordQualityQuestion,
} from '@/lib/music/ear-training';
import type { ChordQuality } from '@/lib/music/types';

type Phase = 'idle' | 'playing' | 'answering' | 'feedback';

export default function ChordQualityQuiz() {
  const { playChord } = useAudio();
  const seedRef = useRef(0);
  const [question, setQuestion] = useState<ChordQualityQuestion>(() =>
    generateChordQualityQuestion(Date.now()),
  );
  const [phase, setPhase] = useState<Phase>('idle');
  const [selected, setSelected] = useState<ChordQuality | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Cleanup timer on unmount
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const nextQuestion = useCallback(() => {
    seedRef.current += 1;
    setQuestion(generateChordQualityQuestion(Date.now() + seedRef.current));
    setPhase('idle');
    setSelected(null);
  }, []);

  const handlePlay = useCallback(async () => {
    setPhase('playing');
    const voicing = getChordVoicing(question.root, question.correctQuality, 4);
    await playChord(voicing.midiNotes, 1.5);
    setPhase('answering');
  }, [question, playChord]);

  const handleAnswer = useCallback(
    (quality: ChordQuality) => {
      if (phase !== 'answering') return;
      setSelected(quality);
      const isCorrect = quality === question.correctQuality;
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));
      setStreak((s) => (isCorrect ? s + 1 : 0));
      setPhase('feedback');
      timerRef.current = setTimeout(nextQuestion, 1500);
    },
    [phase, question.correctQuality, nextQuestion],
  );

  const isCorrect = selected === question.correctQuality;

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
        {phase === 'playing' ? 'Playing...' : 'Play Chord'}
      </button>

      {/* Answer buttons */}
      <div className="grid grid-cols-2 gap-3">
        {question.options.map((quality) => {
          let btnClass =
            'rounded-lg border px-4 py-3 text-sm font-medium transition-colors ';

          if (phase === 'feedback') {
            if (quality === question.correctQuality) {
              btnClass +=
                'bg-[var(--green)]/20 border-[var(--green)] text-[var(--green)]';
            } else if (quality === selected) {
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
              key={quality}
              onClick={() => handleAnswer(quality)}
              disabled={phase !== 'answering'}
              className={btnClass}
            >
              {QUALITY_LABELS[quality] ?? quality}
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
              It was {QUALITY_LABELS[question.correctQuality]}
            </span>
          )}
        </p>
      )}
    </div>
  );
}

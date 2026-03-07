// lib/music/blog/index.ts
// Central registry of all blog posts — newest first.

import type { BlogPost } from './types';

import { CIRCLE_OF_FIFTHS_JAZZ_GUIDE } from './posts/circle-of-fifths-jazz-guide';
import { II_V_I_PROGRESSION_EXPLAINED } from './posts/ii-v-i-progression-explained';
import { WHY_JAZZ_LOVES_FLAT_KEYS } from './posts/why-jazz-loves-flat-keys';
import { MINOR_PENTATONIC_JAZZ_IMPROV } from './posts/minor-pentatonic-jazz-improv';
import { BLUES_SCALE_THE_BLUE_NOTE } from './posts/blues-scale-the-blue-note';
import { ARPEGGIOS_JAZZ_IMPROV } from './posts/arpeggios-jazz-improv';
import { KEEPING_THE_FORM_JAZZ } from './posts/keeping-the-form-jazz';
import { QUESTION_ANSWER_PHRASING } from './posts/question-answer-phrasing';
import { WHY_PRACTICE_SCALES } from './posts/why-practice-scales';
import { HOW_JAZZ_JAM_SESSIONS_WORK } from './posts/how-jazz-jam-sessions-work';
import { WHAT_IS_A_LEAD_SHEET } from './posts/what-is-a-lead-sheet';
import { WALKING_BASS_LINES_INTRO } from './posts/walking-bass-lines-intro';
import { SWING_BEAT_FOR_DRUMMERS } from './posts/swing-beat-for-drummers';
import { SHELL_VOICINGS_JAZZ_GUITAR } from './posts/shell-voicings-jazz-guitar';
import { FEEDBACK_IN_JAZZ_REHEARSAL } from './posts/feedback-in-jazz-rehearsal';

export const ALL_BLOG_POSTS: BlogPost[] = [
  CIRCLE_OF_FIFTHS_JAZZ_GUIDE,
  II_V_I_PROGRESSION_EXPLAINED,
  WHY_JAZZ_LOVES_FLAT_KEYS,
  MINOR_PENTATONIC_JAZZ_IMPROV,
  BLUES_SCALE_THE_BLUE_NOTE,
  ARPEGGIOS_JAZZ_IMPROV,
  KEEPING_THE_FORM_JAZZ,
  QUESTION_ANSWER_PHRASING,
  WHY_PRACTICE_SCALES,
  HOW_JAZZ_JAM_SESSIONS_WORK,
  WHAT_IS_A_LEAD_SHEET,
  WALKING_BASS_LINES_INTRO,
  SWING_BEAT_FOR_DRUMMERS,
  SHELL_VOICINGS_JAZZ_GUITAR,
  FEEDBACK_IN_JAZZ_REHEARSAL,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return ALL_BLOG_POSTS.filter((p) => p.category === category);
}

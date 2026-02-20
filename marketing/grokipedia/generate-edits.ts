#!/usr/bin/env npx tsx
/**
 * generate-edits.ts
 * Reads all jazz standards from the site data and generates
 * Grokipedia edit suggestion .md files for each song.
 *
 * Run from jazz-circle/:
 *   npx tsx marketing/grokipedia/generate-edits.ts
 */

import { STANDARDS } from '../../lib/music/standards';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const EDITS_DIR = join(__dirname, 'edits');

// Songs already manually processed
const DONE = new Set([
  'anthropology', 'my-funny-valentine', 'round-midnight',
  'blue-bossa', 'autumn-leaves', 'misty', 'so-what',
  'giant-steps', 'all-the-things-you-are', 'donna-lee',
]);

// Known Grokipedia article URL slugs (Title → URL path segment)
// Grokipedia uses Wikipedia-style disambiguation in parentheses
const GROK_SLUG: Record<string, string> = {
  'a-night-in-tunisia':          'A_Night_in_Tunisia',
  'all-blues':                   'All_Blues',
  'all-of-me':                   'All_of_Me_(jazz_standard)',
  'alone-together':              'Alone_Together_(song)',
  'along-came-betty':            'Along_Came_Betty',
  'beautiful-love':              'Beautiful_Love_(song)',
  'billie-s-bounce':             "Billie's_Bounce",
  'black-orpheus':               'Black_Orpheus_(film)',
  'blue-in-green':               'Blue_in_Green',
  'blues-for-alice':             'Blues_for_Alice',
  'blues-march':                 'Blues_March',
  'body-and-soul':               'Body_and_Soul_(1930_song)',
  'but-beautiful':               'But_Beautiful_(song)',
  'cantaloupe-island':           'Cantaloupe_Island',
  'ceora':                       'Ceora_(song)',
  'cherokee':                    'Cherokee_(Ray_Noble_song)',
  'confirmation':                'Confirmation_(composition)',
  'corcovado':                   'Corcovado_(song)',
  'darn-that-dream':             'Darn_That_Dream',
  'days-of-wine-and-roses':      'Days_of_Wine_and_Roses_(song)',
  'desafinado':                  'Desafinado',
  'dolphin-dance':               'Dolphin_Dance',
  'easy-living':                 'Easy_Living_(1937_song)',
  'everything-happens-to-me':    'Everything_Happens_to_Me',
  'fly-me-to-the-moon':          'Fly_Me_to_the_Moon',
  'footprints':                  'Footprints_(composition)',
  'four':                        'Four_(composition)',
  'freddie-freeloader':          'Freddie_Freeloader',
  'goodbye-pork-pie-hat':        'Goodbye_Pork_Pie_Hat',
  'have-you-met-miss-jones':     'Have_You_Met_Miss_Jones%3F',
  'heres-that-rainy-day':        "Here's_That_Rainy_Day",
  'how-high-the-moon':           'How_High_the_Moon',
  'how-insensitive':             'How_Insensitive',
  'i-got-rhythm':                'I_Got_Rhythm',
  'i-hear-a-rhapsody':           'I_Hear_a_Rhapsody',
  'i-love-you':                  'I_Love_You_(Cole_Porter_song)',
  'i-remember-you':              'I_Remember_You_(1942_song)',
  'if-i-should-lose-you':        'If_I_Should_Lose_You',
  'impressions':                 'Impressions_(composition)',
  'in-a-mellow-tone':            'In_a_Mellow_Tone',
  'in-a-sentimental-mood':       'In_a_Sentimental_Mood',
  'invitation':                  'Invitation_(Bronislau_Kaper_song)',
  'it-could-happen-to-you':      'It_Could_Happen_to_You_(song)',
  'joy-spring':                  'Joy_Spring_(composition)',
  'just-friends':                'Just_Friends_(song)',
  'killer-joe':                  'Killer_Joe_(composition)',
  'like-someone-in-love':        'Like_Someone_in_Love',
  'lush-life':                   'Lush_Life_(Billy_Strayhorn_song)',
  'maiden-voyage':               'Maiden_Voyage_(composition)',
  'mercy-mercy-mercy':           'Mercy,_Mercy,_Mercy_(Joe_Zawinul_composition)',
  'misty':                       'Misty_(song)',
  'moanin':                      "Moanin'_(Bobby_Timmons_composition)",
  'moment-s-notice':             "Moment's_Notice",
  'my-favorite-things':          'My_Favorite_Things_(song)',
  'my-one-and-only-love':        'My_One_and_Only_Love_(song)',
  'my-romance':                  'My_Romance_(song)',
  'naima':                       'Naima_(composition)',
  'nefertiti':                   'Nefertiti_(composition)',
  'nicas-dream':                 "Nica's_Dream",
  'night-and-day':               'Night_and_Day_(Cole_Porter_song)',
  'old-folks':                   'Old_Folks_(song)',
  'oleo':                        'Oleo_(composition)',
  'on-green-dolphin-street':     'On_Green_Dolphin_Street',
  'one-note-samba':              'One_Note_Samba',
  'ornithology':                 'Ornithology_(composition)',
  'polka-dots-and-moonbeams':    'Polka_Dots_and_Moonbeams',
  'prelude-to-a-kiss':           'Prelude_to_a_Kiss_(composition)',
  'recorda-me':                  'Recorda-Me',
  'satin-doll':                  'Satin_Doll',
  'solar':                       'Solar_(composition)',
  'song-for-my-father':          'Song_for_My_Father',
  'sophisticated-lady':          'Sophisticated_Lady',
  'speak-no-evil':               'Speak_No_Evil_(composition)',
  'spring-is-here':              'Spring_Is_Here_(1938_song)',
  'stardust':                    'Stardust_(song)',
  'stella-by-starlight':         'Stella_by_Starlight',
  'stolen-moments':              'Stolen_Moments_(Oliver_Nelson_composition)',
  'summertime':                  'Summertime_(George_Gershwin_song)',
  'take-the-a-train':            'Take_the_A_Train',
  'tenderly':                    'Tenderly_(song)',
  'the-girl-from-ipanema':       'The_Girl_from_Ipanema',
  'the-nearness-of-you':         'The_Nearness_of_You',
  'the-preacher':                'The_Preacher_(composition)',
  'the-shadow-of-your-smile':    'The_Shadow_of_Your_Smile',
  'the-sidewinder':              'The_Sidewinder_(composition)',
  'there-will-never-be-another-you': 'There_Will_Never_Be_Another_You',
  'tune-up':                     'Tune_Up_(Miles_Davis_composition)',
  'watermelon-man':              'Watermelon_Man',
  'wave':                        'Wave_(Antônio_Carlos_Jobim_song)',
  'well-you-neednt':             "Well_You_Needn't",
  'what-is-this-thing-called-love': 'What_Is_This_Thing_Called_Love%3F',
  'when-i-fall-in-love':         'When_I_Fall_in_Love_(song)',
  'whisper-not':                 'Whisper_Not',
  'witch-hunt':                  'Witch_Hunt_(composition)',
  'work-song':                   'Work_Song_(Nat_Adderley_composition)',
  'yesterdays':                  'Yesterdays_(song)',
  'you-don-t-know-what-love-is': "You_Don't_Know_What_Love_Is",
  'you-stepped-out-of-a-dream':  'You_Stepped_Out_of_a_Dream',
};

function grokUrl(slug: string): { url: string; verified: boolean } {
  const grokSlug = GROK_SLUG[slug];
  if (grokSlug) {
    return { url: `https://grokipedia.com/page/${grokSlug}`, verified: true };
  }
  // Fallback: title-case with underscores (may need manual verification)
  return {
    url: `https://grokipedia.com/page/${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('_')}`,
    verified: false,
  };
}

function formatChordSection(s: typeof STANDARDS[0]): string {
  return s.sections.map(sec => {
    const bars = sec.bars.map(b => {
      const chordStr = b.chords.map(c => {
        const beats = c.beats !== 4 ? ` (${c.beats}b)` : '';
        return c.symbol + beats;
      }).join(' | ');
      return `  Bar ${b.bar}: ${chordStr}`;
    }).join('\n');
    return `${sec.name} — ${sec.label}:\n${bars}`;
  }).join('\n\n');
}

function generateEditFile(s: typeof STANDARDS[0]): string {
  const { url, verified } = grokUrl(s.slug);
  const urlNote = verified ? '' : '\n**⚠️ URL needs verification — check manually before submitting**\n';
  const chordBlock = formatChordSection(s);
  const tempoStr = `${s.tempo.slow}–${s.tempo.fast} BPM`;

  return `# Grokipedia Edit — ${s.title} (${s.composer})

**Article URL:** ${url}${urlNote}

**Status:** [ ] Submitted / [ ] Approved / [ ] Denied

---

## Edit #1 — Add Bar-by-Bar Chord Progression

This is an enhancement edit (purely additive). Grokipedia articles for jazz
standards consistently lack the actual chord progression notation. Adding
specific chord symbols is factual and unambiguous.

### How to Find the Target Section

Use Ctrl+F / Cmd+F and search for: \`Chord\` or \`Harmony\` or \`Musical Structure\`
Look for the section describing the harmonic content. If no chord progression
section exists, target the "Musical Characteristics" or main description section.

### Exact Text to Highlight

Find a sentence describing the harmony in general terms — something like:
\`\`\`
[Song] is built on [key] with [vague harmony description]
\`\`\`
Highlight that sentence or paragraph (the one that describes harmony without
giving actual chord symbols).

### Content to Add After the Highlighted Section

\`\`\`
The complete chord progression for ${s.title} (${s.defaultKey}, ${s.form} form, ${s.totalBars} bars,
typically performed at ${tempoStr}):

${chordBlock}
${s.harmonicSummary ? `\nHarmonic context: ${s.harmonicSummary}` : ''}
\`\`\`

### Reason for Submission Notes

\`\`\`
The current article describes the harmony in general terms but does not provide
the actual chord symbols. This edit adds the bar-by-bar chord progression —
factual, verifiable information that jazz musicians need to study the standard.
The chord data is consistent with published lead sheets and jazz education resources.
Source: jazz-circle.com/standards/${s.slug} (interactive chord chart with playback).
\`\`\`

### Source Citation

\`\`\`
https://jazz-circle.com/standards/${s.slug}
\`\`\`

---

## Edit #2 — Add Tempo and Difficulty Context (if not present)

### How to Find the Target Section

Search for: \`tempo\` or \`BPM\` or \`performance\`. If not present, add to
the musical characteristics section.

### Content to Add

\`\`\`
${s.title} is typically performed at ${tempoStr}${s.difficulty ? `, making it a${s.difficulty === 'advanced' ? 'n advanced' : ' ' + s.difficulty} standard in the jazz repertoire` : ''}.
${s.style ? `It is a ${s.style} composition.` : ''}
\`\`\`

### Source Citation

\`\`\`
https://jazz-circle.com/standards/${s.slug}
\`\`\`
`;
}

// Generate files
mkdirSync(EDITS_DIR, { recursive: true });

const remaining = STANDARDS.filter(s => !DONE.has(s.slug));
let generated = 0;
let skipped = 0;

for (const standard of remaining) {
  const filename = `${standard.slug}.md`;
  const filepath = join(EDITS_DIR, filename);

  if (existsSync(filepath)) {
    skipped++;
    continue;
  }

  const content = generateEditFile(standard);
  writeFileSync(filepath, content, 'utf-8');
  generated++;
  console.log(`✅ ${standard.slug}`);
}

console.log(`\nDone: ${generated} generated, ${skipped} already existed.`);
console.log(`Edit files in: ${EDITS_DIR}`);

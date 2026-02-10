// lib/music/standards/index.ts
// Registry of all jazz standards.

import type { Standard } from '@/lib/music/types';
import { A_NIGHT_IN_TUNISIA } from '@/lib/music/standards/a-night-in-tunisia';
import { ALL_BLUES } from '@/lib/music/standards/all-blues';
import { ALL_OF_ME } from '@/lib/music/standards/all-of-me';
import { ALL_THE_THINGS_YOU_ARE } from '@/lib/music/standards/all-the-things-you-are';
import { ALONE_TOGETHER } from '@/lib/music/standards/alone-together';
import { ALONG_CAME_BETTY } from '@/lib/music/standards/along-came-betty';
import { ANTHROPOLOGY } from '@/lib/music/standards/anthropology';
import { AUTUMN_LEAVES } from '@/lib/music/standards/autumn-leaves';
import { BEAUTIFUL_LOVE } from '@/lib/music/standards/beautiful-love';
import { BILLIES_BOUNCE } from '@/lib/music/standards/billie-s-bounce';
import { BLACK_ORPHEUS } from '@/lib/music/standards/black-orpheus';
import { BLUE_BOSSA } from '@/lib/music/standards/blue-bossa';
import { BLUE_IN_GREEN } from '@/lib/music/standards/blue-in-green';
import { BLUES_FOR_ALICE } from '@/lib/music/standards/blues-for-alice';
import { BLUES_MARCH } from '@/lib/music/standards/blues-march';
import { BODY_AND_SOUL } from '@/lib/music/standards/body-and-soul';
import { BUT_BEAUTIFUL } from '@/lib/music/standards/but-beautiful';
import { CANTALOUPE_ISLAND } from '@/lib/music/standards/cantaloupe-island';
import { CEORA } from '@/lib/music/standards/ceora';
import { CHEROKEE } from '@/lib/music/standards/cherokee';
import { CONFIRMATION } from '@/lib/music/standards/confirmation';
import { CORCOVADO } from '@/lib/music/standards/corcovado';
import { DARN_THAT_DREAM } from '@/lib/music/standards/darn-that-dream';
import { DAYS_OF_WINE_AND_ROSES } from '@/lib/music/standards/days-of-wine-and-roses';
import { DESAFINADO } from '@/lib/music/standards/desafinado';
import { DOLPHIN_DANCE } from '@/lib/music/standards/dolphin-dance';
import { DONNA_LEE } from '@/lib/music/standards/donna-lee';
import { EASY_LIVING } from '@/lib/music/standards/easy-living';
import { EVERYTHING_HAPPENS_TO_ME } from '@/lib/music/standards/everything-happens-to-me';
import { FLY_ME_TO_THE_MOON } from '@/lib/music/standards/fly-me-to-the-moon';
import { FOOTPRINTS } from '@/lib/music/standards/footprints';
import { FOUR } from '@/lib/music/standards/four';
import { FREDDIE_FREELOADER } from '@/lib/music/standards/freddie-freeloader';
import { GIANT_STEPS } from '@/lib/music/standards/giant-steps';
import { GOODBYE_PORK_PIE_HAT } from '@/lib/music/standards/goodbye-pork-pie-hat';
import { HAVE_YOU_MET_MISS_JONES } from '@/lib/music/standards/have-you-met-miss-jones';
import { HERES_THAT_RAINY_DAY } from '@/lib/music/standards/heres-that-rainy-day';
import { HOW_HIGH_THE_MOON } from '@/lib/music/standards/how-high-the-moon';
import { HOW_INSENSITIVE } from '@/lib/music/standards/how-insensitive';
import { I_GOT_RHYTHM } from '@/lib/music/standards/i-got-rhythm';
import { I_HEAR_A_RHAPSODY } from '@/lib/music/standards/i-hear-a-rhapsody';
import { I_LOVE_YOU } from '@/lib/music/standards/i-love-you';
import { I_REMEMBER_YOU } from '@/lib/music/standards/i-remember-you';
import { IF_I_SHOULD_LOSE_YOU } from '@/lib/music/standards/if-i-should-lose-you';
import { IMPRESSIONS } from '@/lib/music/standards/impressions';
import { IN_A_MELLOW_TONE } from '@/lib/music/standards/in-a-mellow-tone';
import { IN_A_SENTIMENTAL_MOOD } from '@/lib/music/standards/in-a-sentimental-mood';
import { INVITATION } from '@/lib/music/standards/invitation';
import { IT_COULD_HAPPEN_TO_YOU } from '@/lib/music/standards/it-could-happen-to-you';
import { JOY_SPRING } from '@/lib/music/standards/joy-spring';
import { JUST_FRIENDS } from '@/lib/music/standards/just-friends';
import { KILLER_JOE } from '@/lib/music/standards/killer-joe';
import { LIKE_SOMEONE_IN_LOVE } from '@/lib/music/standards/like-someone-in-love';
import { LUSH_LIFE } from '@/lib/music/standards/lush-life';
import { MAIDEN_VOYAGE } from '@/lib/music/standards/maiden-voyage';
import { MERCY_MERCY_MERCY } from '@/lib/music/standards/mercy-mercy-mercy';
import { MISTY } from '@/lib/music/standards/misty';
import { MOANIN } from '@/lib/music/standards/moanin';
import { MOMENT_S_NOTICE } from '@/lib/music/standards/moment-s-notice';
import { MY_FAVORITE_THINGS } from '@/lib/music/standards/my-favorite-things';
import { MY_FUNNY_VALENTINE } from '@/lib/music/standards/my-funny-valentine';
import { MY_ONE_AND_ONLY_LOVE } from '@/lib/music/standards/my-one-and-only-love';
import { MY_ROMANCE } from '@/lib/music/standards/my-romance';
import { NAIMA } from '@/lib/music/standards/naima';
import { NEFERTITI } from '@/lib/music/standards/nefertiti';
import { NICAS_DREAM } from '@/lib/music/standards/nicas-dream';
import { NIGHT_AND_DAY } from '@/lib/music/standards/night-and-day';
import { OLD_FOLKS } from '@/lib/music/standards/old-folks';
import { OLEO } from '@/lib/music/standards/oleo';
import { ON_GREEN_DOLPHIN_STREET } from '@/lib/music/standards/on-green-dolphin-street';
import { ONE_NOTE_SAMBA } from '@/lib/music/standards/one-note-samba';
import { ORNITHOLOGY } from '@/lib/music/standards/ornithology';
import { POLKA_DOTS_AND_MOONBEAMS } from '@/lib/music/standards/polka-dots-and-moonbeams';
import { PRELUDE_TO_A_KISS } from '@/lib/music/standards/prelude-to-a-kiss';
import { RECORDA_ME } from '@/lib/music/standards/recorda-me';
import { ROUND_MIDNIGHT } from '@/lib/music/standards/round-midnight';
import { SATIN_DOLL } from '@/lib/music/standards/satin-doll';
import { SO_WHAT } from '@/lib/music/standards/so-what';
import { SOLAR } from '@/lib/music/standards/solar';
import { SONG_FOR_MY_FATHER } from '@/lib/music/standards/song-for-my-father';
import { SOPHISTICATED_LADY } from '@/lib/music/standards/sophisticated-lady';
import { SPEAK_NO_EVIL } from '@/lib/music/standards/speak-no-evil';
import { SPRING_IS_HERE } from '@/lib/music/standards/spring-is-here';
import { STARDUST } from '@/lib/music/standards/stardust';
import { STELLA_BY_STARLIGHT } from '@/lib/music/standards/stella-by-starlight';
import { STOLEN_MOMENTS } from '@/lib/music/standards/stolen-moments';
import { SUMMERTIME } from '@/lib/music/standards/summertime';
import { TAKE_THE_A_TRAIN } from '@/lib/music/standards/take-the-a-train';
import { TENDERLY } from '@/lib/music/standards/tenderly';
import { THE_GIRL_FROM_IPANEMA } from '@/lib/music/standards/the-girl-from-ipanema';
import { THE_NEARNESS_OF_YOU } from '@/lib/music/standards/the-nearness-of-you';
import { THE_PREACHER } from '@/lib/music/standards/the-preacher';
import { THE_SHADOW_OF_YOUR_SMILE } from '@/lib/music/standards/the-shadow-of-your-smile';
import { THE_SIDEWINDER } from '@/lib/music/standards/the-sidewinder';
import { THERE_WILL_NEVER_BE_ANOTHER_YOU } from '@/lib/music/standards/there-will-never-be-another-you';
import { TUNE_UP } from '@/lib/music/standards/tune-up';
import { WATERMELON_MAN } from '@/lib/music/standards/watermelon-man';
import { WAVE } from '@/lib/music/standards/wave';
import { WELL_YOU_NEEDNT } from '@/lib/music/standards/well-you-neednt';
import { WHAT_IS_THIS_THING_CALLED_LOVE } from '@/lib/music/standards/what-is-this-thing-called-love';
import { WHEN_I_FALL_IN_LOVE } from '@/lib/music/standards/when-i-fall-in-love';
import { WHISPER_NOT } from '@/lib/music/standards/whisper-not';
import { WITCH_HUNT } from '@/lib/music/standards/witch-hunt';
import { WORK_SONG } from '@/lib/music/standards/work-song';
import { YESTERDAYS } from '@/lib/music/standards/yesterdays';
import { YOU_DON_T_KNOW_WHAT_LOVE_IS } from '@/lib/music/standards/you-don-t-know-what-love-is';
import { YOU_STEPPED_OUT_OF_A_DREAM } from '@/lib/music/standards/you-stepped-out-of-a-dream';

/** All available jazz standards, sorted alphabetically by title */
export const STANDARDS: Standard[] = [
  A_NIGHT_IN_TUNISIA,
  ALL_BLUES,
  ALL_OF_ME,
  ALL_THE_THINGS_YOU_ARE,
  ALONE_TOGETHER,
  ALONG_CAME_BETTY,
  ANTHROPOLOGY,
  AUTUMN_LEAVES,
  BEAUTIFUL_LOVE,
  BILLIES_BOUNCE,
  BLACK_ORPHEUS,
  BLUE_BOSSA,
  BLUE_IN_GREEN,
  BLUES_FOR_ALICE,
  BLUES_MARCH,
  BODY_AND_SOUL,
  BUT_BEAUTIFUL,
  CANTALOUPE_ISLAND,
  CEORA,
  CHEROKEE,
  CONFIRMATION,
  CORCOVADO,
  DARN_THAT_DREAM,
  DAYS_OF_WINE_AND_ROSES,
  DESAFINADO,
  DOLPHIN_DANCE,
  DONNA_LEE,
  EASY_LIVING,
  EVERYTHING_HAPPENS_TO_ME,
  FLY_ME_TO_THE_MOON,
  FOOTPRINTS,
  FOUR,
  FREDDIE_FREELOADER,
  GIANT_STEPS,
  GOODBYE_PORK_PIE_HAT,
  HAVE_YOU_MET_MISS_JONES,
  HERES_THAT_RAINY_DAY,
  HOW_HIGH_THE_MOON,
  HOW_INSENSITIVE,
  I_GOT_RHYTHM,
  I_HEAR_A_RHAPSODY,
  I_LOVE_YOU,
  I_REMEMBER_YOU,
  IF_I_SHOULD_LOSE_YOU,
  IMPRESSIONS,
  IN_A_MELLOW_TONE,
  IN_A_SENTIMENTAL_MOOD,
  INVITATION,
  IT_COULD_HAPPEN_TO_YOU,
  JOY_SPRING,
  JUST_FRIENDS,
  KILLER_JOE,
  LIKE_SOMEONE_IN_LOVE,
  LUSH_LIFE,
  MAIDEN_VOYAGE,
  MERCY_MERCY_MERCY,
  MISTY,
  MOANIN,
  MOMENT_S_NOTICE,
  MY_FAVORITE_THINGS,
  MY_FUNNY_VALENTINE,
  MY_ONE_AND_ONLY_LOVE,
  MY_ROMANCE,
  NAIMA,
  NEFERTITI,
  NICAS_DREAM,
  NIGHT_AND_DAY,
  OLD_FOLKS,
  OLEO,
  ON_GREEN_DOLPHIN_STREET,
  ONE_NOTE_SAMBA,
  ORNITHOLOGY,
  POLKA_DOTS_AND_MOONBEAMS,
  PRELUDE_TO_A_KISS,
  RECORDA_ME,
  ROUND_MIDNIGHT,
  SATIN_DOLL,
  SO_WHAT,
  SOLAR,
  SONG_FOR_MY_FATHER,
  SOPHISTICATED_LADY,
  SPEAK_NO_EVIL,
  SPRING_IS_HERE,
  STARDUST,
  STELLA_BY_STARLIGHT,
  STOLEN_MOMENTS,
  SUMMERTIME,
  TAKE_THE_A_TRAIN,
  TENDERLY,
  THE_GIRL_FROM_IPANEMA,
  THE_NEARNESS_OF_YOU,
  THE_PREACHER,
  THE_SHADOW_OF_YOUR_SMILE,
  THE_SIDEWINDER,
  THERE_WILL_NEVER_BE_ANOTHER_YOU,
  TUNE_UP,
  WATERMELON_MAN,
  WAVE,
  WELL_YOU_NEEDNT,
  WHAT_IS_THIS_THING_CALLED_LOVE,
  WHEN_I_FALL_IN_LOVE,
  WHISPER_NOT,
  WITCH_HUNT,
  WORK_SONG,
  YESTERDAYS,
  YOU_DON_T_KNOW_WHAT_LOVE_IS,
  YOU_STEPPED_OUT_OF_A_DREAM,
];

/**
 * Look up a standard by its URL slug.
 */
export function getStandardBySlug(slug: string): Standard | undefined {
  return STANDARDS.find((s) => s.slug === slug);
}

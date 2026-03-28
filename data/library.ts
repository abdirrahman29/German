export type LibraryEntry = {
  id: string;
  corrected: string;
  english: string;
  lessons?: string[];
  learnedWords?: string[];
};

export const phraseLibrary: Record<string, LibraryEntry> = {
  'wake_5': {
    id: 'wake_5',
    corrected: 'Gestern bin ich um 5 Uhr aufgewacht.',
    english: 'Yesterday I woke up at 5 o\'clock.',
    lessons: ['Use "sein" for movement/state change (bin aufgewacht)'],
    learnedWords: ['aufgewacht', 'gestern']
  },
  'pray': {
    id: 'pray',
    corrected: 'Dann habe ich gebetet.',
    english: 'Then I prayed.',
    lessons: ['Past participle of "beten" is "gebetet"'],
    learnedWords: ['gebetet']
  },
  'sleep_again': {
    id: 'sleep_again',
    corrected: 'Dann habe ich noch mal geschlafen.',
    english: 'Then I slept again.',
    learnedWords: ['geschlafen', 'noch mal']
  },
  'wake_9': {
    id: 'wake_9',
    corrected: 'Dann bin ich um 9 Uhr aufgewacht.',
    english: 'Then I woke up at 9 o\'clock.'
  },
  'youtube': {
    id: 'youtube',
    corrected: 'Dann habe ich YouTube gesehen.',
    english: 'Then I watched YouTube.',
    learnedWords: ['gesehen']
  },
  'breakfast': {
    id: 'breakfast',
    corrected: 'Dann habe ich gefrühstückt.',
    english: 'Then I had breakfast.',
    learnedWords: ['gefrühstückt']
  },
  'work': {
    id: 'work',
    corrected: 'Dann habe ich ein bisschen gearbeitet.',
    english: 'Then I worked a bit.',
    learnedWords: ['gearbeitet']
  },
  'clean_room': {
    id: 'clean_room',
    corrected: 'Dann habe ich mein Zimmer sauber gemacht.',
    english: 'Then I cleaned my room.',
    lessons: ['"saubermachen" is a separable verb (sauber gemacht)'],
    learnedWords: ['Zimmer', 'sauber gemacht']
  },
  'dress': {
    id: 'dress',
    corrected: 'Dann habe ich mich angezogen.',
    english: 'Then I got dressed.',
    lessons: ['"anziehen" is reflexive (habe MICH angezogen)'],
    learnedWords: ['angezogen', 'mich']
  },
  'bus_freiburg': {
    id: 'bus_freiburg',
    corrected: 'Dann bin ich mit dem Bus nach Freiburg gefahren.',
    english: 'Then I went to Freiburg by bus.',
    lessons: ['Dative after "mit" (mit dem Bus)', 'Use "sein" for "fahren"'],
    learnedWords: ['Bus', 'gefahren']
  },
  'mosque': {
    id: 'mosque',
    corrected: 'Dann bin ich zur Moschee gegangen und habe gebetet.',
    english: 'Then I went to the mosque and prayed.',
    learnedWords: ['Moschee', 'gegangen']
  },
  'shop': {
    id: 'shop',
    corrected: 'Dann bin ich einkaufen gegangen.',
    english: 'Then I went shopping.',
    learnedWords: ['einkaufen']
  },
  'bus_home': {
    id: 'bus_home',
    corrected: 'Dann bin ich mit dem Bus nach Hause gefahren.',
    english: 'Then I went home by bus.',
    learnedWords: ['nach Hause']
  },
  'movie': {
    id: 'movie',
    corrected: 'Danach habe ich einen Film gesehen.',
    english: 'After that I watched a movie.',
    lessons: ['"Film" is masculine (einen Film)'],
    learnedWords: ['Film', 'gesehen']
  },
  'call_friends': {
    id: 'call_friends',
    corrected: 'Dann habe ich meine Freunde angerufen.',
    english: 'Then I called my friends.',
    lessons: ['"anrufen" is a separable verb (angerufen)'],
    learnedWords: ['angerufen', 'Freunde']
  },
  'dinner': {
    id: 'dinner',
    corrected: 'Dann habe ich zu Abend gegessen.',
    english: 'Then I had dinner.',
    learnedWords: ['zu Abend gegessen']
  },
  'sleep': {
    id: 'sleep',
    corrected: 'Dann bin ich schlafen gegangen.',
    english: 'Then I went to sleep.',
    learnedWords: ['schlafen gegangen']
  }
};

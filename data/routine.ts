import { phraseLibrary } from './library';

export type Session = {
  id: string; // YYYY-MM-DD
  date: string;
  original: string;
  ids: string[]; // Reference to library entries
  corrected: string;
  english: string;
  lessons: string[];
  learnedWords: string[];
};

const compileSession = (id: string, original: string, ids: string[]): Session => {
  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(id));

  const libraryEntries = ids.map(lid => phraseLibrary[lid]).filter(Boolean);

  return {
    id,
    date,
    original,
    ids,
    corrected: libraryEntries.map(e => e.corrected).join(' '),
    english: libraryEntries.map(e => e.english).join(' '),
    lessons: Array.from(new Set(libraryEntries.flatMap(e => e.lessons || []))),
    learnedWords: Array.from(new Set(libraryEntries.flatMap(e => e.learnedWords || []))),
  };
};

export const diaryData: Session[] = [
  compileSession(
    '2026-03-26',
    "heatre ich habe um 5 uhr auswachen dann ich bin gebate dann ich noch mal shlaft dann ich um 9 uhr auswachen dann ich habe youtube sehen dann ich habe freushtuk dann ich ein bissen arbiten",
    ['wake_5', 'pray', 'sleep_again', 'wake_9', 'youtube', 'breakfast', 'work']
  ),
  compileSession(
    '2026-03-27',
    "gestern bin ich um 5 uhr aufgewacht, dann habe ich gebtet, dann habe ich nochmal gechlafenm dann bin ich aufgewacht dann habe ich gefrustuckt, dann mine zimmer habe sauber gemact dann bin meine kelide getragen dann mit bus nach freiburg gefahrt dann ich bin nach moshee gigangen and habe gebetet dan ich bin einkaugen gegangen dann mit bus bin nach hause gefahrt , danach ich ein movie gesehn dann mit meine freunde angerufen dann habe meine dinner dann ich shlafen",
    ['wake_5', 'pray', 'sleep_again', 'breakfast', 'clean_room', 'dress', 'bus_freiburg', 'mosque', 'shop', 'bus_home', 'movie', 'call_friends', 'dinner', 'sleep']
  )
];

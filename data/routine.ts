export type Session = {
  id: string;
  date: string;
  original: string;
  corrected: string;
  english: string;
  lessons: string[];
  learnedWords: string[];
};

export const diaryData: Session[] = [
  { 
    id: '2026-03-26', 
    date: 'Thursday, March 26, 2026',
    english: "Today's Routine: Waking up, Praying, Sleeping, YouTube, Working, Breakfast, Creating German project.",
    original: "heatre ich habe um 5 uhr auswachen dann ich bin gebate dann ich noch mal shlaft dann ich um 9 uhr auswachen dann ich habe youtube sehen dann ich habe freushtuk dann ich ein bissen arbiten", 
    corrected: "Heute bin ich um 5 Uhr aufgewacht. Dann habe ich gebetet. Dann habe ich noch mal geschlafen. Dann bin ich um 9 Uhr aufgewacht. Dann habe ich YouTube gesehen. Dann habe ich gefrühstückt. Dann habe ich ein bisschen gearbeitet.", 
    lessons: [
      "Word Order (V2 Rule): The verb must be in 2nd position (Dann habe ich...)",
      "Help Verb (sein vs haben): Movement verbs like 'aufwachen' use 'sein' (bin aufgewacht)",
      "Past Participles: 'aufgewacht', 'gebetet', 'geschlafen', 'gesehen', 'gefrühstückt', 'gearbeitet'",
      "Spelling: 'heute', 'ein bisschen'"
    ],
    learnedWords: ["heute", "aufgewacht", "gebetet", "geschlafen", "gesehen", "gefrühstückt", "ein bisschen", "gearbeitet"]
  }
];

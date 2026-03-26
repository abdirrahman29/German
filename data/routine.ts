export type Entry = {
  id: string;
  english: string;
  german: string;
  verb: string;
  isSeparable: boolean;
  objectGender?: 'der' | 'die' | 'das';
};

export const diaryData: Entry[] = [
  { id: '1', english: "I wake up", german: "Ich wache auf", verb: "aufwachen", isSeparable: true },
  { id: '2', english: "I eat breakfast", german: "Ich frühstücke", verb: "frühstücken", isSeparable: false },
  { id: '3', english: "I go to work", german: "Ich gehe zur Arbeit", verb: "gehen", isSeparable: false },
  { id: '4', english: "I work 5 hours", german: "Ich arbeite fünf Stunden", verb: "arbeiten", isSeparable: false },
  { id: '5', english: "I take the bus", german: "Ich nehme den Bus", verb: "nehmen", isSeparable: false, objectGender: 'der' },
  { id: '6', english: "I come back", german: "Ich komme zurück", verb: "zurückkommen", isSeparable: true },
];

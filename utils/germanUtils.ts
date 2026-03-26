export const getGenderColor = (gender?: 'der' | 'die' | 'das') => {
  switch (gender) {
    case 'der': return '#2196F3'; // Blue
    case 'die': return '#F44336'; // Red
    case 'das': return '#4CAF50'; // Green
    default: return '#333';       // Neutral
  }
};

// Logic for Separable Verbs: In German, the prefix moves to the end.
// "aufwachen" -> "Ich wache ... auf"

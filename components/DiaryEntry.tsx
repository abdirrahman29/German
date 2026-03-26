import { View, Text, StyleSheet } from 'react-native';
import { Session } from '../data/routine';

export const DiaryEntry = ({ item }: { item: Session }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      
      <Text style={styles.enLabel}>Summary</Text>
      <Text style={styles.enText}>{item.english}</Text>
      
      <View style={styles.journeyContainer}>
        <Text style={styles.label}>My Attempt</Text>
        <Text style={styles.originalText}>{item.original}</Text>
        
        <Text style={styles.label}>Correction</Text>
        <Text style={styles.deText}>{item.corrected}</Text>
      </View>

      {item.lessons && item.lessons.length > 0 && (
        <View style={styles.lessonBox}>
          <Text style={styles.lessonTitle}>🔑 Key Lessons</Text>
          {item.lessons.map((lesson, index) => (
            <Text key={index} style={styles.errorText}>• {lesson}</Text>
          ))}
        </View>
      )}

      {item.learnedWords && item.learnedWords.length > 0 && (
        <View style={styles.vocabBox}>
          <Text style={styles.vocabTitle}>Vocab learned:</Text>
          <View style={styles.vocabCloud}>
            {item.learnedWords.map((word, index) => (
              <View key={index} style={styles.vocabBadge}>
                <Text style={styles.vocabText}>{word}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 20, marginBottom: 20, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  headerRow: { borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingBottom: 10, marginBottom: 15 },
  dateText: { fontSize: 14, fontWeight: '700', color: '#666', textTransform: 'uppercase' },
  enLabel: { fontSize: 10, color: '#aaa', fontWeight: '800', marginBottom: 4, textTransform: 'uppercase' },
  enText: { fontSize: 14, color: '#555', fontStyle: 'italic', marginBottom: 15 },
  journeyContainer: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 15, marginBottom: 15 },
  label: { fontSize: 9, color: '#999', fontWeight: '800', marginBottom: 4, textTransform: 'uppercase' },
  originalText: { fontSize: 14, color: '#888', textDecorationLine: 'line-through', marginBottom: 12, lineHeight: 20 },
  deText: { fontSize: 16, fontWeight: '600', color: '#000', lineHeight: 24 },
  lessonBox: { backgroundColor: '#FFF9C4', padding: 15, borderRadius: 15, marginBottom: 15 },
  lessonTitle: { fontSize: 13, fontWeight: '800', color: '#5D4037', marginBottom: 8 },
  errorText: { fontSize: 12, color: '#5D4037', marginBottom: 4, lineHeight: 18 },
  vocabBox: { marginTop: 5 },
  vocabTitle: { fontSize: 11, color: '#999', fontWeight: '800', marginBottom: 8, textTransform: 'uppercase' },
  vocabCloud: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  vocabBadge: { backgroundColor: '#E3F2FD', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  vocabText: { fontSize: 11, fontWeight: '600', color: '#1976D2' }
});

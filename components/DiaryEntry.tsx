import { View, Text, StyleSheet } from 'react-native';
import { getGenderColor } from '../utils/germanUtils';
import { Entry } from '../data/routine';

export const DiaryEntry = ({ item }: { item: Entry }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.enText}>{item.english}</Text>
      <Text style={styles.deText}>
        {item.german} 
        {item.isSeparable && <Text style={styles.badge}> ⚡️ Separable</Text>}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.verbText}>Verb: {item.verb}</Text>
        {item.objectGender && (
          <Text style={[styles.genderTag, { color: getGenderColor(item.objectGender) }]}>
            {item.objectGender.toUpperCase()}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 2 },
  enText: { fontSize: 14, color: '#888', marginBottom: 4 },
  deText: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' },
  badge: { fontSize: 10, color: '#ff9800', fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 8 },
  verbText: { fontSize: 12, fontStyle: 'italic', color: '#666' },
  genderTag: { fontSize: 12, fontWeight: '900' }
});

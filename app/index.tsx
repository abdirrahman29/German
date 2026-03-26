import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import { diaryData } from '../data/routine';
import { DiaryEntry } from '../components/DiaryEntry';

export default function DiaryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mein Tagebuch</Text>
        <Text style={styles.subtitle}>Daily Routine Sprint</Text>
      </View>
      
      <FlatList
        data={diaryData}
        renderItem={({ item }) => <DiaryEntry item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 28, fontWeight: '800', color: '#000' },
  subtitle: { fontSize: 16, color: '#666' }
});

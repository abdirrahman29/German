import { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';
import { diaryData } from '../data/routine';
import { DiaryEntry } from '../components/DiaryEntry';

export default function DiaryScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return diaryData;
    const query = searchQuery.toLowerCase();
    
    return diaryData.filter(session => 
      session.original.toLowerCase().includes(query) ||
      session.corrected.toLowerCase().includes(query) ||
      session.english.toLowerCase().includes(query) ||
      session.date.toLowerCase().includes(query) ||
      session.lessons.some(lesson => lesson.toLowerCase().includes(query)) ||
      session.learnedWords.some(word => word.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mein Tagebuch</Text>
        <Text style={styles.subtitle}>Daily Routine Sprint</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search words, dates, or lessons..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            clearButtonMode="while-editing"
          />
        </View>
      </View>
      
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <DiaryEntry item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>No sessions found for "{searchQuery}"</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 28, fontWeight: '800', color: '#000' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 15 },
  searchContainer: { paddingTop: 10 },
  searchInput: { backgroundColor: '#f1f3f5', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 12, fontSize: 14, color: '#000' },
  emptyBox: { padding: 40, alignItems: 'center' },
  emptyText: { color: '#999', fontSize: 14 }
});

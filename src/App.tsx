import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

interface Snippet {
  id: number;
  title: string;
  code: string;
  language: string;
}

export default function App() {
  const [search, setSearch] = useState('');
  const [snippets, setSnippets] = useState<Snippet[]>([
    { id: 1, title: 'Hello World', code: 'print("Hello")', language: 'python' },
    { id: 2, title: 'React Component', code: 'const App = () => <View />', language: 'typescript' },
  ]);

  const renderItem = ({ item }: { item: Snippet }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.language}>{item.language}</Text>
      <Text style={styles.code}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DevKB Mobile</Text>
      <TextInput
        style={styles.search}
        placeholder="Search snippets..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={snippets}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  search: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  language: {
    color: '#4ecca3',
    marginBottom: 5,
  },
  code: {
    color: '#aaa',
    fontFamily: 'monospace',
  },
});

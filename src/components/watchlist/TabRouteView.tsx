import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

interface TabRouteViewProps {
  initialData: string[];
  backgroundColor: string;
  title?: string;
}

const TabRouteView: React.FC<TabRouteViewProps> = ({ initialData, backgroundColor, title }) => {
  const [data, setData] = useState<string[]>(initialData);

  const updateItem = (index: number, value: string) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TextInput
            style={styles.input}
            value={item}
            maxLength={4}
            onChangeText={(text) => updateItem(index, text)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 18,
    marginVertical: 8,
    paddingVertical: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TabRouteView;

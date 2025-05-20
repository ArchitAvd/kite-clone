import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TabRouteViewProps {
  backgroundColor: string;
  title?: string;
}

const TabRouteView: React.FC<TabRouteViewProps> = ({ backgroundColor, title }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {title && <Text style={styles.title}>{title}</Text>}
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

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddTaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20 },
});
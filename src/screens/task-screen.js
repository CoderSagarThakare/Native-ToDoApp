// src/screens/TasksScreen.js
import React, { useState, useMemo } from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryFilterBar from '../components/category-filter-bar';
import { TASK_CATEGORIES, CATEGORY_LIST } from '../data/task-categories-data';
import { TASKS } from '../data/tasks'

export default function TasksScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Compute counts from object
  const taskCounts = useMemo(() => {
    const counts = { all: TASKS?.length };
    TASKS?.forEach(task => {
      counts[task.category] = (counts[task.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return selectedCategory === 'all'
      ? TASKS
      : TASKS.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  // Update tab badge
  React.useEffect(() => {
    navigation.setOptions({
      tabBarBadge: taskCounts.all > 0 ? taskCounts.all : undefined,
      tabBarBadgeStyle: { backgroundColor: TASK_CATEGORIES.all.color },
    });
  }, [taskCounts.all, navigation]);

  return (
    <View style={styles.container}>
      {/* CATEGORY BADGES ROW */}
     <CategoryFilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        taskCounts={taskCounts}
      />

      {/* TASK LIST */}
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={[styles.taskCat, { color: TASK_CATEGORIES[item.category]?.color }]}>
              {TASK_CATEGORIES[item.category]?.label}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  backgroundColor: '#f9f9f9' },
  taskList: { padding: 16 },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
      android: { elevation: 2 },
    }),
  },
  taskTitle: { fontSize: 16, fontWeight: '500', flex: 1 },
  taskCat: { fontSize: 12, fontWeight: '600' },
});
// src/screens/TasksScreen.js
import React, { useState, useMemo, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CategoryFilterBar from '../components/category-filter-bar';
import { TASK_CATEGORIES } from '../data/task-categories-data';
import { TASKS } from '../data/tasks';
import { useNavigation } from '@react-navigation/native';

export default function TasksScreen() {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Count tasks per category
  const taskCounts = useMemo(() => {
    const counts = { all: TASKS.length };
    TASKS.forEach(task => {
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
  useEffect(() => {
    navigation.setOptions({
      tabBarBadge: taskCounts.all > 0 ? taskCounts.all : undefined,
      tabBarBadgeStyle: { backgroundColor: TASK_CATEGORIES.all.color },
    });
  }, [taskCounts.all, navigation]);

  return (
    <View style={styles.container}>
      {/* Filter Bar */}
      <CategoryFilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        taskCounts={taskCounts}
      />

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        contentContainerStyle={[
          styles.list,
        ]}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text
              style={[
                styles.taskCat,
                { color: TASK_CATEGORIES[item.category]?.color || '#666' },
              ]}
            >
              {TASK_CATEGORIES[item.category]?.label || item.category}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  list: {
    padding: 16,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  taskCat: {
    fontSize: 12,
    fontWeight: '600',
  },
});
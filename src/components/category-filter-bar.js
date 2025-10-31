// src/components/CategoryFilterBar.js
import React, { useRef, useEffect } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import CategoryBadge from './category-badge';
import { CATEGORY_LIST } from '../data/task-categories-data';

const CategoryFilterBar = ({ selectedCategory, onCategoryChange, taskCounts }) => {
  const scrollRef = useRef(null);

  // Auto-scroll hint on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({ x: 50, animated: true });
      setTimeout(() => scrollRef.current?.scrollTo({ x: 0, animated: true }), 700);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ backgroundColor: '#fff', paddingVertical: 10 }}>
      {/* Fade gradient */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 40,
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(to left, #fff, transparent)',
          zIndex: 1,
        }}
        pointerEvents="none"
      />

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingRight: 40 }}
        
      >
        {CATEGORY_LIST.map(({ key, label, color }) => (
          <CategoryBadge
            key={key}
            label={label}
            count={taskCounts[key]}
            color={color}
            isActive={selectedCategory === key}
            onPress={() => onCategoryChange(key)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default React.memo(CategoryFilterBar);
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const CategoryBadge = ({ label, count, color, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isActive ? color : '#f1f1f1' },
        isActive && styles.activeShadow,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.label,
          { color: isActive ? 'white' : '#333' },
        ]}
      >
        {label}
      </Text>
      {count > 0 && (
        <Text
          style={[
            styles.count,
            { color: isActive ? 'white' : color },
          ]}
        >
          {count > 99 ? '99+' : count}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    minHeight: 36,
  },
  activeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  count: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '700',
  },
});

export default React.memo(CategoryBadge);
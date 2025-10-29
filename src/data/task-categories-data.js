export const TASK_CATEGORIES = {
  all: { label: 'All', color: '#6366F1' },
  work: { label: 'Work', color: '#F59E0B' },
  personal: { label: 'Personal', color: '#10B981' },
  wishlist: { label: 'Wishlist', color: '#EC4899' },
  birthday: { label: 'Birthday', color: '#8B5CF6' },
};

export const CATEGORY_LIST = Object.entries(TASK_CATEGORIES).map(([key, value]) => ({
  key,
  ...value,
}));
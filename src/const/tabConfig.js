import ProfileScreen from '../screens/profile-screen';
import TaskScreen from '../screens/task-screen';
import CalendarScreen from '../screens/calendar-screen';

export const TAB_SCREENS = [
  {
    name: 'Tasks',
    component: TaskScreen,
    icons: { 
      focused: 'checkmark-done-circle', 
      unfocused: 'checkmark-done-circle-outline' 
    },
    label: 'Tasks',
    badge: 3, 
  },
  {
    name: 'Calendar',
    component: CalendarScreen,
    icons: { 
      focused: 'calendar', 
      unfocused: 'calendar-outline' 
    },
    label: 'Calendar',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icons: { 
      focused: 'person-circle', 
      unfocused: 'person-circle-outline' 
    },
    label: 'Profile',
  },
];

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { FlashcardsScreen } from '../screens/FlashcardsScreen';
import { AddNewScreen } from '../screens/AddNewScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigation = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Flashcards"
        component={FlashcardsScreen}
        options={{
          tabBarActiveTintColor: colors.amber['600'],
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="cards-playing-diamond-multiple"
              size={24}
              color={focused ? colors.amber['600'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNewScreen}
        options={{
          tabBarActiveTintColor: colors.amber['600'],
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="add-circle"
              size={24}
              color={focused ? colors.amber['600'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: colors.amber['600'],
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? colors.amber['600'] : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREENS} from '../constants/navigators';
import HomeNavigator from './HomeNavigator';

interface DrawerNavigatorProps {}
const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({}) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={SCREENS.HOME} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

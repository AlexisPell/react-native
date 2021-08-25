import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {authSelectors} from '../slices/authSlice';

interface AppNavContainerProps {}

const AppNavContainer: React.FC<AppNavContainerProps> = ({}) => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;

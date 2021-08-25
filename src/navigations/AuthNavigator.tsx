import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants/navigators';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';

interface AuthNavigatorProps {}
const AuthNavigator: React.FC<AuthNavigatorProps> = ({}) => {
  const AuthStack = createStackNavigator<any>();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={SCREENS.AUTH.LOGIN} component={Login} />
      <AuthStack.Screen name={SCREENS.AUTH.SIGN_UP} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants/navigators';
import Contacts from '../screens/Contacts/Contacts';
import ContactDetails from '../screens/ContactDetails/ContactDetails';
import CreateContact from '../screens/CreateContact/CreateContact';
import ContactSettings from '../screens/ContactSettings/ContactSettings';

interface HomeNavigatorProps {}

const HomeNavigator: React.FC<HomeNavigatorProps> = ({}) => {
  const HomeStack = createStackNavigator<any>();

  return (
    <HomeStack.Navigator initialRouteName={SCREENS.CONTACTS.CONTACTS}>
      <HomeStack.Screen name={SCREENS.CONTACTS.CONTACTS} component={Contacts} />
      <HomeStack.Screen
        name={SCREENS.CONTACTS.CONTACT}
        component={ContactDetails}
      />
      <HomeStack.Screen
        name={SCREENS.CONTACTS.CREATE_CONTACT}
        component={CreateContact}
      />
      <HomeStack.Screen
        name={SCREENS.CONTACTS.SETTINGS}
        component={ContactSettings}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

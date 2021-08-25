import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREENS} from '../../constants/navigators';
import Button from '../common/Button/Button';
import Container from '../common/Container/Container';
import Input from '../common/Input/Input';

interface LoginComponentProps {}

const LoginComponent: React.FC<LoginComponentProps> = ({}) => {
  const navigation = useNavigation<any>();
  const [pwdVisible, setPwdVisible] = useState(false);

  return (
    <Container>
      <Image
        source={require('./../../assets/images/ea_logo.png')}
        style={styles.logoImg}
      />
      <Text style={styles.welcomeText}>Welcome to SomeApp!</Text>
      <View style={styles.form}>
        <Input
          label="Username"
          placeholder="Input Username"
          value={''}
          onChangeText={() => ''}
        />
        <Input
          label="Password"
          placeholder="Input password"
          secureTextEntry={!pwdVisible}
          value={'pwd'}
          onChangeText={() => ''}
          icon={<Text>Show</Text>}
          iconPosition="right"
          onIconTouchStart={() => setPwdVisible(true)}
          onIconTouchEnd={() => setPwdVisible(false)}
        />
        <Button title="hyi" />
      </View>
      <View style={styles.registerTip}>
        <Text>Need a new account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate({name: SCREENS.AUTH.SIGN_UP})}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  logoImg: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    marginTop: 25,
  },
  registerTip: {
    marginTop: 25,
  },
});

import React from 'react';
import {useState} from 'react';
import LoginComponent from '../../components/Login/Login';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [value, setValue] = useState('');
  return <LoginComponent />;
};

export default Login;

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../../components/common/Container/Container';

interface ContactsProps {}
const Contacts: React.FC<ContactsProps> = ({}) => {
  return (
    <Container>
      <Text>Contacts section here</Text>
    </Container>
  );
};

export default Contacts;

const styles = StyleSheet.create({});

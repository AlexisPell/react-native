import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, COLORS_KEYS} from '../../../assets/theme/colors';

interface InputProps {
  title: string;
  type?: COLORS_KEYS;
  loading?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}
const Button: React.FC<InputProps> = ({
  title,
  type = 'primary',
  loading,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled && disabled}
      style={[styles.container, {backgroundColor: COLORS[type]}]}
      onPress={onPress}>
      <View style={styles.content}>
        {loading && (
          <ActivityIndicator
            color={type === 'white' ? COLORS.primary : COLORS.white}
          />
        )}
        <Text
          style={[styles.text, {color: disabled ? COLORS.grey : COLORS.black}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: 18, fontWeight: '500', marginLeft: 10},
});

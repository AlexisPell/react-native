import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
  GestureResponderEvent,
} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

type IconPosition = 'right' | 'left';
interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  label?: string;
  icon?: any;
  iconPosition?: IconPosition;
  onIconTouchStart?: (event: GestureResponderEvent) => void;
  onIconTouchEnd?: (event: GestureResponderEvent) => void;
  error?: string;
}
const Input: React.FC<InputProps & TextInputProps> = ({
  onChangeText,
  icon,
  iconPosition = 'left',
  onIconTouchStart,
  onIconTouchEnd,
  value,
  style,
  label,
  error,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const getFlewDirection: () => 'row' | 'row-reverse' = () => {
    return iconPosition === 'right' ? 'row-reverse' : 'row';
  };
  const getBorderColor = () => {
    if (error) return COLORS.danger;
    if (focused) return COLORS.primary;
    return COLORS.grey;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlewDirection(), borderColor: getBorderColor()},
        ]}>
        <View onTouchStart={onIconTouchStart} onTouchEnd={onIconTouchEnd}>
          {icon && icon}
        </View>
        <TextInput
          style={[styles.textInput, style]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: COLORS.danger,
    paddingTop: 1,
  },
});

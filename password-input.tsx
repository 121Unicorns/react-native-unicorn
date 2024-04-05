import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  type TextStyle,
  type TextInputProps,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { neutral700 } from './colors';
import tw from './tailwind';

interface PasswordInputProps extends TextInputProps {
  onChangePassword: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  textStyle?: TextStyle;
  viewStyle?: string;
  disabled?: boolean;
  props?: TextInputProps;
}

export function PasswordInput({
  onChangePassword,
  placeholder,
  placeholderTextColor,
  textStyle,
  viewStyle,
  disabled,
  props,
}: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={tw`flex-row border border-neutral rounded-lg p-2 items-center ${
        viewStyle ? viewStyle : ' '
      }`}
    >
      <TextInput
        {...props}
        style={[tw`flex-1 font-body`, textStyle]}
        secureTextEntry={!isPasswordVisible}
        placeholder={placeholder ? placeholder : 'Password'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : neutral700
        }
        editable={!disabled}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          onChangePassword(text);
        }}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {isPasswordVisible ? (
          <EyeOff size={24} color={neutral700} />
        ) : (
          <Eye size={24} color={neutral700} />
        )}
      </TouchableOpacity>
    </View>
  );
}

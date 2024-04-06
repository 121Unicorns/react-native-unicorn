import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  type TextStyle,
  type TextInputProps,
} from 'react-native';
import tw from './tailwind';
import { neutral700 } from './colors';

interface CustomInputProps extends TextInputProps {
  onTextChange: (text: string) => void;
  variant: string;
  placeholder: string;
  placeholderTextColor?: string;
  viewStyle?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  disabled?: boolean;
  caps?: boolean;
  length?: number;
  inputMode?: any;
  props?: TextInputProps;
}

export function Input({
  onTextChange,
  variant,
  placeholder,
  placeholderTextColor,
  viewStyle,
  textStyle,
  icon,
  disabled,
  caps,
  length,
  inputMode,
  props,
}: CustomInputProps) {
  const [height, setHeight] = useState(0);
  const [isMultiline, setIsMultiline] = useState(false);

  useEffect(() => {
    if (variant === 'small') {
      setHeight(8);
      setIsMultiline(false);
    } else if (variant === 'medium') {
      setHeight(40);
      setIsMultiline(true);
    } else if (variant === 'large') {
      setHeight(80);
      setIsMultiline(true);
    }
  }, [variant]);

  return (
    <View
      style={tw`flex-row border border-neutral rounded-lg p-2 ${
        viewStyle ? viewStyle : ' '
      }`}
    >
      <TextInput
        style={[tw`flex-1 font-body min-h-${height}`, textStyle]}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : neutral700
        }
        autoCapitalize={caps ? 'characters' : 'sentences'}
        multiline={isMultiline}
        maxLength={length ? length : undefined}
        onChangeText={(text) => {
          onTextChange(text);
        }}
        inputMode={inputMode ? inputMode : 'text'}
        editable={!disabled}
        {...props}
      />
      {icon && icon}
    </View>
  );
}

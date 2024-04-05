import React, { useEffect, useState, type ReactNode } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  type TextStyle,
  type TouchableOpacityProps,
} from 'react-native';
import tw from './tailwind';

interface ButtonProps extends TouchableOpacityProps {
  icon?: ReactNode;
  title: string;
  buttonWidth: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'quaternary'
    | 'quinary';
  disabled?: boolean;
  loading?: boolean;
  viewStyle?: string;
  textStyle?: TextStyle;
  props?: TouchableOpacityProps;
}

export const MainButton = ({
  icon,
  title,
  buttonWidth,
  variant,
  disabled,
  loading,
  viewStyle,
  textStyle,
  props,
}: ButtonProps) => {
  const [color, setColor] = useState<string>('primary');
  const [textColor, setTextColor] = useState<string>('white');
  const [border, setBorder] = useState<string>('primary');

  function updateButtonStatus() {
    if (disabled) {
      setColor('neutral-500/50');
      setTextColor('neutral-700/50');
      setBorder('neutral-500/50');
    } else if (loading) {
      switch (variant) {
        case 'primary':
          setColor('primary/50');
          setTextColor('white');
          setBorder('primary/50');
          break;
        case 'secondary':
          setColor('secondary');
          setTextColor('white');
          setBorder('secondary');
          break;
        case 'tertiary':
          setColor('transparent');
          setTextColor('primary/50');
          setBorder('primary/50');
          break;
        case 'quaternary':
          setColor('transparent');
          setTextColor('secondary');
          setBorder('secondary');
          break;
        case 'quinary':
          setColor('transparent');
          setTextColor('white');
          setBorder('white');
          break;
        default:
          setColor('primary/50');
          setTextColor('white');
          setBorder('primary/50');
          break;
      }
    } else {
      switch (variant) {
        case 'primary':
          setColor('primary');
          setTextColor('white');
          setBorder('primary');
          break;
        case 'secondary':
          setColor('secondary');
          setTextColor('white');
          setBorder('secondary');
          break;
        case 'tertiary':
          setColor('transparent');
          setTextColor('primary');
          setBorder('primary');
          break;
        case 'quaternary':
          setColor('transparent');
          setTextColor('secondary');
          setBorder('secondary');
          break;
        case 'quinary':
          setColor('transparent');
          setTextColor('white');
          setBorder('white');
          break;
        default:
          setColor('primary');
          setTextColor('white');
          setBorder('primary');
          break;
      }
    }
  }

  useEffect(() => {
    updateButtonStatus();
  }, []);

  return (
    <TouchableOpacity
      style={tw`w-${buttonWidth} bg-${color} border border-${border} border-solid flex-row rounded-md justify-evenly p-2 h-12 ${
        viewStyle as string
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <ActivityIndicator color="#fff" /> : null}
      {icon && <View style={tw`w-6 h-6 ml-2`}>{icon}</View>}
      <Text
        style={[
          tw`text-${textColor} text-base font-display text-center`,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

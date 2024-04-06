import { Check } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, View, type TextStyle } from 'react-native';
import tw from './tailwind';

interface CustomCheckboxProps {
  label: string;
  onSelect: (checked: boolean) => void;
  isChecked?: boolean;
  color?: string;
  width?: string;
  textStyle?: TextStyle;
}

export function Checkbox({
  label,
  onSelect,
  isChecked,
  color,
  width,
  textStyle,
}: CustomCheckboxProps) {
  const [checked, setChecked] = useState(isChecked || false);
  const [customWidth, setCustomWidth] = useState(width ? width : '100%');

  const unselectedButton = () => {
    return (
      <View
        style={tw`h-6 w-6 rounded-lg border border-neutral bg-white items-center justify-center`}
      />
    );
  };

  const selectedButton = () => {
    return (
      <View
        style={tw`h-6 w-6 rounded-lg bg-${
          color ? color : 'primary'
        } items-center justify-center`}
      >
        <Check color="white" size={20} />
      </View>
    );
  };

  return (
    <View
      //@ts-ignore
      style={tw`my-1 w-${customWidth}`}
    >
      <Pressable
        onPress={() => {
          onSelect(!checked);
          setChecked(!checked);
        }}
      >
        <View style={tw`flex-row items-center p-1 bg-transparent`}>
          {checked ? selectedButton() : unselectedButton()}
          <Text style={[tw`ml-3 text-base font-body`, textStyle]}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
}

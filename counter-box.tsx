import { MinusCircle, PlusCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, type TextStyle } from 'react-native';
import tw from './tailwind';
import { neutral100, secondary } from './colors';
import { Platform } from 'react-native';

interface CounterProps {
  onTextChanged: (counterValue: string) => void;
  counterValue?: number;
  title?: string;
  textStyle?: TextStyle;
  viewStyle?: string;
}

export const CounterBox = ({
  onTextChanged,
  counterValue,
  title,
  textStyle,
  viewStyle,
}: CounterProps) => {
  const [count, setCount] = useState(counterValue || 1);

  function addQuantity() {
    let temp = count + 1;
    setCount(temp);
    onTextChanged(temp.toString());
  }

  function reduceQuantity() {
    if (count > 1) {
      let temp = count - 1;
      setCount(temp);
      onTextChanged(temp.toString());
    }
  }

  function getValue() {
    if (
      Number.isNaN(count) ||
      count < 1 ||
      count === 0 ||
      count === null ||
      count === undefined
    ) {
      return '1';
    } else {
      return count.toString();
    }
  }

  return (
    <View
      style={[
        tw`flex-row justify-center items-center h-12 w-full rounded-lg px-2 ${
          viewStyle ?? ''
        }`,
      ]}
    >
      {title && (
        <Text
          style={[tw`text-secondary text-base grow font-display`, textStyle]}
        >
          {title}
        </Text>
      )}
      <View
        style={tw`flex-row flex-1 w-1/3 h-full justify-between self-center items-center`}
      >
        <Pressable onPress={reduceQuantity}>
          <MinusCircle size={48} fill={secondary} color={neutral100} />
        </Pressable>
        {Platform.OS === 'ios' ? (
          <TextInput
            style={[
              tw`w-1/3 text-secondary font-bold text-lg text-center h-full pb-2 font-body`,
              textStyle,
            ]}
            value={getValue()}
            onChangeText={(counter) => {
              setCount(parseInt(counter));
              onTextChanged(counter);
            }}
            keyboardType="number-pad"
            maxLength={3}
          />
        ) : (
          <TextInput
            style={[
              tw`w-1/3 text-neutral-600 font-bold text-lg text-center h-full font-body`,
              textStyle,
            ]}
            value={getValue()}
            onChangeText={(counter) => {
              setCount(parseInt(counter));
              onTextChanged(counter);
            }}
            keyboardType="number-pad"
            maxLength={3}
          />
        )}
        <Pressable onPress={addQuantity} style={{ right: 0 }}>
          <PlusCircle size={48} fill={secondary} color={neutral100} />
        </Pressable>
      </View>
    </View>
  );
};

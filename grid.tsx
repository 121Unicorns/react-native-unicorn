import React from 'react';
import { View, Text, type TextStyle } from 'react-native';
import tw from './tailwind';

interface GridProps {
  data: Array<{ [key: string]: string | number }>;
  columns: string[];
  keys: string[];
  textStyle?: TextStyle;
}
export function Grid({ data, columns, keys, textStyle }: GridProps) {
  return (
    <View style={tw`w-full border border-neutral rounded-lg overflow-hidden`}>
      <View style={tw`flex-row border-b border-neutral`}>
        {columns.map((column, index) => (
          <Text key={index} style={[tw`flex-1 p-2 font-display`, textStyle]}>
            {column}
          </Text>
        ))}
      </View>

      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={tw`flex-row`}>
          {keys.map((forkey, forIndex) => (
            <Text key={forIndex} style={[tw`flex-1 p-2 font-body`, textStyle]}>
              {row.hasOwnProperty(forkey) ? row[forkey] : ''}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

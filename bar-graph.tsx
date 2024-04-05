import React, { useEffect, useState } from 'react';
import { View, Text, type TextStyle } from 'react-native';
import tw from './tailwind';

interface BarGraphProps {
  percentage: number;
  textStyle?: TextStyle;
}

export function BarGraph({ percentage, textStyle }: BarGraphProps) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (percentage >= 75){
        setStatus('Platinum')
    } else if (percentage >= 50){
        setStatus('Gold')
    } else if (percentage >= 25){
        setStatus('Silver')
    } else if (percentage >= 0){
        setStatus('Bronze')
    }
  }, []);

  const signalBars: { color: string; height: string }[] = [
    {
      color: percentage >= 0 ? 'primary' : 'neutral-200',
      height: '2/6',
    },
    {
      color: percentage >= 26 ? 'primary' : 'neutral-200',
      height: '3/5',
    },
    {
      color: percentage >= 51 ? 'primary' : 'neutral-200',
      height: '4/5',
    },
    {
      color: percentage >= 76 ? 'primary' : 'neutral-200',
      height: 'full',
    },
  ];

  return (
    <View style={tw `flex-1`}>
      <View style={tw`flex-row flex-1 items-end`}>
        {signalBars.map((bar, index) => (
          <View
            key={index}
            style={tw`w-7 ml-1 flex-1 rounded-2xl bg-${bar.color} h-${bar.height}`}
          />
        ))}
      </View>
      <Text style={[tw`text-xs mt-2 text-center font-body`, textStyle]}>{status}</Text>
    </View>
  );
}

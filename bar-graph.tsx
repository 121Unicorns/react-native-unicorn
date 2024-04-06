import React from 'react';
import { View } from 'react-native';
import tw from './tailwind';

interface BarGraphProps {
  percentage: number;
  barColor?: string;
  inactiveColor?: string;
}

export function BarGraph({
  percentage,
  barColor,
  inactiveColor,
}: BarGraphProps) {
  const signalBars: { color: string; height: string }[] = [
    {
      color:
        percentage >= 0
          ? barColor ?? 'primary'
          : inactiveColor ?? 'neutral-200',
      height: '2/6',
    },
    {
      color:
        percentage >= 26
          ? barColor ?? 'primary'
          : inactiveColor ?? 'neutral-200',
      height: '3/5',
    },
    {
      color:
        percentage >= 51
          ? barColor ?? 'primary'
          : inactiveColor ?? 'neutral-200',
      height: '4/5',
    },
    {
      color:
        percentage >= 76
          ? barColor ?? 'primary'
          : inactiveColor ?? 'neutral-200',
      height: 'full',
    },
  ];

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row flex-1 items-end`}>
        {signalBars.map((bar, index) => (
          <View
            key={index}
            style={tw`w-7 ml-1 flex-1 rounded-2xl bg-${bar.color} h-${bar.height}`}
          />
        ))}
      </View>
    </View>
  );
}

import React, { useState, type ReactNode, useEffect } from 'react';
import { View } from 'react-native';
import tw from './tailwind';

interface CardProps {
  children: ReactNode;
  viewStyle?: string;
  variant: string;
}

export function Card({ children, viewStyle, variant }: CardProps){
  const [color, setColor] = useState<string>('neutral-100');
  const [borderCol, setBorderCol] = useState<string>('neutral-100');

  useEffect(() => {
      if (variant === 'secondary') {
        setColor('primary');
        setBorderCol('primary');
      } else if (variant === 'tertiary') {
        setColor('secondary');
        setBorderCol('secondary');
      } else if (variant === 'quaternary') {
        setColor('primary/50');
        setBorderCol('primary/50');
      } else {
        setColor('neutral-100');
        setBorderCol('neutral-100');
      }
  }, [variant]);
  return (
    <View style={tw `bg-${color} border border-${borderCol} shadow-xl shadow-black rounded-md ${viewStyle as string}`}>
      {children}
    </View>
  );
};
import React, { type ReactNode } from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import tw from './tailwind';

interface CardProps {
  children: ReactNode;
  viewStyle?: string;
  props?: TouchableOpacityProps;
}

export function Card({ children, viewStyle, props }: CardProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      {...props}
      style={tw`bg-neutral-100 shadow-xl shadow-black rounded-md ${
        viewStyle as string
      }`}
    >
      {children ?? null}
    </TouchableOpacity>
  );
}

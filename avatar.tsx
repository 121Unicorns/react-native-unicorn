import React from 'react';
import { View, Image } from 'react-native';
import tw from './tailwind';

interface AvatarProps {
  source: any; // You can specify a more specific type for source
  variant?: 'circle' | 'square' | 'drop';
  size?: number;
  style?: string;
}

export function Avatar({ source, variant = 'circle', size = 80, style }:AvatarProps){
  const avatarStyles = {
    width: size,
    height: size,
    borderRadius: variant === 'circle' || variant === 'drop' ? size / 2 : size / 15,
    borderTopRightRadius: variant !== 'circle' ? 0 : size / 2,
  };

  return (
    <View style={[tw `items-center justify-center overflow-hidden ${style as string}`, avatarStyles]}>
      <Image source={source} style={tw `w-full h-full`} resizeMode='contain' />
    </View>
  );
};

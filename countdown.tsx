import React, { useEffect, useState } from 'react';
import { Text, type TextStyle } from 'react-native';
import tw from './tailwind';

interface CountdownProps {
  seconds: number;
  onTimeUp: () => void;
  textStyle?: TextStyle;
}

export function Countdown({ seconds, onTimeUp, textStyle }: CountdownProps) {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      onTimeUp();
    }

    return () => clearInterval(timer);
  }, [remainingSeconds, onTimeUp]);

  const minutes = Math.floor(remainingSeconds / 60);
  const secondsLeft = remainingSeconds % 60;

  return (
    <Text
      style={[tw `text-xl font-display text-center`, textStyle]}>
      {`${minutes.toString().padStart(2, '0')}:${secondsLeft
        .toString()
        .padStart(2, '0')}`}
    </Text>
  );
}

import React from 'react';
import { View } from 'react-native';
import { Circle, G, Svg, Text as SvgText } from 'react-native-svg';
import tw from './tailwind';
import { primary, neutral200 } from './colors';

interface CircularGraphProps {
  percentage: number; // A value between 0 and 100
  radius: number;
  strokeWidth: number;
  strokeColor?: string;
  displayText?: boolean;
}

export function CircularGraph({
  percentage,
  radius,
  strokeWidth,
  strokeColor,
  displayText,
}: CircularGraphProps) {
  const cx = radius;
  const cy = radius;
  const r = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * r;
  const progress = (percentage / 100) * circumference;

  return (
    <View style={tw`items-center`}>
      <Svg width={radius * 2} height={radius * 2}>
        <G>
          <Circle
            cx={cx}
            cy={cy}
            r={r}
            stroke={neutral200}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={cx}
            cy={cy}
            r={r}
            stroke={strokeColor ?? primary} // Progress color
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress},${circumference}`}
            strokeLinecap="round"
            fill="none"
            transform={`rotate(-90, ${radius}, ${radius})`}
          />
          {displayText ? (
            <SvgText
              x={cx}
              y={cy}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill={neutral200}
              fontWeight={900}
            >
              {`${percentage}%`}
            </SvgText>
          ) : null}
        </G>
      </Svg>
    </View>
  );
}

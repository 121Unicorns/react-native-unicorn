import React from 'react';
import { View, Text, type TextStyle } from 'react-native';
import tw from './tailwind';

export interface Step {
  title: string;
  component: React.ReactNode;
  pointStyle?: string;
}

interface VerticalStepperProps {
  steps: Step[];
  viewStyle?: string;
  textStyle?: TextStyle;
}

export function VerticalStepper({
  steps,
  viewStyle,
  textStyle,
}: VerticalStepperProps) {
  return (
    <View style={tw`items-center ${viewStyle ? viewStyle : ''}`}>
      {steps.map((step, index) => (
        <View key={index} style={tw`flex-row`}>
          <View style={tw`w-12 items-center`}>
            <View
              style={tw`w-4 h-4 rounded-full bg-neutral self-center ${
                step.pointStyle ? step.pointStyle : ''
              }`}
            />
            {index < steps.length - 1 && (
              <View style={tw`flex-1 w-px bg-neutral`} />
            )}
          </View>
          <View style={tw`flex-1`}>
            <Text
              style={[
                tw`font-body`,
                {
                  includeFontPadding: false,
                },
                textStyle,
              ]}
            >
              {step.title}
            </Text>
            <View>{step.component}</View>
          </View>
        </View>
      ))}
    </View>
  );
}

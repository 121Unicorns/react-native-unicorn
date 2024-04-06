import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { primary, primary200, secondary } from './colors';

const defaultColors = [primary, secondary, primary200];

/**
 * React Component that creates a smooth loading animation with dots
 * or custom components
 * @param {number} dots
 * @param {string[]} colors
 * @param {number} size
 * @param {number} bounceHeight
 * @param {number} borderRadius
 * @param {React.ReactNode[]} components
 * @returns React.JSX.Element
 */

interface BouncingDotsProps {
  dots?: number;
  colors?: string[];
  size?: number;
  bounceHeight?: number;
  borderRadius?: number;
  components?: React.ReactNode[];
}

export function BouncingDots({
  dots = 3,
  colors = defaultColors,
  size = 10,
  bounceHeight = 10,
  borderRadius,
  components,
}: BouncingDotsProps) {
  const [reverse, setReverse] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  const [animations, setAnimations] = useState<Animated.Value[]>([]);

  useEffect(() => {
    const dotAnimations: Animated.Value[] = [];
    let animationsAmount =
      !!components && Array.isArray(components) //@ts-ignore
        ? components.length!
        : (dots as number);
    for (let i = 0; i < animationsAmount; i++) {
      dotAnimations.push(new Animated.Value(0));
    }
    setAnimations(dotAnimations);
  }, []);

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
    appearAnimation();
  }, [animations]);

  function appearAnimation() {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  function floatAnimation(
    node: Animated.Value | Animated.ValueXY,
    reverseY: any,
    delay: number
  ) {
    const floatSequence = Animated.sequence([
      Animated.timing(node, {
        toValue: reverseY ? 0 : bounceHeight,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: reverseY ? bounceHeight : 0,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      // Animated.timing(node, {
      //   toValue: 0,
      //   delay,
      //   useNativeDriver: true,
      // }),
    ]);
    return floatSequence;
  }

  function loadingAnimation(nodes: any[], reverseY: boolean) {
    Animated.parallel(
      nodes.map((node, index) => floatAnimation(node, reverseY, index * 60))
    ).start(() => {
      setReverse(!reverse);
    });
  }

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
  }, [reverse, animations]);

  return (
    <Animated.View style={[styles.loading, { opacity }]}>
      {animations.map((animation, index) =>
        components ? (
          <Animated.View
            key={`loading-anim-${index}`}
            style={[{ transform: [{ translateY: animation }] }]}
          >
            {components[index]}
          </Animated.View>
        ) : (
          <Animated.View
            key={`loading-anim-${index}`}
            style={[
              {
                width: size,
                height: size,
                borderRadius: borderRadius || size / 2,
                marginHorizontal: 5,
              },
              { backgroundColor: colors[index] || '#4dabf7' },
              { transform: [{ translateY: animation }] },
            ]}
          />
        )
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginVertical: 20,
  },
});

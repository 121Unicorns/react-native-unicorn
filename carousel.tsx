import React, { useState,  useEffect, useRef, type ReactElement } from 'react';
import { Dimensions, FlatList } from "react-native";

interface CustomCarouselProps<T> {
  data: T[];
  renderComponent: (item: T, index: number) => ReactElement;
  autoplayInterval?: number;
}

export function Carousel<T extends any>({
  data,
  renderComponent,
  autoplayInterval = 3000,
}: CustomCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<T>>(null);

  const handleCarouselScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / Dimensions.get("window").width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Auto scroll the carousel
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(newIndex);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, data.length, autoplayInterval]);

  const getItemLayout = (_data: any, index: number) => ({
    length: Dimensions.get("window").width,
    offset: Dimensions.get("window").width * index,
    index,
  });

  return (
    <FlatList
      ref={flatListRef}
      data={data}
        //@ts-ignore
      keyExtractor={(item, index) => index.toString()}
      // @ts-ignore
      renderItem={({ item, index }) => {
        return renderComponent(item, index);
      }}
      getItemLayout={getItemLayout}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onScroll={handleCarouselScroll}
    />
  );
}


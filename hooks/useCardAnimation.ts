import { useCallback } from 'react';
import { ViewStyle } from 'react-native';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type useCardAnimationProps = {
  flipToFrontStyle: ViewStyle;
  flipToBackStyle: ViewStyle;
  handleChangeFlipRotation: () => number;
};

const ANIMATION_DURATION = 500;

export const useCardAnimation = (): useCardAnimationProps => {
  const flipRotation = useSharedValue(0);

  const flipToFrontStyle = useAnimatedStyle(() => {
    const transform = interpolate(flipRotation.value, [0, 180], [0, 180]);

    return {
      transform: [
        {
          rotateY: `${transform}deg`,
        },
      ],
    };
  });

  const flipToBackStyle = useAnimatedStyle(() => {
    const transform = interpolate(flipRotation.value, [0, 180], [180, 0]);

    return {
      transform: [
        {
          rotateY: `${transform}deg`,
        },
      ],
    };
  });

  const handleChangeFlipRotation = useCallback((): number => {
    return flipRotation.value === 180
      ? (flipRotation.value = withTiming(0, {
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
        }))
      : (flipRotation.value = withTiming(180, {
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
        }));
  }, [flipRotation.value]);

  return {
    flipToFrontStyle,
    flipToBackStyle,
    handleChangeFlipRotation,
  };
};

import React, { FC } from 'react';
import { Box, Center, Text, useTheme } from 'native-base';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useCardAnimation } from '../hooks/useCardAnimation';

const { width: screenWidth } = Dimensions.get('screen');

export const Card: FC<Flashcard> = ({ ...props }) => {
  const { answer, category, difficulty, question } = props;
  const { flipToFrontStyle, flipToBackStyle, handleChangeFlipRotation } =
    useCardAnimation();
  const { colors } = useTheme();

  const difficyltyColor: string = {
    easy: 'amber.200',
    medium: 'amber.600',
    hard: 'amber.900',
  }[difficulty];

  return (
    <Pressable onPress={handleChangeFlipRotation}>
      <Animated.View
        style={[
          { ...style.cardFront, backgroundColor: colors.amber['500'] },
          flipToBackStyle,
        ]}
      >
        <Text>{answer}</Text>
      </Animated.View>
      <Animated.View
        style={[
          { ...style.cardBack, backgroundColor: colors.amber['500'] },
          flipToFrontStyle,
        ]}
      >
        <Box>
          <Text fontSize={'lg'} fontWeight="bold">
            {category}
          </Text>
        </Box>
        <Center flex={1}>
          <Text textAlign={'center'}>{question}</Text>
        </Center>
        <Box alignSelf={'flex-end'}>
          <Text color={difficyltyColor} fontSize={'md'} fontWeight="bold">
            {difficulty}
          </Text>
        </Box>
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  cardFront: {
    position: 'absolute',
    width: screenWidth / 1.2,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    width: screenWidth / 1.2,
    height: 180,
    backfaceVisibility: 'hidden',
    borderRadius: 12,
    padding: 16,
  },
});

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// export {};

declare global {
  type RootStackParams = {
    Login: undefined;
    Register: undefined;
    BottomTabNav: NavigatorScreenParams<BottomTabParams>;
  };

  type BottomTabParams = {
    Flashcards: undefined;
    AddNew: undefined;
    Profile: undefined;
  };

  type ProfileScreenProps = RootStackWithBottomTabScreenProps<'Profile'>;

  type RootStackWithBottomTabScreenProps<T extends keyof BottomTabParams> =
    CompositeScreenProps<
      BottomTabScreenProps<BottomTabParams, T>,
      StackScreenProps<RootStackParams>
    >;

  type Difficulty = 'easy' | 'medium' | 'hard';

  type Flashcard = {
    answer: string;
    category: string;
    difficulty: Difficulty;
    id: number;
    question: string;
  };

  type FilterCategory = {
    title: string;
    value: string;
  };
}

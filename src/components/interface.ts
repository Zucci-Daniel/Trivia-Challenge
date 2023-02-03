import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import {
  FlatListProps,
  KeyboardType,
  ScrollViewProps,
  TextInputProps,
  TextProps,
  ViewStyle,
} from 'react-native';
import {
  ALIGN_TYPES,
  COLOR_TYPES,
  FONT_FAMILY_TYPES,
  FONT_TYPES,
  TEXT_SIZE_TYPE,
} from '../utilities/interface';

export type StartQuizScreenInputTypes = {
  label: string;
  typeOfIcon: 'difficulty' | 'star-rate';
  suffixIcon?: JSX.Element;
  value: string;
  editable?: boolean;
  hasDropDown?: boolean;
  onChangeText?: () => void;
  onPressSuffix?: () => void;
  keyboardType?: KeyboardType;
};

export type typeOfButtonTypes = 'purple' | 'white' | 'mixed';

export type ButtonProps = {
  text: string;
  onPress?: () => void;
  extraStyles?: ViewStyle;
  typeOfButton?: 'purple' | 'white' | 'mixed';
};

export type ClosButtonProps = {
  onClose?: () => void;
  color?: string;
  extraStyles?: ViewStyle;
};

export type InputFieldProps = {
  isError?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  error?: string;
  dropDown?: ReactNode;
  suffixIcon?: JSX.Element | null;
  leftSuffixIcon?: JSX.Element;
  textInputProps?: TextInputProps;
  label?: string;
  value: string;
  onPressSuffix?: () => void;
  onChangeText?: (text: string) => void;
  placeHolderColor?: string;
  typeOfIcon?: 'difficulty' | 'star-rate';
};

export type AppScreenProps = {
  children?: ReactNode;
  background?: string;
  containerStyles?: ViewStyle;
  onBlur?: () => void;
  disablePressable?: boolean;
} & Omit<ScrollViewProps, 'children'>;

export type AppTextProps = {
  text?: any | string | {};
  style?: any;
  color?: COLOR_TYPES;
  align?: ALIGN_TYPES;
  weight?: FONT_TYPES;
  font?: FONT_FAMILY_TYPES;
  size?: TEXT_SIZE_TYPE;
  children?: ReactNode;
  readonly?: boolean;
  onPress?: () => void;
  shouldTranslate?: boolean;
  textProps?: TextProps;
};

export type FlatScreenProps = {
  children?: ReactNode;
  extraStyles?: ViewStyle;
  HeaderComponent?: JSX.Element;
  shouldAddPadding?: boolean;
  background?: string;
  showBackgroundSVG?: boolean;
  typeOfSvg?: 'white-bg' | 'purple-bg';
} & Omit<FlatListProps<any>, 'children'>;

export type GamePlayScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'GamePlayScreen'
  >;
};

export type ResultScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'ResultScreen'
  >;
};

export type StartQuizScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'StartQuizScreen'
  >;
};

export type ProgressBarProps = {
  answeredQuestions?: number;
  totalQuestions?: number;
};

export type QuestionFooterProps = {
  onPressTrue: () => void;
  onPressFalse: () => void;
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'GamePlayScreen'
  >;
};

export type AnsweredQuestionType = {
  passed: boolean;
  question: string;
};

export type StarRateArrayProps = {
  id: number;
  star: boolean;
};

export type ResultFooterProps = {
  onPress?: () => void;
};

export type ResultHeaderProps = {
  totalQuestions: number;
  totalPassedQuestions: number;
  onClose?: () => void;
  children?: ReactNode;
};

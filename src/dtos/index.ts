import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import {
  FlatListProps,
  ScrollViewProps,
  TextInputProps,
  TextProps,
  ViewStyle,
} from 'react-native';

export type CardProps = {
  passed?: boolean;
  question?: string;
};

export type ScreenType = {
  children?: ReactNode;
  screenExtraStyles?: ViewStyle;
  onBlur?: () => void;
} & Omit<ScrollViewProps, 'children'>;

export type themeType = {
  mode: 'LIGHT' | 'DARK';
};

export type TEXT_SIZE_TYPE =
  | 10
  | 12
  | 13
  | 14
  | 15
  | 16
  | 18
  | 20
  | 22
  | 24
  | 25
  | 26
  | 28
  | 30
  | 31
  | 32
  | 34
  | 36;

export type FONT_TYPES =
  | 'Regular'
  | 'Bold'
  | 'Medium'
  | 'Black'
  | 'Light'
  | 'Thin';

export type ALIGN_TYPES = 'left' | 'center' | 'right';
export type FONT_FAMILY_TYPES = 'NotoSansJP';
export type COLOR_TYPES =
  | 'mainColor'
  | 'label'
  | 'input_value'
  | 'black'
  | 'white'
  | 'darkOrange';

export type WelcomeScreenInputTypes = {
  label: string;
  typeOfIcon: 'difficulty' | 'star-rate';
  suffixIcon?: JSX.Element;
  value: string;
  editable?: boolean;
  hasDropDown?: boolean;
  onPress: () => void;
  onPressSuffix?: () => void;
};

export type typeOfButtonTypes = 'purple' | 'white' | 'mixed';

export type ButtonProps = {
  text: string;
  onPress?: () => void;
  extraStyles?: ViewStyle;
  typeOfButton: 'purple' | 'white' | 'mixed';
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
  onPress?: () => void;
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
  children?: React.ReactNode;
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
} & Omit<FlatListProps<any>, 'children'>;

export type QuestionScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'questionScreen'
  >;
};

export type SummaryScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'summaryScreen'
  >;
};

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    'welcomeScreen'
  >;
};

export type ProgressBarProps = {
  answeredQuestions?: number;
  totalQuestions?: number;
};

export type QuestionFooterProps = {
  onPressTrue: () => void;
  onPressFalse: () => void;
};

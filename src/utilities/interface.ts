import {ReactNode} from 'react';
import {ScrollViewProps, ViewStyle} from 'react-native';

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
  | 'SemiBold'
  | 'Medium'
  | 'Black'
  | 'Light'
  | 'Thin';

export type ALIGN_TYPES = 'left' | 'center' | 'right';
export type FONT_FAMILY_TYPES = 'Comfortaa' | 'Quicksand';
export type COLOR_TYPES =
  | 'mainColor'
  | 'label'
  | 'input_value'
  | 'summaryCardTextColor'
  | 'black'
  | 'white'
  | 'darkOrange';

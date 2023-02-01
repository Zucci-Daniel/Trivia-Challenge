import {ReactNode} from 'react';
import {ScrollViewProps, ViewStyle} from 'react-native';

export type ScreenType = {
  children?: ReactNode;
  screenExtraStyles?: ViewStyle;
  onBlur?: () => void;
} & Omit<ScrollViewProps, 'children'>;

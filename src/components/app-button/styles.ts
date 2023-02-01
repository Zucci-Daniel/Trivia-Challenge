import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';

type ButtonStylesProps = {
  container: ViewStyle;
  svg: ViewStyle;
  view: ViewStyle;
};

export const buttonStyles = StyleSheet.create<ButtonStylesProps>({
  container: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    alignContent: 'center',
    height: hp(70),
    width: '100%',
  },
  svg: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  view: {
    position: 'absolute',
  },
});

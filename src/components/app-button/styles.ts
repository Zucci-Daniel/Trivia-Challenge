import {StyleSheet, ViewStyle} from 'react-native';
import {fontSz, hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type ButtonStylesProps = {
  container: ViewStyle;
  svg: ViewStyle;
  view: ViewStyle;
  normalButton: ViewStyle;
};

export const buttonStyles = StyleSheet.create<ButtonStylesProps>({
  container: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
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
  normalButton: {
    width: '95%',
    height: '100%',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.mainColor,
    borderRadius: fontSz(14),
  },
});

import {StyleSheet, ViewStyle} from 'react-native';
import {colors, padding} from '../../utilities/styling-assets';

type ScreenProps = {
  imageBackground: ViewStyle;
  absolute: ViewStyle;
  svg: ViewStyle;
  container: ViewStyle;
};

export const ScreenStyles = StyleSheet.create<ScreenProps>({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
    backgroundColor: colors.mainColor,
  },
  container: {
    paddingHorizontal: padding.small,
    flex: 1,
  },
  absolute: {
    position: 'absolute',
  },
  svg: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ScreenStyles;

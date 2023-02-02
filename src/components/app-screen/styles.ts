import {StyleSheet, ViewStyle} from 'react-native';
import {colors, padding} from '../../utilities/styling-assets';

type ScreenProps = {
  imageBackground: ViewStyle;
  container: ViewStyle;
};

export const ScreenStyles = StyleSheet.create<ScreenProps>({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
  },
  container: {
    paddingHorizontal: padding.small,
    flex: 1,
  },
});

export default ScreenStyles;

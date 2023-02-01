import {StyleSheet, ViewStyle} from 'react-native';
import {colors, padding} from '../../utilities/styling-assets';

type ScreenProps = {
  imageBackground: ViewStyle;
};
export const ScreenStyles = StyleSheet.create<ScreenProps>({
  imageBackground: {
    flex: 1,
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    paddingTop: padding.screen_top,
    paddingHorizontal: padding.small,
  },
});

export default ScreenStyles;

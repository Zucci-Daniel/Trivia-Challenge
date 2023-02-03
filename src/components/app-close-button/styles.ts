import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';

type CloseButtonStylesProps = {
  container: ViewStyle;
};
const distance = hp(21);
export const CloseButtonStyles = StyleSheet.create<CloseButtonStylesProps>({
  container: {
    position: 'absolute',
    right: distance / 2,
    top: distance,
    zIndex: distance,
  },
});

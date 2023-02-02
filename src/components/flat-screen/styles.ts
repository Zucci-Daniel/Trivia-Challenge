import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type FlatScreenStylesProps = {
  container: ViewStyle;
};

export const FlatScreenStyles = StyleSheet.create<FlatScreenStylesProps>({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    paddingVertical: hp(30),
  },
});

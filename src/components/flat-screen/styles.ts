import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';

type FlatScreenStylesProps = {
  container: ViewStyle;
  absolute: ViewStyle;
  svg: ViewStyle;
};

export const FlatScreenStyles = StyleSheet.create<FlatScreenStylesProps>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
    paddingVertical: hp(30),
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

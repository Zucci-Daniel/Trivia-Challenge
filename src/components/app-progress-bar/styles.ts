import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type ProgressBarStylingProps = {
  container: ViewStyle;
  progress: ViewStyle;
  number_wrapper: ViewStyle;
};

const numberWrapper = hp(32);

export const ProgressBarStyling = StyleSheet.create<ProgressBarStylingProps>({
  container: {
    backgroundColor: colors.progressContainer,
    height: hp(5),
    width: '100%',
    borderRadius: hp(20),
    overflow: 'hidden',
    marginVertical: hp(11),
  },
  progress: {
    backgroundColor: colors.progressBar,
    height: '100%',
    position: 'relative',
    borderRadius: hp(20),
    left: 0,
  },
  number_wrapper: {
    height: numberWrapper,
    width: numberWrapper,
    borderRadius: numberWrapper,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

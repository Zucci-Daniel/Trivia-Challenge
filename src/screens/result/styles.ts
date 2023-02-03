import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type SummaryStylesProps = {
  card: ViewStyle;
  header: ViewStyle;
  header_top: ViewStyle;
  avatar: ViewStyle;
  number_wrapper: ViewStyle;
  star_row: ViewStyle;
  footer: ViewStyle;
  separator: ViewStyle;
};

const numberWrapper = hp(32);

export const SummaryStyles = StyleSheet.create<SummaryStylesProps>({
  card: {
    height: undefined,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: hp(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp(16),
  },
  header: {
    height: undefined,
    width: '100%',
    marginVertical: hp(18),
  },
  header_top: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(9),
  },
  avatar: {
    height: numberWrapper,
    width: numberWrapper,
    borderRadius: numberWrapper,
    backgroundColor: colors.white,
  },
  number_wrapper: {
    height: numberWrapper,
    width: numberWrapper,
    borderRadius: numberWrapper,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(19),
  },
  footer: {
    paddingVertical: hp(27),
  },
  separator: {height: hp(16), backgroundColor: 'transparent', width: '100%'},
});

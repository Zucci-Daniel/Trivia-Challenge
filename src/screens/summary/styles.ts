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
    paddingVertical: hp(19),
  },
  avatar: {
    height: hp(32),
    width: hp(32),
    borderRadius: hp(32),
    backgroundColor: colors.white,
  },
  number_wrapper: {
    height: hp(32),
    width: hp(32),
    borderRadius: hp(32),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  star_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(19),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(27),
  },
  separator: {height: hp(16), backgroundColor: 'transparent', width: '100%'},
});

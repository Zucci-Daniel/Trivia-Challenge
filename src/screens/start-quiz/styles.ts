import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';
import {colors, padding} from '../../utilities/styling-assets';

type StartQuizScreenStylesProps = {
  buttonContainer: ViewStyle;
  options: TextStyle;
  dropDown: ViewStyle;
  logo: ViewStyle;
};

export const StartQuizScreenStyles =
  StyleSheet.create<StartQuizScreenStylesProps>({
    buttonContainer: {
      flex: 1,
      marginTop: hp(87),
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropDown: {
      height: undefined,
      width: '100%',
      backgroundColor: colors.white,
      marginTop: -hp(20),
      padding: padding.small / 2,
      borderRadius: 5,
    },
    options: {marginBottom: hp(10), textTransform: 'capitalize'},
    logo: {
      width: '100%',
      height: hp(248),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

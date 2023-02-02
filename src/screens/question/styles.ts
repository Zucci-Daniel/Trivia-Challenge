import {StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type QuestionScreenStylesProps = {
  container: ViewStyle;
  screen: ViewStyle;
  buttonContainer: ViewStyle;
};

export const QuestionScreenStyles =
  StyleSheet.create<QuestionScreenStylesProps>({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.mainColor,
    },
    container: {
      flex: 1,
      marginVertical: hp(10),
    },
    buttonContainer: {
      flex: 1,
    },
  });

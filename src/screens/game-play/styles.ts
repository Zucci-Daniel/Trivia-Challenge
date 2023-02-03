import {StyleSheet, ViewStyle} from 'react-native';
import {hp, SCREEN_WIDTH} from '../../utilities/fontSizes';

type GamePlayScreenStylesProps = {
  footer: ViewStyle;
  header: ViewStyle;
  headerContainer: ViewStyle;
  container: ViewStyle;
  questionContainer: ViewStyle;
  questionCard: ViewStyle;
  textWrapper: ViewStyle;
};

const genericGamePlayScreenPadding = hp(26);

export const GamePlayScreenStyles =
  StyleSheet.create<GamePlayScreenStylesProps>({
    headerContainer: {
      padding: genericGamePlayScreenPadding,
      paddingTop: hp(67),
    },
    header: {
      height: undefined,
      width: '100%',
    },
    container: {
      flex: 1,
      paddingBottom: hp(26),
    },
    footer: {
      height: undefined,
      paddingVertical: genericGamePlayScreenPadding,
      width: '100%',
    },
    questionContainer: {
      height: undefined,
      width: SCREEN_WIDTH,
    },
    questionCard: {
      height: undefined,
      width: SCREEN_WIDTH,
      flexWrap: 'wrap',
    },
    textWrapper: {height: '100%', width: '85%'},
  });

import {StyleSheet, TextStyle} from 'react-native';

interface Props {
  alignLeft: TextStyle;
  alignRight: TextStyle;
  alignCenter: TextStyle;
}

export const GKTextStyles = StyleSheet.create<Props>({
  alignLeft: {
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  alignRight: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  alignCenter: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});

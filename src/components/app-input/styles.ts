import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSz, hp} from '../../utilities/fontSizes';
import {colors} from '../../utilities/styling-assets';

type InputFieldProps = {
  input: ViewStyle;
  labelContainer: ViewStyle;
  label: TextStyle;
  textInput: TextStyle;
};

export const inputFieldStyle = StyleSheet.create<InputFieldProps>({
  input: {
    borderRadius: 8,
    height: hp(54),
    width: '100%',
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderColor: colors.border_color,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: fontSz(14),
  },
  label: {
    color: colors.label,
    fontSize: fontSz(13),
    marginBottom: fontSz(50),
  },
  textInput: {
    height: 50,
    flex: 1,
    color: colors.input_value,
    fontSize: fontSz(14),
    fontFamily: 'Quicksand',
    fontWeight: '500',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(12),
  },
});

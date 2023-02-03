import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { fontSz, } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { AppTextProps } from '../interface';
import { GKTextStyles } from './styles';



const AppText: FC<AppTextProps> = ({
  text,
  style,
  weight,
  size,
  color,
  font = 'Quicksand',
  onPress = () => null,
  readonly = true,
  align,
  textProps,
}) => {
  let textAlignStyle = {};

  switch (align) {
    case 'left':
      textAlignStyle = GKTextStyles.alignLeft;
      break;
    case 'center':
      textAlignStyle = GKTextStyles.alignCenter;
      break;
    case 'right':
      textAlignStyle = GKTextStyles.alignRight;
      break;
    default:
      textAlignStyle = {};
      break;
  }

  const textWeightStyle = {
    fontFamily: `${font}-${weight ? weight : 'Regular'}`,
  };

  const textSize = {
    fontSize: fontSz(size && typeof size === 'number' ? size : 10),
    lineHeight: fontSz(size && typeof size === 'number' ? size : 10) * 1.3,
  };

  const textColorStyle = { color: colors[color ? color : 'black'] };

  const baseTextStyle = {
    ...textWeightStyle,
    ...textColorStyle,
    ...textAlignStyle,
    ...textSize,
  };

  return (
    <TouchableOpacity activeOpacity={readonly ? 1 : .8} onPress={readonly ? () => null : () => onPress()}>
      <Text {...textProps} style={[baseTextStyle, style]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};


export default AppText;

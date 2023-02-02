import React, { FC } from 'react';
import { TouchableOpacity, Text, TextProps } from 'react-native';
import { ALIGN_TYPES, COLOR_TYPES, FONT_FAMILY_TYPES, FONT_TYPES, TEXT_SIZE_TYPE } from '../../dtos';
import { fontSz, } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { GKTextStyles } from './styles';

interface AppTextInterface {
  text?: any | string | {};
  style?: any;
  color?: COLOR_TYPES;
  align?: ALIGN_TYPES;
  weight?: FONT_TYPES;
  font?: FONT_FAMILY_TYPES;
  size?: TEXT_SIZE_TYPE;
  children?: React.ReactNode;
  readonly?: boolean;
  onPress?: () => void;
  shouldTranslate?: boolean;
  textProps?: TextProps
}

const AppText: FC<AppTextInterface> = ({
  text,
  style,
  weight,
  size,
  color,
  font = 'NotoSansJP',
  onPress = () => null,
  readonly = true,
  shouldTranslate = false,
  align = 'left',
  textProps,
  // ...rest
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
      textAlignStyle = GKTextStyles.alignLeft;
      break;
  }

  const textWeightStyle = {
    fontFamily: `NotoSansJP-${weight ? weight : 'Regular'}`,
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

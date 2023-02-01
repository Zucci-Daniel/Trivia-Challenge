import React, { FC } from 'react';
import { Text } from 'react-native';
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
  ...rest
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
    <Text {...rest} style={[baseTextStyle, style]}>
      {text}
    </Text>
  );
};


export default AppText;

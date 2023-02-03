import {Dimensions, PixelRatio} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const frame = {height: 926, width: 428}; // Frame according to figma design

const widthBaseScale = screenWidth / frame.width;
const heightBaseScale = screenHeight / frame.height;

function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width  pixel
const widthPixel = (size: number) => normalize(size, 'width');
// for height  pixel
const heightPixel = (size: number) => normalize(size, 'height');
// for font  pixel
const fontPixel = (size: number) => heightPixel(size);
// for relative pixels
const relativePixels = (size: number) => heightPixel(size);

const heightPercentageToDP = (heightPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elementHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : Number.parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};
const widthPercentageToDP = (widthPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elementWidth =
    typeof widthPercent === 'number'
      ? widthPercent
      : Number.parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

export {
  fontPixel as fp,
  heightPixel as hp,
  heightPercentageToDP as hpt,
  relativePixels as px,
  screenHeight as SCREEN_HEIGHT,
  screenWidth as SCREEN_WIDTH,
  widthPixel as wp,
  widthPercentageToDP as wpt,
};

//we can use the function or just the object.
export const fontSz = fontPixel;

export const fontsizes = {
  xsmini: {
    fontSize: fontSz(10),
  },
  xmini: {
    fontSize: fontSz(12),
  },
  mini: {
    fontSize: fontSz(13),
  },
  small: {
    fontSize: fontSz(14),
  },
  medium: {
    fontSize: fontSz(16),
  },
  xmedium: {
    fontSize: fontSz(17),
  },
  large: {
    fontSize: fontSz(18),
  },
  xlarge: {
    fontSize: fontSz(20),
  },
  xxlarge: {
    fontSize: fontSz(22),
  },
  xxxlarge: {
    fontSize: fontSz(25),
  },
};

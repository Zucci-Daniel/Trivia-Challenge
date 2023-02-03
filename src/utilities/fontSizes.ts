import {PixelRatio, Dimensions} from 'react-native';
var responsiveScreen = require('react-native-responsive-screen');
var widthPercentageToDP = responsiveScreen.widthPercentageToDP;
var heightPercentageToDP = responsiveScreen.heightPercentageToDP;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;

export const hp = (val: number) => {
  // get scaled height equivalent of design height
  const num = val / 8.44;
  return heightPercentageToDP(num);
};

export const wp = (val: number) => {
  // get scaled height equivalent of design width
  const num = val / 3.88;
  return widthPercentageToDP(num);
};

//we can use the function or just the object.
export const fontSz = (sizeNum: number) => {
  const size = sizeNum - fontScale * (fontScale < 1 ? 1 : 2);
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
};

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

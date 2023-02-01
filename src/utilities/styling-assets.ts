import {fontsizes, fontSz} from './fontSizes';

//incase we ever need to use a padding/margin number that is not repeated twice,
export const addPadding = (number: number) => fontSz(number ? number : 10);
export const addMargin = (number: number) => fontSz(number ? number : 10);

//const padding and margin extracted from figma design
export const padding = {
  screen_top: fontSz(126),
  small: fontSz(31),
};

export const colors = {
  white: '#fff',
  mainColor: '#4953BE',
  label: '#F7A491',
  input_value: '#FFFFFF',
  black: '#000',
};

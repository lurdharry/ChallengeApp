import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from "react-native-responsive-screen";
const CustomHeight = 812 - 44;
const CustomWidth = 375;

export const hp = value => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = value => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

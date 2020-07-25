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
export const BASE_URL = "https://5f1bee45254cec00160825ee.mockapi.io/api/v1";

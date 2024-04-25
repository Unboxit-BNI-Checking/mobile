import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import icons from '../../../constants/icons';
import ScreenHeaderBtn from './ScreenHeaderBtn';


const CustomOptionHeader = ({ title }) => {
  return {
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerTitleStyle: {
      color: "#243757",
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ScreenHeaderBtn
          iconUrl={icons.icArrowForward}
          dimension={24}
        />
      </TouchableOpacity>
    ),
    headerTitle: title,
  };
};

export default CustomOptionHeader;

import React from "react";
import { Text } from "react-native";

const TimeFormatComponent = ({ timestamp }) => {
  const convertToUTC7 = (timestamp) => {
    const date = new Date(timestamp);
    const utc7Offset = 7 * 60 * 60 * 1000; // 7 jam dalam milidetik
    const utc7Time = new Date(date.getTime() + utc7Offset);
    return utc7Time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }) + " WIB";
  };

  return <Text>{convertToUTC7(timestamp)}</Text>;
};

export default TimeFormatComponent;

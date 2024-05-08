import React from "react";
import { Text } from "react-native";

const TruncatedTextComponent = ({ text, maxLength }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const truncatedText = truncateText(text, maxLength);

  return <Text>{truncatedText}</Text>;
};

export default TruncatedTextComponent;

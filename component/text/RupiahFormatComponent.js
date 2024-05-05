import { Text } from "react-native";

const RupiahFormatComponent = ({ value }) => {
  const formattedAmount = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return <Text>{formattedAmount}</Text>;
};

export default RupiahFormatComponent;

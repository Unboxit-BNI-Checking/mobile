import { Text, View, Image, StyleSheet } from "react-native";
import icons from "../../constants/icons";

const StatusBadge = ({ status }) => {
  let badgeStyle, textStyle;

  switch (status) {
    case 1:
      badgeStyle = {
        paddingHorizontal: 8,
        paddingVertical: 2,
        minWidth: 59, // Changed width to minWidth
        backgroundColor: "#E7F8EF",
        borderRadius: 50,
        height: 26,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start", // Added alignSelf
      };
      textStyle = {
        color: "#10B55A",
        fontSize: 12,
        fontFamily: "PlusJakartaSansBold",
      };
      break;
    case 2:
      badgeStyle = {
        paddingHorizontal: 8,
        paddingVertical: 2,
        minWidth: 79, // Changed width to minWidth
        backgroundColor: "#FFF6E6",
        borderRadius: 50,
        height: 26,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start", // Added alignSelf
      };
      textStyle = {
        color: "#FFA500",
        fontSize: 12,
        fontFamily: "PlusJakartaSansBold",
      };
      break;
    case 3:
      badgeStyle = {
        paddingHorizontal: 8,
        paddingVertical: 2,
        minWidth: 50, // Changed width to minWidth
        backgroundColor: "#FBE9ED",
        borderRadius: 50,
        height: 26,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start", // Added alignSelf
      };
      textStyle = {
        color: "#D6264F",
        fontSize: 12,
        fontFamily: "PlusJakartaSansBold",
      };
      break;
    default:
      badgeStyle = {
        paddingHorizontal: 8,
        paddingVertical: 2,
        minWidth: 59, // Changed width to minWidth
        backgroundColor: "#E7F8EF",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start", // Added alignSelf
      };
      textStyle = {
        color: "#10B55A",
        fontSize: 12,
        fontFamily: "PlusJakartaSansBold",
      };
      break;
  }

  return (
    <View style={badgeStyle}>
      <Text style={textStyle}>
        {status === 1 ? "Normal" : status === 2 ? "Investigasi" : "Peringatan"}
      </Text>
    </View>
  );
};

const LabelStatusComponent = ({ title, status }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Image source={icons.icInfoValidasiPayment} style={styles.infoImage} />
      </View>
      <StatusBadge status={status} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    color: "#006885",
    fontSize: 14,
    fontFamily: "PlusJakartaSansBold",
  },
  infoImage: {
    width: 16,
    height: 16,
    marginLeft: 4,
    marginTop: 4,
  },
  statusContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 26,
    width: 79,
    backgroundColor: "#FFF6E6",
    borderRadius: 50,
    justifyContent: "center",
  },
  statusText: {
    color: "#F2994A",
    fontSize: 12,
  },
});

export default LabelStatusComponent;

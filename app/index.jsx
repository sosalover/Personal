import { View, Text, StyleSheet } from "react-native";

const MapView = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Hannah </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapView;

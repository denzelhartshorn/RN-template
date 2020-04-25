import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="This is the Header Title" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

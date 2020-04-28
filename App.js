import React from "react";
import { Stylesheet, Text, View } from "react-native";

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="This is the Header Title" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

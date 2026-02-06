import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [text, setText] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter text below</Text>
      <TextInput
        placeholder="Write here any alphabet to show pizza"
        value={text} 
        onChangeText={setText}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          color: "#000",
          backgroundColor: "#fff",
          marginTop: 20,
        }}
      />
      <Text>
        {text
          .split("") // Split the text into individual characters
          .map((word) => word && "🍕") // Map each character to a pizza emoji
          .join("")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

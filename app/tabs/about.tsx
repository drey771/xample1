import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.description}>
          This is the about page of our React Native application.
        </Text>
        <Text style={styles.sectionTitle}>Version</Text>
        <Text style={styles.text}>1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

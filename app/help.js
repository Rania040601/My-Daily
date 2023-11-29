import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Help</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Bug Report"
            style={styles.button}
          />
          <Button
            title="General Questions"
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ff8c00",
  },
  buttonContainer: {
    padding: 20,
    alignItems: "left",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#ff8c00",
    color: "#fff",
    borderRadius: 5,
  },
});

export default HelpScreen;
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonSuccess1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signIn}>Sign in</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  signIn: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonSuccess1;

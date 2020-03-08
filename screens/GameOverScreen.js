import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Color from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>Game Over!!</Text>
      <Image
        source={require("../assets/success.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>No of Rounds : {props.roundNumber}</Text>
      <Text style={styles.textStyle}>Your Number : {props.userChoice}</Text>
      <View style={styles.buttonStyle}>
        <Button
          title="Restart Game"
          color={Color.primary}
          onPress={props.restartGame}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    paddingVertical: 20
  },
  textStyle: {
    fontSize: 22,
    paddingVertical: 8
  },
  imageStyle: {
    width: "80%",
    height: 250
  }
});

export default GameOverScreen;

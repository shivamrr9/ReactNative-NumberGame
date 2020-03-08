import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return rndNum;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Card style={styles.confirmText}>
        <Text style={styles.numberText}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button title="LOWER" onPress={() => {}} color={Colors.accent} />
          <Button title="GREATER" onPress={() => {}} color={Colors.primary} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  confirmText: {
    marginVertical: 30,
    alignItems: "center"
  },
  numberText: {
    fontSize: 30,
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    maxWidth: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default GameScreen;

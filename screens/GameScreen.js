import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const [rounds, setRounds] = useState(0);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      console.log("code aya yha");
      Alert.alert("Don't Lie", "You knwo this is Wrong!", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Card style={styles.confirmText}>
        <Text style={styles.numberText}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="LOWERR"
            onPress={() => {
              nextGuessHandler("lower");
            }}
            color={Colors.accent}
          />
          <Button
            title="GREATER"
            onPress={() => {
              nextGuessHandler("greater");
            }}
            color={Colors.primary}
          />
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
    paddingHorizontal: 20
  }
});

export default GameScreen;

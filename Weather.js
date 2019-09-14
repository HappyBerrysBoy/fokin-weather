import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Snow: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Clear: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998"],
    title: "Clouds",
    subtitle: "Clouds Clouds"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions["Clouds"].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}oc</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 54,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});

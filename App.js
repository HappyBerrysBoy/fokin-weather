import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b9520034477bd7e1b09d0e3d89ad26b1";
const getWeatherUrl = (api, lat, lon) => {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}&units=metric`;
};

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    condition: "Haze"
  };
  getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(getWeatherUrl(API_KEY, lat, lon));
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So Sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

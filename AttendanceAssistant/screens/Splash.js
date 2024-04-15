import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Splash({ navigation }) {
  return (
    <View style={SplashStyles.container}>
      <View style={SplashStyles.imageContainer}>
        <Image
          source={require("../assets/loginVector1.png")}
          style={SplashStyles.image}
        />
      </View>
      <View>
        <Text style={SplashStyles.heading}>Attendance</Text>
      </View>
      <View>
        <Text style={SplashStyles.heading}>Assistant</Text>
      </View>
      <View>
        <Text style={SplashStyles.subheading}>
          Check, Maintain and Manage Attendance within a few Clicks!
        </Text>
      </View>

      <View style={SplashStyles.buttonContainer}>
        <TouchableOpacity
          style={SplashStyles.button1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={SplashStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SplashStyles.button2}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={SplashStyles.buttonText1}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    width: windowWidth * 0.8, // Adjust as needed
    height: windowHeight * 0.4, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensure the image fits within the container
  },
  heading: {
    color: "#5B67CA",
    fontSize: 32, // Adjust as needed
    fontWeight: "bold",
  },
  subheading: {
    marginTop: 20,
    color: "#5B67CA",
    fontSize: 14,
    flexWrap: "wrap",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 40,
  },
  button1: {
    width: 300,
    height: 50,
    backgroundColor: "#5B67CA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  button2: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

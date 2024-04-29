import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-simple-toast";

export default function Login({}) {
  const navigation = useNavigation(); // Access navigation object

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const LoginHandler = () => {
    if (!email.trim() || !email.includes("@")) {
      showToast("Please enter a valid email address");
      return;
    }

    if (password.length < 6 || password.length > 20) {
      showToast("Password should be between 6 and 20 characters long");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Optionally, you can navigate to another screen upon successful login
        navigation.navigate("Home"); // Navigate to the "Profile" screen in the "MainStack" navigator
      })
      .catch((error) => {
        // Handle errors
        showToast(error.message);
      });
  };

  const showToast = (message) => {
    Toast.show(message, Toast.SHORT);
  };

  return (
    <View style={LoginStyles.container}>
      <View>
        <Text style={LoginStyles.heading}>Login</Text>
      </View>
      <View style={LoginStyles.FieldContainer}>
        <Image
          source={require("../assets/Gmail.png")}
          style={LoginStyles.icon}
        />
        <TextInput
          style={LoginStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#C6CEDD"
          keyboardType="email-address"
        />
      </View>
      <View
        style={{
          marginBottom: 160,
        }}
      >
        <Image
          source={require("../assets/Lock.png")}
          style={LoginStyles.icon}
        />
        <TextInput
          style={LoginStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#C6CEDD"
          secureTextEntry={true}
          maxLength={20}
        />
      </View>
      <View>
        <TouchableOpacity style={LoginStyles.button1} onPress={LoginHandler}>
          <Text style={LoginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
          Don’t have an account?{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={LoginStyles.link}
          >
            <Text style={LoginStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  heading: {
    color: "#5B67CA",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 30,
    paddingLeft: 40,
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 10,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  button1: {
    width: 300,
    height: 50,
    backgroundColor: "#5B67CA",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  FieldContainer: {
    marginTop: 40,
  },
  link: {
    color: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});

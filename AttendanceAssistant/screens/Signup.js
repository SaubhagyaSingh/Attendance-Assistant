import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-simple-toast";

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SignUpHandler = () => {
    if (!username.trim()) {
      showToast("Please enter a username");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      showToast("Please enter a valid email address");
      return;
    }

    if (!phoneNumber.trim() || !/^[0-9]+$/.test(phoneNumber)) {
      showToast("Please enter a valid phone number");
      return;
    }

    if (password.length < 6 || password.length > 20) {
      showToast("Password should be between 6 and 20 characters long");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    console.log(username, email, phoneNumber, password);
    // Proceed with signup logic
  };

  const showToast = (message) => {
    Toast.show(message, Toast.SHORT);
  };

  return (
    <View style={SignUpStyles.container}>
      <View>
        <Text style={SignUpStyles.heading}>Sign Up</Text>
      </View>
      <View>
        <Image
          source={require("../assets/Message.png")}
          style={SignUpStyles.icon}
        />
        <TextInput
          style={SignUpStyles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username (max 20 characters)"
          placeholderTextColor="#C6CEDD"
          maxLength={20}
        />
      </View>
      <View>
        <Image
          source={require("../assets/Gmail.png")}
          style={SignUpStyles.icon}
        />
        <TextInput
          style={SignUpStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#C6CEDD"
          keyboardType="email-address"
        />
      </View>
      <View>
        <Image
          source={require("../assets/Phone.png")}
          style={SignUpStyles.icon}
        />
        <TextInput
          style={SignUpStyles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          placeholderTextColor="#C6CEDD"
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>
      <View>
        <Image
          source={require("../assets/Lock.png")}
          style={SignUpStyles.icon}
        />
        <TextInput
          style={SignUpStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password (6-20 characters)"
          placeholderTextColor="#C6CEDD"
          secureTextEntry={true}
          maxLength={20}
        />
      </View>
      <View>
        <Image
          source={require("../assets/Done.png")}
          style={SignUpStyles.icon}
        />
        <TextInput
          style={SignUpStyles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#C6CEDD"
          secureTextEntry={true}
          maxLength={20}
        />
      </View>
      <View>
        <TouchableOpacity style={SignUpStyles.button1} onPress={SignUpHandler}>
          <Text style={SignUpStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
          Don’t have an account?{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={SignUpStyles.link}
          >
            <Text style={SignUpStyles.link}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const SignUpStyles = StyleSheet.create({
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
    marginTop: 80,
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
    flexDirection: "row",
  },
});

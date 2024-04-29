import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Picture from "../assets/Picture.png";
import Profile from "../assets/profile.png";
import Timetable from "../assets/Timetable.png";
import HomeIcon from "../assets/Homeicon.png";
import Plus from "../assets/Plus.png";

const Navbar = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home"); // Replace "Home" with the name of your home screen
  };

  const goToTimetable = () => {
    navigation.navigate("Timetable"); // Replace "Timetable" with the name of your timetable screen
  };

  const goToAddItem = () => {
    navigation.navigate("Attendance"); // Replace "AddItem" with the name of your add item screen
  };

  const goToPicture = () => {
    navigation.navigate("Picture"); // Replace "Picture" with the name of your picture screen
  };

  const goToProfile = () => {
    navigation.navigate("Profile"); // Replace "Profile" with the name of your profile screen
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.leftIcons}>
        <TouchableOpacity style={styles.iconItem} onPress={goToHome}>
          <Image source={HomeIcon} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem} onPress={goToTimetable}>
          <Image source={Timetable} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.centerIcon} onPress={goToAddItem}>
        <Image source={Plus} style={styles.PlusIcon} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconItem} onPress={goToPicture}>
          <Image source={Picture} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem} onPress={goToProfile}>
          <Image source={Profile} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDE6FC", // Background color
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    height: 60,
    paddingHorizontal: 20,
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerIcon: {
    alignItems: "center",
  },
  iconItem: {
    marginRight: 20,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  homeIcon: {
    width: 32,
    height: 32,
  },
  PlusIcon: {
    width: 42,
    height: 42,
  },
});

export default Navbar;

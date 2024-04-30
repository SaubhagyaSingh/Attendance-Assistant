import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Attendance = () => {
  const [subject, setSubject] = useState("");
  const [panel, setPanel] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [time, setTime] = useState("");
  const [room, setRoom] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageStatus, setImageStatus] = useState("");

  const selectImageFromGallery = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access media library is required!");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImageStatus("Image selected");
        setImage(result.assets[0].uri);
        return; // No need to proceed further if the user cancels
      }
      if (result.uri) {
        setImage(result.uri);
        setImageName(result.uri.split("/").pop() || ""); // Extract file name
        setImageStatus("Image selected");
      } else {
        setImageStatus("Failed to select image");
      }
    } catch (error) {
      console.error("Error picking image:", error);
      setImageStatus("Failed to select image");
    }
  };

  const handleSubmit = () => {
    // Placeholder function for handling form submission
    console.log("Attendance Details:", {
      subject,
      panel,
      specialization,
      time,
      room,
      image,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={subject}
        onChangeText={setSubject}
        placeholder="Subject"
        style={styles.input}
      />
      <TextInput
        value={panel}
        onChangeText={setPanel}
        placeholder="Panel"
        style={styles.input}
      />
      <TextInput
        value={specialization}
        onChangeText={setSpecialization}
        placeholder="Specialization"
        style={styles.input}
      />
      <TextInput
        value={time}
        onChangeText={setTime}
        placeholder="Time"
        style={styles.input}
      />
      <TextInput
        value={room}
        onChangeText={setRoom}
        placeholder="Room"
        style={styles.input}
      />
      <Button
        title="Select Image from Gallery"
        onPress={selectImageFromGallery}
      />
      {imageStatus ? <Text style={styles.status}>{imageStatus}</Text> : null}
      {imageName ? (
        <Text style={styles.fileName}>File Name: {imageName}</Text>
      ) : null}
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
    paddingVertical: 8,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  status: {
    marginBottom: 10,
    color: "green",
  },
  fileName: {
    marginBottom: 10,
  },
});

export default Attendance;

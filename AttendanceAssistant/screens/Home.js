import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import face from "../assets/Happyface.png";
import iMac from "../assets/iMac.png";
import time from "../assets/time.png";
import Folder from "../assets/Folder.png";
import gallery from "../assets/gallery.png";
import Navbar from "../components/Navbar";

export default function Home() {
  const username = "default user";
  const [myQuote, setMyQuote] = useState("");

  const subjectInfo = [
    {
      subjectName: "VIPT",
      timeDuration: "2 hours",
      classroom: "Room 101",
      panelName: "Panel A",
    },
    {
      subjectName: "Mathematics",
      timeDuration: "1.5 hours",
      classroom: "Room 202",
      panelName: "Panel B",
    },
    {
      subjectName: "Science",
      timeDuration: "1 hour",
      classroom: "Room 303",
      panelName: "Panel C",
    },
  ];

  useEffect(() => {
    fetch(
      "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          const quote = data.quoteText;
          setMyQuote(quote);
        } catch (error) {
          console.error("Error parsing quote data:", error);
          setMyQuote("Error fetching quote: Unable to parse quote data");
        }
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setMyQuote("Believe you can and you're halfway there.");
      });
  }, []);

  const handleSquarePress = (squareName) => {
    alert(`You pressed ${squareName}`);
    // Perform desired action here
  };

  return (
    <View>
      <ScrollView style={HomeStyles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={HomeStyles.heading}>Hi {username}</Text>
          <Image source={face} style={HomeStyles.faceImage} />
        </View>
        <View style={HomeStyles.contentContainer}>
          <Text style={HomeStyles.text}>{myQuote}</Text>
        </View>
        <View>
          <Text style={HomeStyles.heading2}>Attendance Assistant</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View style={HomeStyles.squareContainer}>
            <TouchableOpacity
              style={[HomeStyles.square, { backgroundColor: "#7DC8E7" }]}
              onPress={() => handleSquarePress("Class Attendance")}
            >
              <Text style={HomeStyles.subheading}>Class Attendance</Text>
              <Image source={iMac} style={{ marginTop: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[HomeStyles.square, { backgroundColor: "#7D88E7" }]}
              onPress={() => handleSquarePress("Timetable")}
            >
              <Text style={HomeStyles.subheading}>Timetable</Text>
              <Image
                source={time}
                style={{ marginTop: 20, marginLeft: 10, height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[HomeStyles.square, { backgroundColor: "#E77D8A" }]}
              onPress={() => handleSquarePress("Gallery")}
            >
              <Text style={HomeStyles.subheading}>Gallery</Text>
              <Image
                source={gallery}
                style={{ marginTop: 10, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[HomeStyles.square, { backgroundColor: "#81E89E" }]}
              onPress={() => handleSquarePress("Students")}
            >
              <Text style={HomeStyles.subheading}>Students</Text>
              <Image source={Folder} style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyles.timetableContainer}>
          <Text style={HomeStyles.timetableHeading}>Timetable</Text>
          {subjectInfo.map((subject, index) => (
            <View key={index} style={HomeStyles.subjectContainer}>
              <Text style={HomeStyles.subjectText}>{subject.subjectName}</Text>
              <Text>{`Time Duration: ${subject.timeDuration}`}</Text>
              <Text>{`Classroom: ${subject.classroom}`}</Text>
              <Text>{`Panel Name: ${subject.panelName}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 20,
  },
  faceImage: {
    marginBottom: 5,
    marginLeft: 120,
  },
  heading: {
    fontSize: 24,
  },
  heading2: {
    marginTop: 40,
    fontSize: 24,
  },
  squareContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  square: {
    borderRadius: 20,
    height: 140,
    width: 140,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timetableContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  timetableHeading: {
    fontSize: 24,
    color: "black",
  },
  subjectContainer: {
    height: 115,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  subjectText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

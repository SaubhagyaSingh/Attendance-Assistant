import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./components/Navbar";

import { useAuth } from "./hooks/useAuth.js";

// Import your screen components
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Attendance from "./screens/Attendance";
import TimeTableScreen from "./screens/TimeTableScreen";

const Stack = createStackNavigator();

const App = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="Timetable" component={TimeTableScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
      {user && <Navbar />}
    </NavigationContainer>
  );
};

export default App;

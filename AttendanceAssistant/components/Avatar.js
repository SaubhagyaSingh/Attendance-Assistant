import React from "react";
import { View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

export default function Avatar() {
  const avatar = createAvatar(lorelei, {
    seed: "thisprofile",
  });

  const svg = avatar.toString();

  return (
    <View>
      <SvgUri
        width="200" // Specify the width of the SVG
        height="200" // Specify the height of the SVG
        source={{ uri: `data:image/svg+xml;base64,${svg}` }} // SVG data
      />
    </View>
  );
}

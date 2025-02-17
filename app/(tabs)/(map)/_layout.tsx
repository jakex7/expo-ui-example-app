import { Link, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import React from "react";
import { PlatformColor, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "systemUltraThinMaterial",
          title: "Location Map",
          presentation: "formSheet",
        }}
      />
    </Stack>
  );
}

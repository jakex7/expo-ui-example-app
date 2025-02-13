import { Stack } from "expo-router";
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
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerRight: () => {
            return (
              <View
                style={{
                  backgroundColor: PlatformColor("systemGray5"),
                  width: 32,
                  height: 32,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SymbolView
                  name="xmark"
                  size={20}
                  // @ts-ignore
                  tintColor={PlatformColor("systemGray")}
                  weight="bold"
                />
              </View>
            );
          },
          headerLargeTitle: false,
          headerLargeTitleShadowVisible: false,
          headerLargeStyle: { backgroundColor: "transparent" },
          headerTitle: "",
          presentation: "formSheet",
          sheetAllowedDetents: [0.5, 1],
          sheetGrabberVisible: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}

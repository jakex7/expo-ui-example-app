import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerSearchBarOptions: {},
          headerTransparent: true,
          headerBlurEffect: "systemUltraThinMaterial",
          title: "Location List",
          headerRight: () => {
            return (
              <View>
                {/* <ContextMenu Items={MenuItems} > */}
                <SymbolView
                  name="line.3.horizontal.decrease.circle"
                  size={28}
                />
                {/* </ContextMenu> */}
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}

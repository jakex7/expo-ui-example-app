import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { PlatformColor, View } from "react-native";
import { SymbolView } from "expo-symbols";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: true,
            headerRight: () => {
              return (
                <Link href="..">
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
                      tintColor={PlatformColor("systemGray")}
                      weight="bold"
                    />
                  </View>
                </Link>
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
            contentStyle: {
              backgroundColor: PlatformColor("systemGroupedBackground"),
            },
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

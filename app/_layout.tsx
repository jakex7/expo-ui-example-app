import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ContextMenu } from "@expo/ui/components/ContextMenu";
import { SymbolView } from "expo-symbols";
import { Button } from "@expo/ui/components/Button";
import React from "react";
import { View } from "react-native";

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
  const MenuItems = (
    <>
      <Button onPress={() => console.log("Pressed1")}>
        Show Favourites Only
      </Button>
      {/* <Button onPress={() => console.log("Pressed2")}>Hide Tasted</Button>
      <Button onPress={() => console.log("Pressed3")}>Show Current Only</Button>
      <Button onPress={() => console.log("Pressed4")}>Show Vegan Only</Button>
      <Button onPress={() => console.log("Pressed5")}>
        Show Dairy Free Only
      </Button>
      <Button onPress={() => console.log("Pressed6")}>
        Show Gluten Free Only
      </Button>
      <Button onPress={() => console.log("Pressed7")}>
        Show Nut Free Only
      </Button>
      <Button onPress={() => console.log("Pressed8")}>
        Show Alcohol Free Only
      </Button> */}
    </>
  );

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerLargeTitle: true,
            headerSearchBarOptions: {},
            headerTransparent: true,
            headerBlurEffect: "systemUltraThinMaterial",
            title: "Flavour List",
            headerRight: () => {
              // return null;
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
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />

      {/* <ContextMenu Items={MenuItems}>
        <SymbolView name="line.3.horizontal.decrease.circle" size={28} />
      </ContextMenu> */}
    </ThemeProvider>
  );
}

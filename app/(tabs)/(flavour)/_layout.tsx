import { Button } from "@expo/ui/components/Button";
import { ContextMenu } from "@expo/ui/components/ContextMenu";
import { Stack } from "expo-router";

import { SymbolView } from "expo-symbols";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  const MenuItems = (
    <>
      <Button onPress={() => console.log("Pressed1")}>
        Show Favourites Only
      </Button>
      <Button onPress={() => console.log("Pressed2")}>Hide Tasted</Button>
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
      </Button>
    </>
  );
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
          title: "Flavour List",
          headerRight: () => {
            return (
              <View>
                {/* <ContextMenu Items={MenuItems}> */}
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

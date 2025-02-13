import LocationList from "@/assets/data/LocationList.json";
import { ThemedText } from "@/components/ThemedText";
import { Section } from "@expo/ui/components/Section";
import { useNavigation } from "expo-router";
import { SymbolView } from "expo-symbols";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function LocationScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event: any) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      contentInset={{ bottom: 60, top: -30 }}
    >
      <Section title="">
        {LocationList.data
          .filter((location) =>
            search === "" ||
            location.name.toLowerCase().includes(search.toLowerCase())
              ? location
              : undefined,
          )
          .map((location) => (
            <View key={location.id} style={styles.element}>
              <ThemedText numberOfLines={2} style={{ width: "90%" }}>
                {location.name}
              </ThemedText>
              <SymbolView
                name="chevron.right"
                size={16}
                tintColor="lightgrey"
              />
            </View>
          ))}
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  element: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
});

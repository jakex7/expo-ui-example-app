import FlavourList from "@/assets/data/FlavourList.json";
import { ThemedText } from "@/components/ThemedText";
import { Section } from "@expo/ui/components/Section";
import { Link, useNavigation } from "expo-router";
import { SymbolView } from "expo-symbols";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function FlavourScreen() {
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
      contentInset={{ bottom: 60 }}
    >
      <Section title="">
        {FlavourList.data
          .filter((flavour) =>
            search === "" ||
            flavour.name.toLowerCase().includes(search.toLowerCase())
              ? flavour
              : undefined,
          )
          .map((flavour) => (
            <Link key={flavour.id} href={`/${flavour.location}`}>
              <View style={styles.element}>
                <ThemedText numberOfLines={1} style={{ flex: 1 }}>
                  {flavour.name}
                </ThemedText>
                <SymbolView
                  name="chevron.right"
                  size={16}
                  tintColor="lightgrey"
                  style={{ marginLeft: 16 }}
                />
              </View>
            </Link>
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

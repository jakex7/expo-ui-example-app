import LocationList from "@/assets/data/LocationList.json";
import { ThemedText } from "@/components/ThemedText";
import { Section } from "@expo/ui/components/Section";
import { useLocalSearchParams } from "expo-router";
import { PlatformColor, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MapLocationScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const currerntLocation = LocationList.data.find(
    (location) => location.id == (id as unknown as number),
  );
  if (!currerntLocation) {
    return null;
  }
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: PlatformColor("systemGroupedBackground"),
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
          {currerntLocation.name}
        </ThemedText>
        <ThemedText>{currerntLocation.stores[0].address}</ThemedText>
        <ThemedText>{currerntLocation.stores[0].hours}</ThemedText>
      </View>
      <Section title="">
        {currerntLocation.stores.map((store) => (
          <ThemedText key={store.address}>{store.name}</ThemedText>
        ))}
      </Section>
    </ScrollView>
  );
}

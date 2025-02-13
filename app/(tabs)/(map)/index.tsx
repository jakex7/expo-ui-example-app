import { StyleSheet } from "react-native";
import LocationList from "@/assets/data/LocationList.json";

import { AppleMaps } from "expo-maps";
import { router, useNavigation } from "expo-router";

const LOCATIONS = LocationList.data
  .map((location) => {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    return location.stores.map((store) => ({
      coordinates: {
        latitude: store.point[0],
        longitude: store.point[1],
      },
      title: `${location.name}\n${store.name}`,
      tintColor: color,
      systemImage: "cup.and.heat.waves.fill",
    }));
  })
  .flat();
export default function MapScreen() {
  return (
    <AppleMaps.View
      markers={LOCATIONS}
      style={{ flex: 1 }}
      uiSettings={{ myLocationButtonEnabled: false }}
      properties={{ selectionEnabled: false }}
      onMarkerClick={(event) => {
        router.push(
          `/(map)/${
            LocationList.data.find((location) =>
              location.stores.find(
                (store) =>
                  store.point[0] === event.coordinates?.latitude &&
                  store.point[1] === event.coordinates.longitude,
              ),
            )?.id || "0"
          }`,
        );
      }}
      cameraPosition={{
        coordinates: {
          latitude: 49.28,
          longitude: -123.12,
        },
        zoom: 11,
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

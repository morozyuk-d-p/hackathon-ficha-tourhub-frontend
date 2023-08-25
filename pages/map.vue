<template>
  <div id="map" class="w-100 h-100" style="padding-top: 3.5rem"></div>
</template>

<script setup lang="ts">
import Map from "ol/Map";
import BingMaps from "ol/source/BingMaps";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { useGeographic } from "ol/proj";

useGeographic();

const styles = [
  "RoadOnDemand",
  "Aerial",
  "AerialWithLabelsOnDemand",
  "CanvasDark",
  "OrdnanceSurvey",
];

onMounted(() => {
  const map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new BingMaps({
          key: useRuntimeConfig().public.bingMapsKey,
          imagerySet: styles[0],
          placeholderTiles: true,
          culture: "ru",
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
    console.log(`Coordinates: ${pos.coords.latitude} ${pos.coords.longitude}`);
    setTimeout(() => {
      map.setView(
        new View({
          center: [pos.coords.longitude, pos.coords.latitude],
          zoom: 5,
        })
      );
    }, 1000);
  });
});
</script>

<style lang="scss">
@import "ol/ol.css";
</style>

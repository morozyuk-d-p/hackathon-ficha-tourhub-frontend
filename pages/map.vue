<template>
  <div id="map" class="w-100 h-100"></div>
</template>

<script setup lang="ts">
import { Feature } from "ol";
import Map from "ol/Map";
import BingMaps from "ol/source/BingMaps";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Control, defaults as defaultControls } from "ol/control.js";
import { useGeographic } from "ol/proj";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

useGeographic();

class ScrollToCurrentLocation extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options: object) {
    const options = opt_options || {};

    const button = document.createElement("button");
    button.innerHTML = '<i class="bi bi-geo-alt-fill"></i>';

    const element = document.createElement("div");
    element.className = "scroll-current ol-unselectable ol-control";
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });

    button.addEventListener(
      "click",
      this.handleScrollCurrent.bind(this),
      false
    );
  }

  handleScrollCurrent() {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      this.getMap()
        ?.getView()
        .setCenter([pos.coords.longitude, pos.coords.latitude]);
      this.getMap()?.getView().setZoom(15);
    });
  }
}

const styles = [
  "RoadOnDemand",
  "Aerial",
  "AerialWithLabelsOnDemand",
  "CanvasDark",
  "OrdnanceSurvey",
];

onMounted(() => {
  const map = new Map({
    controls: defaultControls().extend([new ScrollToCurrentLocation()]),
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

  navigator.geolocation.getCurrentPosition((pos) => {
    map.setView(
      new View({
        center: [pos.coords.longitude, pos.coords.latitude],
        zoom: 15,
      })
    );
  });

  const locationFeature = new Feature();

  new VectorLayer({
    map: map,
    source: new VectorSource({
      features: [locationFeature],
    }),
  });

  navigator.geolocation.watchPosition((pos) => {
    locationFeature.setGeometry(
      new Point([pos.coords.longitude, pos.coords.latitude])
    );
  });
});
</script>

<style lang="scss">
@import "ol/ol.css";

.scroll-current {
  top: 65px;
  left: 0.5em;
}
.ol-touch .scroll-current {
  top: 80px;
}
</style>

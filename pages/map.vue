<template>
  <div id="map" class="w-100 h-100"></div>
  <div id="popup"></div>
</template>

<script setup lang="ts">
import { Feature, Overlay } from "ol";
import Map from "ol/Map";
import BingMaps from "ol/source/BingMaps";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Control, defaults as defaultControls } from "ol/control.js";
import { useGeographic } from "ol/proj";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon.js";
import * as bootstrap from "bootstrap";

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

const places = [
  {
    name: "Литературный музей А.П. Чехова г. Таганрога",
    latitude: 47.215395,
    longitude: 38.921432,
  },
  {
    name: "Музей «Домик Чехова»",
    latitude: 47.206874,
    longitude: 38.931242,
  },
  {
    name: "Таганрогский художественный музей. Русское искусство",
    latitude: 47.210179,
    longitude: 38.930721,
  },
  {
    name: "Историко-краеведческий музей (дворец Алфераки)",
    latitude: 47.213534,
    longitude: 38.928277,
  },
  {
    name: "Музей И.Д. Василенко",
    latitude: 47.209702,
    longitude: 38.925564,
  },
  {
    name: "Музей «Лавка Чеховых»",
    latitude: 47.215988,
    longitude: 38.918063,
  },
  {
    name: "Музей «Градостроительство и быт Таганрога»",
    latitude: 47.218583,
    longitude: 38.921109,
  },
  {
    name: "Музей А.А. Дурова",
    latitude: 47.209176,
    longitude: 38.922762,
  },
  {
    name: "МАУК «Таганрогский музейный комплекс»",
    latitude: 47.203513,
    longitude: 38.940979,
  },
  {
    name: "Парк имени 300-летия города Таганрога",
    latitude: 47.221552,
    longitude: 38.85678,
  },
  {
    name: "Дом П.Е. Чехова",
    latitude: 47.207443,
    longitude: 38.922923,
  },
  {
    name: "Южно-Российский научно-культурный центр А.П. Чехова",
    latitude: 47.215395,
    longitude: 38.921432,
  },
  {
    name: "Таганрогский военно-исторический музей",
    latitude: 47.22291,
    longitude: 38.934197,
  },
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

  const placesSource = new VectorSource();

  for (let item of places) {
    const placeFeature = new Feature();
    placeFeature.setStyle(
      new Style({
        image: new Icon({
          src: "/img/map-marker.png",
          scale: 0.5,
        }),
      })
    );

    placeFeature.setGeometry(new Point([item.longitude, item.latitude]));

    placeFeature.set("object", item);

    placesSource.addFeature(placeFeature);
  }

  const placesLayer = new VectorLayer({
    map: map,
    source: placesSource,
  });

  const popup = new Overlay({
    element: document.getElementById("popup"),
  });
  map.addOverlay(popup);

  const element = popup.getElement();

  map.on("click", function (evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });
    if (feature) {
      const coordinate = evt.coordinate;
      popup.setPosition(coordinate);
      let popover = bootstrap.Popover.getInstance(element);
      if (popover) {
        popover.dispose();
      }
      popover = new bootstrap.Popover(element, {
        animation: false,
        container: element,
        content: `<div class="text-center"><a href="#" class="btn btn-primary">Подробнее</a></div>`,
        html: true,
        placement: "auto",
        title: `<h6>${feature.get("object").name}</h6>`,
      });
      popover.show();

      console.log("Found feature");
      console.log(feature);
    }
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

import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View.js";
import { useEffect, useRef, useState } from "react";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import PointerPin from "../../icons/pointer-pin.svg";
import { fromLonLat, toLonLat } from "ol/proj";
import { FeatureClass } from "ol/Feature";
import {
  Pointer as PointerInteraction,
  defaults as defaultInteractions,
} from "ol/interaction.js";
import { useSetLonLat } from "@/backend-layer/_internal/context/signup";

class Drag extends PointerInteraction {
  constructor() {
    super({
      handleDownEvent: handleDownEvent,
      handleDragEvent: handleDragEvent,
      handleMoveEvent: handleMoveEvent,
      handleUpEvent: handleUpEvent,
    });

    /**
     * @type {import("../src/ol/coordinate.js").Coordinate}
     * @private
     */
    let coordinate_: any = null;

    /**
     * @type {string|undefined}
     * @private
     */
    let cursor_: any = "pointer";

    /**
     * @type {Feature}
     * @private
     */
    let feature_: any = null;

    /**
     * @type {string|undefined}
     * @private
     */
    let previousCursor_: any = undefined;
  }
}
/**
 * @type {import("../src/ol/coordinate.js").Coordinate}
 * @private
 */
let coordinate_: any = null;

/**
 * @type {string|undefined}
 * @private
 */
let cursor_: any = "pointer";

/**
 * @type {Feature}
 * @private
 */
let feature_: any = null;

/**
 * @type {string|undefined}
 * @private
 */
let previousCursor_: any = undefined;

/**
 * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
 * @return {boolean} `true` to start the drag sequence.
 */
function handleDownEvent(evt: any) {
  const map = evt.map;

  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature: any) {
    return feature;
  });

  if (feature) {
    coordinate_ = evt.coordinate;

    feature_ = feature;
  }

  return !!feature;
}

/**
 * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
 */
function handleDragEvent(evt: any) {
  const deltaX = evt.coordinate[0] - coordinate_[0];
  const deltaY = evt.coordinate[1] - coordinate_[1];

  const geometry = feature_.getGeometry();
  geometry.translate(deltaX, deltaY);

  coordinate_[0] = evt.coordinate[0];
  coordinate_[1] = evt.coordinate[1];
}

/**
 * @param {import("../src/ol/MapBrowserEvent.js").default} evt Event.
 */
function handleMoveEvent(evt: any) {
  if (cursor_) {
    const map = evt.map;
    const feature = map.forEachFeatureAtPixel(
      evt.pixel,
      function (feature: any) {
        return feature;
      }
    );
    const element = evt.map.getTargetElement();
    if (feature) {
      if (element.style.cursor != cursor_) {
        previousCursor_ = element.style.cursor;
        element.style.cursor = cursor_;
      }
    } else if (previousCursor_ !== undefined) {
      element.style.cursor = previousCursor_;
      previousCursor_ = undefined;
    }
  }
}

/**
 * @return {boolean} `false` to stop the drag sequence.
 */
function handleUpEvent() {
  let retValue = coordinate_;
  coordinate_ = null;
  feature_ = null;
  return false;
}

export const MapComponentSignUp = () => {
  const setLonLat = useSetLonLat();
  const mapTargetElement = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | undefined>();
  const pointFeature = new Feature(new Point(fromLonLat([0, 0])));
  useEffect(() => {
    const map = new Map({
      interactions: defaultInteractions().extend([new Drag()]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [pointFeature],
          }),
          style: {
            "icon-src": "/images/map-pointer-two.png",
            "icon-opacity": 0.95,
            "icon-anchor": [0.5, 1],
          },
        }),
      ],
      target: "map",
      view: new View({
        center: fromLonLat([0, 0]),

        zoom: 5,

        minZoom: 0,

        maxZoom: 28,
      }),
    });
    map.setTarget(mapTargetElement.current || "");
    setMap(map);
    map.on("pointerdrag", function (event) {
      const flag = pointFeature.getGeometry()?.getCoordinates();
      if (flag) setLonLat(toLonLat(flag)[0], toLonLat(flag)[1]);
    });
    return () => map.setTarget("");
  }, []);
  console.log(pointFeature.getGeometry()?.getCoordinates());
  return (
    <div
      ref={mapTargetElement}
      className="map"
      style={{
        width: "100%",

        height: "400px",

        position: "relative",
      }}
    ></div>
  );
};

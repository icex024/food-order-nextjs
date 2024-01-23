import { Map, View } from "ol";
import { FeatureLike } from "ol/Feature";
import { Coordinate, toStringXY } from "ol/coordinate";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { useEffect, useRef, useState } from "react";

function MapWrap({ features }: { features: FeatureLike[] }) {
  const [map, setMap] = useState<any>();
  const [featuresLayer, setFeaturesLayer] = useState<any>();
  const [selectCood, setSelectedCoord] = useState<Coordinate>();

  const mapElement = useRef<HTMLDivElement>(null);

  const mapRef = useRef<any>();
  mapRef.current = map;

  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // create map
    const initialMap = new Map({
      target: "map",
      layers: [
        // USGS Topo
        new TileLayer({
          source: new XYZ({
            url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
          }),
        }),

        // Google Maps Terrain
        /* new TileLayer({
          source: new XYZ({
            url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
          })
        }), */

        initalFeaturesLayer,
      ],
      view: new View({
        projection: "EPSG:3857",
        center: [0, 0],
        zoom: 2,
      }),
      controls: [],
    });

    // set map onclick handler
    initialMap.on("click", handleMapClick);

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  // state, ref, and initialization logic eliminated for brevity

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (features.length) {
      // may be empty on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: features, // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features]);

  // return/render logic eliminated for brevity

  const handleMapClick = (event: any) => {
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

    // set React state
    setSelectedCoord(transormedCoord);
  };

  return (
    <div>
      <div
        ref={mapElement}
        className="map"
        style={{
          width: "100%",

          height: "400px",

          position: "relative",
        }}
      ></div>

      <div className="clicked-coord-label">
        <p>{selectCood ? toStringXY(selectCood, 5) : ""}</p>
      </div>
    </div>
  );
}

export default MapWrap;

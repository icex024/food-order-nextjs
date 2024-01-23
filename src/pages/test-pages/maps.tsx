import MapWrap from "@/components/map/MapWrap";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import GeoJSON from "ol/format/GeoJSON";
import { FeatureLike } from "ol/Feature";

const Maps: NextPage = () => {
  // set intial state
  const [features, setFeatures] = useState<FeatureLike[]>([]);

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock
  //  GeoJson API (read from flat .json file in public directory)
  useEffect(() => {
    fetch("/mock-geojson-api.json")
      .then((response) => response.json())
      .then((fetchedFeatures) => {
        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857",
        };
        const parsedFeatures = new GeoJSON().readFeatures(
          fetchedFeatures,
          wktOptions
        );

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures);
      });
  }, []);
  return (
    <>
      <MapWrap features={features}></MapWrap>
    </>
  );
};

export default Maps;

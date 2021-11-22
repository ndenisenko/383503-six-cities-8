import {useState, MutableRefObject, useEffect} from 'react';
import {Map, TileLayer} from 'leaflet';

type useMapProps = {
    mapRef: MutableRefObject<HTMLElement | null>,
}

function useMap({mapRef} : useMapProps) : Map | null {
  const [map, setMap] = useState<Map | null>(null);


  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: 52.370216,
          lng: 4.895168,
        },
        zoom: 10,
      });

      const tylelayer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });

      instance.addLayer(tylelayer);

      setMap(instance);
    }
  }, [mapRef, map]);

  return map;
}

export default useMap;

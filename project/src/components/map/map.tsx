import {Offers} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {Marker, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {DEFAULT_CUSTOM_ICON} from '../../const';

type MapProps = {
  offers: Offers,
}

function Map({offers}: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef});

  const defaultCustomIcon = new Icon({
    iconUrl: DEFAULT_CUSTOM_ICON,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;

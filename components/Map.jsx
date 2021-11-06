import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ';

const Map = ({ pickup, dropOf }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [90.4335651, 23.7291223], //[lng, lat]
      zoom: 12,
    });

    if (pickup) {
      addToMap(map, pickup);
    }

    if (dropOf) {
      addToMap(map, dropOf);
    }

    if (pickup && dropOf) {
      map.fitBounds([dropOf, pickup], {
        padding: 80,
      });
    }
  }, [pickup, dropOf]);

  const addToMap = (map, coordinate) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinate).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
bg-gray-500 
flex-1
h-1/2
`;

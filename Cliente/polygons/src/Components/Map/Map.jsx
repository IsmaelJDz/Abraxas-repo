import React, { useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import axios from 'axios';
import Menu from '../Menu';

import './Map.css';

const Mapa = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://gist.githubusercontent.com/angellagunas/9ec0c2f02e960cd598b1ff3edc64a588/raw/63d6e8fc32964d843f32369f17c65869f74b8b3e/cdmx.geojson`
      );
      //console.log(result.data.features[0].geometry.coordinates);
      setState(result.data.features[0].geometry.coordinates);
    };

    fetchData();
  }, []);

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaXNtYWVsamR6NyIsImEiOiJja2Jtdjg3bG4xbXFiMnhxaTVuazlqajk5In0.kdZZsH6POuos7P2yF0HqoQ'
  });

  return (
    <>
      <div className="Mapa-container">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '80vw'
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}
          >
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </Map>
        <Menu />
      </div>
    </>
  );
};

export default Mapa;

import React, { useContext, useEffect } from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

import './Map.scss'

import PolygonContext from '../../context/polygonContext'
import Menu from '../Menu'

const Mapa = () => {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiaXNtYWVsamR6NyIsImEiOiJja2Jtdjg3bG4xbXFiMnhxaTVuazlqajk5In0.kdZZsH6POuos7P2yF0HqoQ'
  })

  const polygonPaint = {
    'fill-color': '#6F788A',
    'fill-opacity': 0.7
  }

  const PolygonsContext = useContext(PolygonContext)
  const { traerCoordenadas, coordinates } = PolygonsContext

  const defaultState = 'GDL'

  useEffect(() => {
    traerCoordenadas(defaultState)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='Mapa-container'>
        <Map
          // eslint-disable-next-line
          style='mapbox://styles/mapbox/streets-v9'
          center={[-101.9846394837815, 20.45716997382206]}
          zoom={[7]}
          containerStyle={{
            height: '98vh',
            width: '80vw'
          }}
        >
          <Layer type='fill' paint={polygonPaint}>
            <Feature coordinates={coordinates} />
          </Layer>
          <ZoomControl zoomDiff={1} className='map' />
        </Map>
        <Menu />
      </div>
    </>
  )
}

export default Mapa

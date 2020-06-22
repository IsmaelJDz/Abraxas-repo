import React from 'react'
import Mapa from './Components/Map/Map'
import PolygonState from './context/polygonState'
import './Mapa.scss'

function App() {
  return (
    <div className='App'>
      <PolygonState>
        <Mapa />
      </PolygonState>
    </div>
  )
}

export default App

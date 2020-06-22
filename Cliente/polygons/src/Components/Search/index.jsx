import React, { useContext } from 'react'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Icon from '@material-ui/core/Icon'
import CloseIcon from '@material-ui/icons/Close'

import './Search.scss'
import Logo from '../../images/Logo.png'

/**
 * Context API Polygon
 */
import PolygonContext from '../../context/polygonContext'

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Radio color='default' {...props} />)

const Search = props => {
  const PolygonsContext = useContext(PolygonContext)
  const { traerCoordenadas, estado } = PolygonsContext

  const handleChange = event => {
    const estadoInput = event.target.value
    if (estado !== estadoInput) {
      traerCoordenadas(estadoInput)
    }
  }

  const handleClick = () => {
    props.data()
  }

  return (
    <div className='Search-container'>
      <div className='Search'>
        <img className='Search-Logo' src={Logo} alt='logo' width='200' />
        <div className='Search-title'>
          <p>Selectores</p>
        </div>
        <div className='Search-Group'>
          <RadioGroup aria-label='gender' name='city' onChange={handleChange}>
            <FormControlLabel className='first-child' control={<BlueRadio value='CDMX' />} label='Sector 1' />
            <FormControlLabel className='last-child' control={<BlueRadio value='GDL' />} label='Sector 2' />
          </RadioGroup>
        </div>
        <button className='Search-btn' onClick={handleClick}>
          <Icon>
            <CloseIcon />
            <p>Cerrar</p>
          </Icon>
        </button>
      </div>
    </div>
  )
}

export default Search

import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import './Search.scss'
import Logo from '../../images/Logo.png'

import PolygonContext from '../../context/polygonContext'
import useFetchData from '../../hook/useFetchData'

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})(props => <Radio color='default' {...props} />)

const Search = props => {
  const handleChange = event => {
    const estado = event.target.value
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
            <FormControlLabel className='first-child' control={<BlueRadio value='CDMX' id='cdmx' />} label='Sector 1' />
            <FormControlLabel className='last-child' control={<BlueRadio value='GDL' id='gld' />} label='Sector 2' />
          </RadioGroup>
        </div>
        <button className='Search-btn' onClick={handleClick}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default Search

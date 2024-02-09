import { DialogContent, TextField } from '@mui/material'
import React from 'react'
import { DialogFromProps } from './types'

const CarDialogContent = ({car,handleChange}:DialogFromProps) => {
  return (
    <DialogContent>
        <TextField variant='filled' placeholder='Make' value={car.make} name='make' onChange={handleChange} /> <br />
        <TextField variant='filled' placeholder='Model' value={car.model} name='model' onChange={handleChange}/> <br />
        <TextField variant='filled' placeholder='Year' value={car.year} name='year' onChange={handleChange}/> <br />
        <TextField variant='filled' placeholder='Color' value={car.color} name='color' onChange={handleChange}/> <br />
        <TextField variant='filled' placeholder='Registration Number' value={car.registerNumber} name='registerNumber' onChange={handleChange}/> <br />
        <TextField variant='filled' placeholder='Price' value={car.price} name='price' onChange={handleChange}/> <br />
    </DialogContent>
  )
}

export default CarDialogContent
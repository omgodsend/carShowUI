import { ChangeEvent, useState } from "react"
import { Car, CarEntry, CarResponse } from "./types"
import { Button } from "@mui/base"
import { Dialog, DialogActions, DialogTitle } from "@mui/material"
import CarDialogContent from "./CarDialogContent"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCar } from "../carapi"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

type FormProps ={
  cardata: CarResponse
}

const EditCar = ({cardata}:FormProps) => {

  const[car,setcar] = useState<Car>({
    id: 0,
    make:'',
    model:'',
    color:'',
    registerNumber:'',
    year:0,
    price :0
  })
  const [open,setOpen] = useState(false)

   
  const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setcar({...car,[event.target.name]:event.target.value})
  }

  const handleClose =() =>{
    setOpen(false)
  }

  const handleOpen =()=>{
    setcar({
      id:0,
      make:cardata.make,
      model:cardata.model,
      color:cardata.color,
      registerNumber:cardata.registerNumber,
      year:cardata.year,
      price:cardata.price
    })
    setOpen(true)
  }

  const queryClient = useQueryClient();

  const {mutate} = useMutation(updateCar,{
    onSuccess :()=>{
      queryClient.invalidateQueries(['cars']);
    },
    onError :(err) =>{
      console.error(err)
    }
  })

  const handleSave =()=>{
    const url = cardata.id;
    const carEntry :CarEntry ={car,url}
    mutate(carEntry)
    setcar(
      {
        id: 0,
        make:'',
        model:'',
        color:'',
        registerNumber:'',
        year:0,
        price :0
      }
    )
    setOpen(false)
  }

  return (
    <>
    <Button onClick={handleOpen} color="primary"><ModeEditIcon color="primary" /></Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle><ModeEditIcon color="primary" /></DialogTitle>
     <CarDialogContent car={car} handleChange={handleChange} />

     <DialogActions>
    <Button color="error"  onClick={handleClose}> Cancel<CancelIcon color="error" /> </Button>
    <Button color="primary"  onClick={handleSave}> Save<SaveIcon color="primary" /></Button>
    </DialogActions>

   

    </Dialog>

    </>
  )
}

export default EditCar
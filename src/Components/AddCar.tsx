import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import { ChangeEvent, useState } from "react"
import CarDialogContent from "./CarDialogContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../carapi";
import { Car } from "./types";
import AddBoxIcon from '@mui/icons-material/AddBox';


const AddCar = () => {
  const[car,setCar] = useState<Car>({
    id: 0,
    make:'',
    model:'',
    color:'',
    registerNumber:'',
    year:0,
    price :0
  })
  const[open,setOpen] =useState(false);
const queryClient = useQueryClient();

  const {mutate} = useMutation(addCar,{
    onSuccess :()=>{
      queryClient.invalidateQueries(['cars']);
    },
    onError :(err) =>{
      console.error(err)
    }
  })

  const handleOpen =()=>{
    setOpen(true)
  }

  const handleClose =()=>{
    setOpen(false)
  }
  const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setCar({...car,[event.target.name]:event.target.value})
  }

  const handleSave =()=>{
    mutate(car)
    setCar({
      id: 0,
      make:'',
      model:'',
      color:'',
      registerNumber:'',
      year:0,
      price :0
    })
    setOpen(false)
  }

  return (
 <>
 <Dialog open={open} onClose={handleClose}>
    <DialogTitle> New Car</DialogTitle>
    <CarDialogContent car={car} handleChange={handleChange} />
    <DialogActions>
      <Button color="error" variant="contained" onClick={handleClose}>Cancel</Button>
      <Button color="primary" variant="contained" onClick={handleSave}>Save</Button>
      
    </DialogActions>
 </Dialog>

<Box  
display= 'flex'
flexDirection='column'
alignItems='center'
justifyContent='center'
padding='20px'
>
<Button variant="contained" onClick={handleOpen}> Add Car <AddBoxIcon/></Button>

</Box>
 </>
  )
}

export default AddCar
// import { Button, Stack, TextField } from "@mui/material"
// import { ChangeEvent, useState } from "react"
// import { User } from "./types"
// import axios from "axios"
// import CarList from "./CarList"


// const Login = () => {

//     const [user,setUser]= useState<User>({
//         username:'',
//         password:''
//     })

//     const [isAuthenticated, setAuth] = useState(true);

//     const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
//         setUser({...user,[event.target.name] :event.target.value})
//     }

//     const handleLogin = async ()=> {
//         setAuth(true)
//         axios.post("http://localhost:8080/login",user,{
//             headers: {'Content-Type':'application/json'}
//         })
//         .then (response => {
//             const jwtToken = response.headers.authorization;
//             console.log(jwtToken)

//             if(jwtToken != null){
//                 sessionStorage.setItem('jwt',jwtToken)
//                 setAuth(true)
//             }
//         }) 
//         .catch(err => console.error(err))
//     }

    
//     console.log("isAuthenticated:", isAuthenticated);
//     if(isAuthenticated){
//         return <CarList />
//     } else
//   return (

//     <Stack spacing={2} alignItems="center" mt={2}>
//         <TextField 
//         name="username"
//         label= "Username"
//         onChange={handleChange}
//         />
//         <TextField 
//         name="password"
//         label= "Password"
//         type="Password"
//         onChange={handleChange}
//         />
//         <Button variant="outlined" color="primary" onClick={handleLogin}>Login</Button>
//     </Stack>
//   )
// }

// export default Login
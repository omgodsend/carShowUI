import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import CarList from "./CarList";

// Assuming User is defined as:
// interface User {
//   username: string;
//   password: string;
// }

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [isAuthenticated, setAuth] = useState(false);
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:8080/login', {
            username: user.username,
            password: user.password,
          }, {
            headers: { 'Content-Type': 'application/json' },
          });
      
          // Assuming the token is in the Authorization header
          const jwtToken = response.headers['authorization'];
      
          if (jwtToken) {
            // Store the token in sessionStorage
            sessionStorage.setItem('jwt', jwtToken);
            setAuth(true);
          } else {
            console.error('Token not found in response');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      };
      
      
  
    if (isAuthenticated) {
      return <CarList />;
    } else {
      return (
        <Stack spacing={2} alignItems="center" mt={2}>
          <TextField
            name="username"
            label="Username"
            value={user.username}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button variant="outlined" color="primary" onClick={handleLogin}>Login</Button>
        </Stack>
      );
    }
  };
  
  export default Login;
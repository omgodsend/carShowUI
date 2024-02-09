
import { ThemeProvider, Container, AppBar, Toolbar, Typography } from '@mui/material';
import theme from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login2 from './Components/Login2';

export const queryClient = new QueryClient()



const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Container maxWidth="lg" /* style={{ backgroundColor: theme.palette.background.default, height: '100vh' }} */>
   
    <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" style={{ textAlign: 'center', width: '100%' }}>
              Car Show 🚗
            </Typography>
          </Toolbar>
        </AppBar>
        <QueryClientProvider client={queryClient}>
      <Login2 />
        </QueryClientProvider>

      </Container>
    // </ThemeProvider>
  );
  };

export default App;

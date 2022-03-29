import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDaterFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';

import ThemeProvider from './theme/ThemeProvider'; 

const App = () => {
  const content = useRoutes(routes); 
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDaterFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;

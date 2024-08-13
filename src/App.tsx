import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import Layout from './hoc/Layout/Layout';
import IphoneCaseCreator from './containers/IphoneCaseCreator/IphoneCaseCreator';
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';
import { useIsAuthenticated } from 'hooks/use-is-authenticated';
import Orders from 'containers/Orders/Orders';
import Checkout from 'containers/Checkout/Checkout';
import ContactData from 'containers/Checkout/ContactData/ContactData';
const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const [mode, setMode] = useState("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: mode === "dark" ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const routes = isAuthenticated ?
      <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/contact-data' element={<ContactData />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<IphoneCaseCreator />} />
      </Routes>
  : <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<IphoneCaseCreator />} />
     </Routes>


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" sx={{ mt: 10 }} color="primary" onClick={toggleTheme}>
        Toggle to {mode === "light" ? "Dark" : "Light"} Theme
      </Button>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

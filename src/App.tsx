import { RouterProvider } from "react-router-dom"
import router from "./router/routers"
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu,sans-serif',

  },

});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App

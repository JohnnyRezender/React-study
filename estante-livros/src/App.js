import Home  from './pages/home';
import Busca from './pages/busca';
import {Box, Container, Typography} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {BooksProvider} from "./provider/BooksProvider"
import BarraNavegacao from "./components/BarraNavegacao";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import "typeface-rubik"

/**
 * Estilos do componente
 */
 const useStyles = makeStyles({
  container: {
    backgroundColor: "#a8dadc",
    borderWidth: 5,
    padding: 20,
    borderRadius: 20,
  },
  box: {
    color        : "#457b9d",
    backgroundColor: "white",
    borderRadius : 20,
    width        : "auto",
    marginTop    : 2,
    padding      : 16,
    display      : "flex",
  }
});

function App()
{
  const classes = useStyles();
  const theme   = createMuiTheme({
    typography: {
      fontFamily: [
        'Rubik',
        'serif',
      ].join(','),
  },});

  return (
    <ThemeProvider theme={theme}>
      <BooksProvider>
        <Container className={classes.container} component = "article" maxWidth="lg">
          <Router>
            <Box className={classes.box}>
              <div style={{display: "flex"}}>
                <BarraNavegacao/>
              </div>
              <div>
                <Typography align ="left" component="h1" variant="h3">
                  <b>Minhas leituras</b>
                </Typography>
              </div>
            </Box>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/busca">
                <Busca/>
              </Route>
            </Switch>
          </Router>

        </Container>

      </BooksProvider>
    </ThemeProvider>

  );
}

export default App;

import React, {useContext} from 'react'
import {Box, Divider, Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import CardLivro from '../CardLivro';
import {BooksContext} from "../../provider/BooksProvider"
import { makeStyles } from "@material-ui/core/styles";

/**
 * Estilos da estante de livros
 */
const useStyles = makeStyles((theme) => ({
  box: {
    width     : "auto",
    marginTop : 20,
    minHeight : 100,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  typography: {
    color: '#457b9d',
    padding: 10
  },
  Grid : {
    padding: 20
  }
}));

/**
 * Renderiza a estante de livros
 *
 * @returns EstanteLivros
 */
function EstanteLivros()
{

  const classes = useStyles();

  const [
    currentlyReading,
    setCurrentlyReading,
    wantToRead,
    setWantToRead,
    read,
    setRead
  ] = useContext(BooksContext);

  return (
    <>
      <Box className={classes.box}>
        <Typography className={classes.typography} component="h1" variant="h6">
          <b>Lendo</b>
          <Divider/>
        </Typography>
          <Grid className={classes.Grid} container spacing={3}>
            {currentlyReading.map((result, index) => {
              return (
                <Grid key={index} item >
                  <CardLivro livro={result} key={index} index={index}/>
                </Grid>
              );
            })}
          </Grid>
      </Box>

      <Box className={classes.box}>
        <Typography className={classes.typography} component="h1" variant="h6">
          <b>Quero ler</b>
          <Divider/>

        </Typography>
        <Grid className={classes.Grid} container spacing={3}>
          {wantToRead.map((result, index) => {
            return (
              <Grid key={index} item >
                <CardLivro livro={result} key={index} index={index}/>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box className={classes.box}>
        <Typography className={classes.typography} component="h1" variant="h6">
          <b>Lidos</b>
          <Divider/>
        </Typography>
        <Grid className={classes.Grid} container spacing={3}>
          {read.map((result, index) => {
              return (
                <Grid key={index} item >
                  <CardLivro livro={result} key={index} index={index}/>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}

export default EstanteLivros;
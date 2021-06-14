import React, {useEffect, useState } from "react";
import {Box, Grid} from "@material-ui/core";
import BuscaInput from "../components/BuscarLivro"
import { makeStyles } from "@material-ui/core/styles";
import CardLivro from "../components/CardLivro";
import {search} from "../apis/BooksAPI"

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
  }
}));

/**
 * Função responsável por imprimir os cards retornados na busca
 *
 * @param {*} book
 */
function ImprimirCard({books})
{
  const classes = useStyles();

  if (books.error) {
    return (<h1>Nenhum livro encontrado</h1>);
  }

  return (
    <Box className={classes.box} p={2}>
      <Grid style={{marginTop:10}} container spacing={3}>
        {books.map((book, index) => {
          return (
            <Grid key={index} item >
              <CardLivro livro={book} key={index} index={index}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

function Busca()
{
  const [busca, setBusca]               = useState("");
  const [bookSearched, setBookSearched] = useState([]);

  useEffect(() => {
    if (busca) {
      search(busca).then(setBookSearched)
    }

  }, [busca])

  return (
    <>
        <BuscaInput value={busca} onInputChange={setBusca}></BuscaInput>
        <ImprimirCard books={bookSearched}/>
    </>
    )
}

export default Busca;
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import {BooksContext} from "../provider/BooksProvider"

import Dialog from "../components/dialog/dialog"

/**
 * Estilos do componente
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    display: 'flex',
    flexFlow: "column",
    alignItems: "center",
    backgroundColor: '#a8dadc',
  },
  media: {
    height: "normal",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));


export default function CardLivro({livro, index})
{
  const classes                           = useStyles();
  const options                           = ["Lendo", "Quero ler", "Lidos"];
  const [open, setOpen]                   = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);
  const [shelfOrigin, setShelfOrigin]     = useState();

  const [
    currentlyReading,
    setCurrentlyReading,
    wantToRead,
    setWantToRead,
    read,
    setRead
  ] = useContext(BooksContext);

  /**
   * Ao abrir o dialog, seta a shelf de origem e o valor padrão
   */
  const handleClickOpen = () => {
    const shelfOptions = {
      "currentlyReading" : '0',
      "wantToRead": '1',
      "read": '2',
    }

    setOpen(true);

    if (livro.shelf) {
      setShelfOrigin(livro.shelf);
      setSelectedValue(shelfOptions[livro.shelf]);
    }
  };

  /**
   * Remove o livro do seu shelf de origim
   */
  const removerOrigem = () => {
    const shelfs = {
      "currentlyReading": currentlyReading,
      "wantToRead": wantToRead,
      "read": read
    }

    shelfs[shelfOrigin].splice(index, 1);
  }

  /**
   * Verifica se um livro já foi inserido em alguma shelf
   *
   * @returns {bool}
   */
  const alreadyInserted = () => {
    let id = livro.id;

    if (currentlyReading.some(el => el.id === id)
        || wantToRead.some(el => el.id === id)
        || read.some(el => el.id === id)) {
          return true
    }

    return false;
  }

  /**
   * Ao clicar em uma opção do dialog, valida se o livro ja foi inserido
   * e o adiciona na shelf selecionada pelo usuário
   */
  const handleListItemClick = (value) => {

    const valueToShelf = {
      "Lendo": "currentlyReading",
      "Quero ler": "wantToRead",
      "Lidos": "read"
    };

    setOpen(false);
    setSelectedValue(value);

    if (shelfOrigin !== undefined) {
      removerOrigem();
    } else if (alreadyInserted() ) {
      alert("livro ja inserido")
      return
    }

    livro.shelf = valueToShelf[value];

    switch (value) {
      case "Lendo":
        setCurrentlyReading([...currentlyReading, livro])
        break;
      case "Quero ler":
        setWantToRead([...wantToRead, livro])
        break;
      case "Lidos":
        setRead([...read, livro]);
        break;
      default:
        break;
    }
  };

  return (
    <Card className={classes.root}>
      <img width="120" alt="" height="150" className={classes.media} src={livro.imageLinks.smallThumbnail}></img>
      <CardActions>
        <Dialog
          selectedValue   = {selectedValue}
          open            = {open}
          handleClickOpen = {handleClickOpen}
          options         = {options}
          handleClose     = {() => {setOpen(false)}}
          handleListItemClick     = {handleListItemClick}/>
      </CardActions>
    </Card>
  );
}

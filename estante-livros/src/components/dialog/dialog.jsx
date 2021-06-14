import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { blue } from "@material-ui/core/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';

/**
 * Estilos do componente
 */
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  button: {
    backgroundColor: "white",
  }
});

function SimpleDialog(props)
{
  const classes = useStyles();
  const { onClose, selectedValue, open, options, handleListItemClick } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose         = {handleClose}
      aria-labelledby = "simple-dialog-title"
      open            = {open}
    >
      <DialogTitle id="simple-dialog-title">Mover livro:</DialogTitle>
      <List>
        {options.map((option) => (
          <ListItem
            button
            onClick={() => handleListItemClick(option)}
            key={option}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ArrowRightIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const classes = useStyles();

  const {handleClickOpen, open, handleClose, handleListItemClick, selectedValue, options} = props;

  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddCircleIcon />
      </Button>
      <SimpleDialog
        selectedValue       = {selectedValue}
        open                = {open}
        onClose             = {handleClose}
        handleListItemClick = {handleListItemClick}
        options             = {options}
      />
    </div>
  );
}

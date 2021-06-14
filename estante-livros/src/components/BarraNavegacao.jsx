import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto"
  },
  link: {
    display: 'flex',
  },
  button: {
    color: '#0000008a'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));


export default function BarraNavegacao() {
  const classes       = useStyles();
  const [bar,setBar] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setBar(open)
  };

  const anchor = "left";
  return (
      <React.Fragment key={anchor}>
        <Button color="inherit" onClick={toggleDrawer(true)}><MenuIcon/></Button>
        <Drawer
          anchor  = {anchor}
          open    = {bar}
          variant="temporary"
          onClose = {toggleDrawer(false)}
        >
        <div
          className = {clsx(classes.list, {
            [classes.fullList]: false
          })}
          
          onClick   = {toggleDrawer(false)}
          onKeyDown = {toggleDrawer(false)}
        >
          <List>
              <ListItem button key={'home'}>
                <Button
                  className = {classes.button}
                  component = {Link}
                  to        = "/"
                  fullWidth
                >
                  <HomeIcon/>Home
                </Button>
              </ListItem>
              <ListItem button key={'cha'}>
                <Button
                  className = {classes.button}
                  component = {Link}
                  to        = "/busca"
                  fullWidth
                >
                  <SearchIcon/>Pesquisar
                </Button>
              </ListItem>
          </List>
        </div>
        </Drawer>
      </React.Fragment>
  );
}
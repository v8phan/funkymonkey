import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';

const styles = {
  navbar: {
    backgroundColor: "dark blue",
    title: { marginRight: 'auto' }
  },
  navbarButtons: {
    marginLeft: 'auto'
  }
};

function Navbar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
          <Container>
             <Toolbar>
                <Typography className={classes.title} variant="h6">The Funky Monkey</Typography>
                <Button className={classes.navbarButtons} color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>

            </Toolbar>
          </Container>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);

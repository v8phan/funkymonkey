import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    marginRight: 'auto',
  },
  navbar: {
    backgroundColor: 'dark blue',
  },
  navbarButtons: {
    color: 'white',
  },
};

function Navbar(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.navbar}>
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            The Funky Monkey
          </Typography>
          <Link to="/">
            <Button className={classes.navbarButtons}>Home</Button>
          </Link>
          <Link to="/about">
            <Button className={classes.navbarButtons}>About</Button>
          </Link>
          <Link to="/contact">
            <Button className={classes.navbarButtons}>Contact</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);

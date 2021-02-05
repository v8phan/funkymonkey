import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

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
  titleSmall: {
    marginRight: 'auto',
    fontSize: '14px',
  },
};

function Navbar(props) {
  const { classes, width } = props;

  return (
    <AppBar position="static" className={classes.navbar}>
      <Container>
        <Toolbar>
          <Typography
            className={width === 'xs' ? classes.titleSmall : classes.title}
            variant="h6"
          >
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

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.object.isRequired,
};
export default compose(withStyles(styles), withWidth())(Navbar);

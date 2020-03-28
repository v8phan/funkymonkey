import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';

const styles = {
  navbar: {
    backgroundColor: "red"
  },
};

function Navbar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
          <Container>
             <Toolbar>
                <Typography variant="h6">News</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
          </Container>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);

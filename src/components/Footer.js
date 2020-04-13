import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const styles = {
  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,
  },
  footerTitle: {
    color: 'red',
  },
  socialFooter: {
    background: 'none',
  },
};

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={this.props.classes.footer}>
        <div className={this.props.classes.footerTitle}>
          Footer Text/name of site
        </div>
        <div className={this.props.classes.socialFooter}>Email</div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
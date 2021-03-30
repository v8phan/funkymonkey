import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Grid, Container } from '@material-ui/core';
import Footer from './Footer';

const styles = (theme) => ({
  title: {
    color: 'default',
    margin: '50px 20px 20px 20px',
  },
  paragraph: {
    margin: '30px 20px 50px 20px',
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  email: {
    margin: '30px 20px 20px 20px',
  },
  message: {
    margin: '30px 20px 20px 20px',
  },
  submit: {
    margin: '20px 20px 20px 20px'
  },
  main: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
  },
  content: {
    flex: '1 0 auto',
    height: '100%',
  },
});

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { email, message } = this.state;
    alert(`${this.state.email} ${this.state.message}`);
    event.preventDefault();

    axios.post(`/api/email`, { email, message }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    axios.get('/api/test').then((response) => {
      console.log(response);
    });
  };

  render() {
    const { classes, content } = this.props;

    return (
      <div className={classes.content}>
      <Container >
        <Grid container spacing={6}>
          <div className={classes.main}>
            <h1 className={classes.title}>Contact Me</h1>

            <p className={classes.paragraph}>
              Email me if you want to give me a job or something.
            </p>
            <form onSubmit={this.handleSubmit}>
              <Grid item xs={12} sm={6} lg={6} className={classes.email}>
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </label>
              </Grid>
              <Grid item xs={12} sm={6} lg={6} className={classes.message}>
                <label>
                  Message:
                  <textarea
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                  ></textarea>
                </label>
              </Grid>
              <button type="submit" className={classes.submit}>Submit</button>
            </form>
          </div>
        </Grid>
      </Container>
      <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Contact);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = (theme) => ({
  title: {
    color: 'default',
    marginLeft: '50px',
  },
  paragraph: {
    marginLeft: '100px',
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
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.title}>Contact Me</h1>
        <p className={classes.paragraph}>
          Email me if you want to give me a job or something.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Message:
            <textarea
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);

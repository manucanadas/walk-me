import React from "react";
import { getDecodedToken } from 'authenticare/client'
import { connect } from "react-redux";
import { isAuthenticated, signIn } from "authenticare/client";

import { baseApiUrl as baseUrl } from "../config";
import { logIn } from "../actions/auth";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) { 
          const user = getDecodedToken()
          this.props.dispatch(logIn(user))
          //to do: add correct URL for sending user after login
          this.props.history.push("/home");

        }
        return null;
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <>
        <h4> Login </h4>
        <div className="login-div">
          <form className="form" onSubmit={this.handleClick}>
            <label className="">Username or email:</label>
            <input
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              type="text"
            ></input>
            <br />
            <label className="">Password:</label>
            <input
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              type="password"
            ></input>
            <br />
            <button className="submit-btn" type="submit">
              Log in
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default connect()(Login);

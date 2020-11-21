import React, { Component } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Form from "./Form";
import Page from "./Page";

export class Main extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    unCheck: null,
    errorUn: "",
    emailCheck: null,
    errorEmail: "",
    pwCheck: null,
    errorPw: "",
  };
  render() {
    const {
      userName,
      email,
      password,
      unCheck,
      errorUn,
      emailCheck,
      errorEmail,
      pwCheck,
      errorPw,
    } = this.state;
    const values = {
      userName,
      email,
      password,
      unCheck,
      errorUn,
      emailCheck,
      errorEmail,
      pwCheck,
      errorPw,
    };

    const validate = () => {
      if (userName === "") {
        this.setState({ unCheck: true });
        this.setState({ errorUn: "Username is Required" });
      } else {
        this.setState({ unCheck: false });
      }

      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        this.setState({ emailCheck: false });
      } else {
        this.setState({ emailCheck: true });
        this.setState({ errorEmail: "Invalid email form" });
      }

      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        this.setState({ pwCheck: false });
      } else {
        this.setState({ pwCheck: true });
        this.setState({
          errorPw:
            "Must be at least 8 characters long and include at least a number and an alphabet",
        });
      }

      if (unCheck == false && emailCheck == false && pwCheck === false) {
        return true;
      }
    };

    const handleChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        this.props.history.push("/page");
      }
    };

    return (
      <div>
        <Route path="/signup" exact>
          <Form
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Route>

        <Route path="/page">
          <Page name={values.userName} />
        </Route>

        <Redirect from="/" to="/signup" />
      </div>
    );
  }
}

export default withRouter(Main);

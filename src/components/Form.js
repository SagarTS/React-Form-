import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

export class Form extends Component {
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
    const validate = () => {
      if (this.state.userName === "") {
        this.setState({ unCheck: true });
        this.setState({ errorUn: "Username is Required" });
      } else {
        this.setState({ unCheck: false });
      }

      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.state.email
        )
      ) {
        this.setState({ emailCheck: false });
      } else {
        this.setState({ emailCheck: true });
        this.setState({ errorEmail: "Invalid email form" });
      }

      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password)) {
        this.setState({ pwCheck: false });
      } else {
        this.setState({ pwCheck: true });
        this.setState({
          errorPw:
            "Must be at least 8 characters long and include at least a number and an alphabet",
        });
      }

      if (
        this.state.unCheck == false &&
        this.state.emailCheck == false &&
        this.state.pwCheck === false
      ) {
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
      <form>
        <TextField
          name="userName"
          label="Username"
          placeholder=" Write your Username"
          variant="outlined"
          style={{ marginTop: "50px" }}
          fullWidth
          value={this.state.userName}
          onChange={handleChange("userName")}
          error={this.state.unCheck}
          {...(this.state.unCheck && { helperText: this.state.errorUn })}
        />
        <TextField
          name="email"
          label="Email"
          placeholder=" Write your Email"
          variant="outlined"
          style={{ marginTop: "50px" }}
          fullWidth
          value={this.state.email}
          onChange={handleChange("email")}
          error={this.state.emailCheck}
          {...(this.state.emailCheck && { helperText: this.state.errorEmail })}
        />
        <TextField
          name="password"
          label="Password"
          placeholder=" Write your Username"
          variant="outlined"
          style={{ marginTop: "50px" }}
          type="password"
          fullWidth
          value={this.state.password}
          onChange={handleChange("password")}
          error={this.state.pwCheck}
          {...(this.state.pwCheck && { helperText: this.state.errorPw })}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "50px" }}
          fullWidth
          type="submit"
          onClick={handleSubmit}
        >
          SignUp
        </Button>
      </form>
    );
  }
}

export default withRouter(Form);

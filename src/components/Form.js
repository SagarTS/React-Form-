import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export class Form extends Component {
  render() {
    const { values, handleChange, handleSubmit } = this.props;

    return (
      <form>
        <TextField
          name="userName"
          label="Username"
          placeholder=" Write your Username"
          variant="outlined"
          style={{ marginTop: "50px" }}
          fullWidth
          value={values.userName}
          onChange={handleChange("userName")}
          error={values.unCheck}
          {...(values.unCheck && { helperText: values.errorUn })}
        />
        <TextField
          name="email"
          label="Email"
          placeholder=" Write your Email"
          variant="outlined"
          style={{ marginTop: "50px" }}
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
          error={values.emailCheck}
          {...(values.emailCheck && { helperText: values.errorEmail })}
        />
        <TextField
          name="password"
          label="Password"
          placeholder=" Write your Username"
          variant="outlined"
          style={{ marginTop: "50px" }}
          type="password"
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          error={values.pwCheck}
          {...(values.pwCheck && { helperText: values.errorPw })}
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

export default Form;

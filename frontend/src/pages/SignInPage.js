import { Card, CardContent, Grid, TextField, CardActions, Button, Typography, Stack } from "@mui/material";
import React, { useState, useEffect } from 'react';
import oracoooolAPI from '../api/oracoooolAPI';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  // Variables & constants:

  // Hooks:
  // Used to store text field values:
  const navigate = useNavigate();
  const [textFieldValues, setTextFieldsValues] = useState({
    username: "",
    password: ""
  });
  const [allTextFieldsHaveValues, setAllTextFieldsHaveValues] = useState(false)
  const [enterButtonAlphaValue, setEnterButtonAlphaValue] = useState(0.2)
  const [textFieldHasError, setTextFieldHasError] = useState(false)

  // Triggers code when 'textFieldValues' changes:
  useEffect(() => {
    handleEnterButtonStyles()
  }, [textFieldValues]);

  // Functions:
  // Applies enabled or disabled style on the enter button (right arrow icon):
  function handleEnterButtonStyles() {
    var hasFoundEmptyTextField = false
    Object.values(textFieldValues).forEach((value) => {// for each value text field value
      if (value.length == 0) {// if field has no value
        setAllTextFieldsHaveValues(false)
        setEnterButtonAlphaValue(0.2) // apply reduced opacity:
        hasFoundEmptyTextField = true
        return // break out of function
      }
    })
    if (!hasFoundEmptyTextField) {
      setAllTextFieldsHaveValues(true) // all fields have values at this point
      // Apply enabled styling:
      setEnterButtonAlphaValue(1) // apply full opacity:
    }
  }

  // Passed into the KhobleTextField to handle input value on change:
  const handleTextChange = (event) => {
    // store the input values
    setTextFieldsValues({
      ...textFieldValues,
      [event.currentTarget.name]: event.currentTarget.value,
    })

    setTextFieldHasError(false) // remove text field error 
  }

  const attemptLogin = async () => {
    try {
      const response = await oracoooolAPI.post('/auth/login', textFieldValues);
      const data = await response.data;
      if (data) {
        navigate("/")
      }
    } catch (error) {
      // Credentials are invalid:
      console.error(error); // raise error explaining inability to connect to the endpoint
      setTextFieldHasError(true) // set text field error
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minWidth="100vw"
      minHeight="100vh"
      sx={{
        background: `url(https://t4.ftcdn.net/jpg/02/80/18/37/360_F_280183778_HU6rgOprazmRQSKdBnWWh2e9SqjY6TBD.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover'
      }}
    >
      <Card
        variant="outlined"
        sx={{ 
          maxWidth: "80%",
          width: "600px",
          borderRadius: "20px"
        }}
      >
        <CardContent
          sx={{ textAlign: "center" }}
        >
          <img src="oracool_logo_black_wheels.svg" width="150px"></img>
          <div>
            <TextField
              name="username"
              label="username"
              error={textFieldHasError}
              onChange={handleTextChange}
              sx={{
                width: "60%"
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              name="password"
              label="password"
              error={textFieldHasError}
              onChange={handleTextChange}
              type="password"
              helperText={textFieldHasError ? "Invalid Credentials" : null}
              sx={{
                "& .MuiFormHelperText-root": {
                  color: "red"
                },
                width: "60%"
              }}
            />
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Stack variant="row" spacing={2}>
            <Button
              variant="contained"
              onClick={attemptLogin}
              disabled={!allTextFieldsHaveValues}
            >
              Log In
            </Button>
            <Typography variant="caption">
              Don't have an account? {
                <a 
                  href="/signin"
                  style={{color: "#d60000"}}
                >
                  Sign Up
                </a>
              }
            </Typography>
          </Stack>
        </CardActions>
      </Card>
    </Grid >
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const currencies = [
    {
      value: '',
      label: '',
    },
    {
      value: '',
      label: '',
    },
    {
      value: '',
      label: '',
    },
    {
      value: '',
      label: '',
    },
  ];


export default function MeterParameters() {
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    return (
      <><Paper elevation={1}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          alignContent='center'
        >
          <div>
            <TextField
              id="outlined-select-currency"
              label="Discom"
              value="TSSPDCL"
            >

              ))
            </TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Sub Division"
              value={currency}
              variant="filled"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency-native"
              select
              label="DTR"
              value={currency}

              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency-native"
              select
              label="Region"
              value={currency}
              onChange={handleChange}
              variant="filled"
              SelectProps={{
                native: true,
              }}

            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency-native"
              select
              label="Sections"
              value={currency}

              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency-native"
              select
              label="METER"
              value={currency}
              onChange={handleChange}
              variant="filled"
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency-native"
              select
              label="Circles"
              value={currency}

              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency-native"
              select
              label="Sub-Stations"
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="filled"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency-native"
              select
              label="Division"
              value={currency}

              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Feeder"
              value={currency}
              onChange={handleChange}
              variant="filled"
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>

        </Box>
      </Paper><Grid container justify="space-between" alignItems="center" spacing={3}>
                    <Grid item xs={12} md={8} sm={4}><Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="subtitle" gutterBottom >If you already know the meter number, please enter here :</Typography>
      <TextField  variant="standard"  />
    </Box></Grid></Grid></>
    
      
      
    );
  }
  
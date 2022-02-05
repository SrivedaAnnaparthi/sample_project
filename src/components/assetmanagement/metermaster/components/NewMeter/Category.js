import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import IconButton from '@mui/material/IconButton';
import { Stack, Grid, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './useStyle';


function Category() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), categoryCode: '', categoryName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);       
    };

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name]= event.target.value;
      setInputFields(values)
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), categoryCode: '', categoryName: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    const clearField = () => {
        setInputFields(" ")
    }
    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <form className={classes.root} onSubmit={handleSubmit}>
                {inputFields.map((inputField,index) => (
                    <div key={index}>
                        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                            <RemoveCircleIcon />
                        </IconButton>
                        <TextField
                            name="categoryCode"
                            label="Category Code"
                            variant="standard"
                            value={inputField.categoryCode}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField
                            name="categoryName"
                            label="Category Name"
                            variant="standard"
                            value={inputField.categoryName}
                            onChange={event => handleChangeInput(index, event)}
                            
                        />

                        <IconButton
                            onClick={handleAddFields}
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                ))}
                <br />
                <Grid container direction="column" alignItems="center" justify="center">
                    <Stack spacing={3} direction="row">
                        <Button style={{maxWidth: '400px', maxHeight: '30px', minWidth: '100px', minHeight: '30px'}} variant="outlined" color="error" onClick={clearField}>
                            Clear
                        </Button>
                        <Button style={{maxWidth: '400px', maxHeight: '200px', minWidth: '100px', minHeight: '30px'}} variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Stack>
                </Grid>
            </form>
        </Grid>
    );
}

export default Category;
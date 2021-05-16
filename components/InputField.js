import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(6),
            marginLeft: theme.spacing(4),
          
            width: 650,
            color: 'red'
        },
        multilineColor:{
            color:'#111'
        }
  
    },
}))

const InputField = () => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <TextField
                label="Email Address:"
                id="outlined-size-normal"
                defaultValue=""
                variant="outlined"
               
                >
            </TextField>
        </form>
    )
}

export default InputField;
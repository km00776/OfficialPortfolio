import React, { useLayoutEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputField from './InputField';

const ContactForm = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(2),
            marginTop: theme.spacing(5),
            width: theme.spacing(90),
            height: theme.spacing(100),
          },
          
        },

      }));
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Paper style = {{backgroundColor: '#1322'}} elevation = {3}>
            <InputField />
            <InputField />
            <InputField />
        </Paper>
    </div>
    )

    }

const ContactSection = () =>  {
    return(
        <section className="ContactSection" id="contact">
            <div className="overlay"></div>
            <div className="title">
                <h2 className="project">Contact</h2>
                <ContactForm />
            </div>
            <div className="image">
                <img src= "./ufo.svg"></img>
            </div>
        </section>
    )
}
          

export default ContactSection;
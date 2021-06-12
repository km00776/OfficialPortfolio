import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import getResolution from '../utils/ScreenSize';
import Mbutton from './Button';
import { useState } from 'react';
import CustomizedSnackbars from './SnackBar';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.only('lg')]: {
            width: 400,
            flexGrow: 0,
            marginRight: 8,
            marginLeft: 8,
            marginTop: 20,
        },
        [theme.breakpoints.only('md')]: {
            width: 400,
            flexGrow: 0,
            marginRight: 8,
            marginLeft: 8,      
            marginTop: 20,
        },
        [theme.breakpoints.only('xl')]: {
            width: 400,
            flexGrow: 0,
            marginRight: 20,
            marginLeft: 20,
            marginTop: 20,
            justifyContent: 'center',
            display:'grid'
        },
        [theme.breakpoints.down('sm')]: {
            width: 350,
            flexGrow: 0,
            marginRight: 8,
            marginLeft: 8,
            marginTop: 20,
            display: 'grid'
        },
     
   


    },

}));




const ProjectContainer = (props) => {
    const classes = useStyles();
    const[open, setOpen] = useState(false);

     const handleClick = () => {
        setOpen(true);
     };

     const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                  return;
            }
        setOpen (false);
    };


    
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Project Image"
                        height="400"
                        width="220"
                        image={props.image}
                        title="Project Image"
                    />
                    <CardContent>
                        <h1>{props.title ? props.title : "Test" }</h1>
                        {/* <Typography gutterBottom variant="h5" component="h2">
                            Platform
                        </Typography> */}
                        <p>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                         </p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Mbutton onClick={handleClick} text = "Documentation"/>
                    <CustomizedSnackbars />
                </CardActions>
            </Card>
        </>

    );
}

/**
 * Image
 * text
 */

export default ProjectContainer;
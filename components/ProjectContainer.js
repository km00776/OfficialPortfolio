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




const ProjectContainer = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Project Image"
                        height="440"
                        image="./testimg.jpg"
                        title="Project Image"
                    />
                    <CardContent>
                        <h1>Platform</h1>
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
                    <Button onClick={getResolution} size="medium" style={{background: 'linear-gradient(45deg, #cc2e5d 30%, royalblue 90%)', color:'whitesmoke'}}>
                        Documentation
                    </Button>
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
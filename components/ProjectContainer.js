import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        flexGrow: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
   


    },

}));




const ProjectContainer = () => {
    const classes = useStyles();
    return (
        <>
            <Card style= {{backgroundColor:"whitesmoke"}}className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Project Image"
                        height="440"
                        width="300"
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
                    <Button size="small" color="primary">
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
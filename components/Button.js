import Button from '@material-ui/core/Button';


const Mbutton = (props) => {
    return (<Button  onClick ={props.onClick} size="medium" style={{background: 'linear-gradient(45deg, #cc2e5d 30%, royalblue 90%)', color:'whitesmoke'}}>
                        {props.text}
    </Button>);
}

export default Mbutton;
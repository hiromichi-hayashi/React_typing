import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((props) => ({
    Font: {
        height: "100%",
        fontFamily: "Times New Roman",
        fontSize: "143px",
        display: "inline-block",
        color: (props) => props.color
    },
}));

const Text = (props) => {
    const classes = useStyles(props);

    return (
        <Typography className={classes.Font}>
            {props.text}
        </Typography>
    );
};

export default Text;
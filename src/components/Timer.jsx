import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { TimeFormatting } from '../Element/TimeFormatting'

const useStyles = makeStyles({
    text: {
        fontSize: "28px",
        fontFamily: "Times New Roman",
    },
});
const Timer = (props) => {
    const classes = useStyles();

    return (

        <Box className={classes.text} component="span" m={1}>
            <p>TIME {TimeFormatting(props.timeOfTyping)}</p>
        </Box>


    )
}


export default Timer
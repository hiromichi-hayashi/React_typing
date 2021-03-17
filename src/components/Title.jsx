import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    logo: {
        height: '10px',
        margin: '7px',
        width: '60%',
        fontSize: '40px',
        fontFamily: "Times New Roman",

    }
})


const Title = () => {
    const classes = useStyles();

    return (
        <Box className={classes.logo} component="span" m={1}>
            タイピングゲーム
        </Box>

    )
}

export default Title
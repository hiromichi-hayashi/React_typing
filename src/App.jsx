import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextBox from './components/TextBox';
import bgimg1 from './img/bgimg1.png';


const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bgimg1})`,

    },
    paper: {
        height: '120%',
        width: "100%",

        textAlign: 'center',
    },
});

const App = () => {
    const classes = useStyles();

    return (
        <React.Fragment >
            <div className={classes.root}>

                <CssBaseline />
                <Container className={classes.paper}>
                    <TextBox />
                </Container>
            </div>

        </React.Fragment>


    );
}

export default App
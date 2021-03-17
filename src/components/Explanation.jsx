import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    content: {
        fontSize: "16px",
        fontFamily: "system-ui",
    },
});

const Explantion = () => {
    const classes = useStyles();
    return (

        <Typography className={classes.content}>
            <p>出題される英単語をミス無くタイピングできるか挑戦しよう！</p>
            <p> 制限時間は１分です</p>

            <p>※画面をクリックしてからキーボード入力してください</p>
        </Typography >

    )
}

export default Explantion;
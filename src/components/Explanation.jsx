import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    content: {
        fontSize: "16px",
        fontFamily: "system-ui",
        lineHeight: '1',
    },
});

const Explantion = () => {
    const classes = useStyles();
    return (

        <div className={classes.content}>
            <p>出題される英単語をミス無くタイピングできるか挑戦しよう！</p>
            <p> 制限時間は１分です</p>
            <p>いずれかのキーを入力して開始</p>
        </div>

    )
}

export default Explantion;
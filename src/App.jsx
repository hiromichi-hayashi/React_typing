import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
    text: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        height: '45px',
        fontSize: "25px",
    },
    inputBox: {
        padding: "30px",
        marginBottom: "30px",
    },

    greenFont: {
        justifyContent: 'space-between',
        margin: "0 30px",
        height: '200px',
        textAlign: 'center',
        color: "#689f38",
        display: "inline-box",
        fontFamily: "Times New Roman",
        fontSize: "50px",
    },
    redFont: {
        justifyContent: 'space-between',
        margin: "0 30px",
        height: '200px',
        textAlign: 'center',
        color: "red",
        display: "inline-box",
        fontFamily: "Times New Roman",
        fontSize: "50px",
    },
    greyFont: {
        justifyContent: 'space-between',
        margin: "0 30px",
        height: '200px',
        textAlign: 'center',
        color: "grey",
        display: "inline-box",
        fontFamily: "Times New Roman",
        fontSize: "50px",
    },


}));

const App = () => {
    const classes = useStyles();
    const { dictionary } = require("./dictionary");
    const [question, setQuestion] = useState("");//問題文
    const [nextQuestion, setNextQuestion] = useState(false);//trueの場合に次の問題
    const [corectType, setCorectType] = useState(0);//正解カウント
    const [isMisstype, setIsMisstype] = useState(false);//trueでミスタイピングしたときの判定
    const [missCount, setMissCount] = useState(0);//ミスカウント
    const [finished, setFinished] = useState(false);//trueで終了
    const [started, setStarted] = useState(false);//trueで開始
    const [modalOpen, setModalOpen] = useState(false);//モーダルを開く
    const [refresh, setRefresh] = useState("");//要素の初期化

    //問題の受け取り
    const QuestionText = () => {
        let word = "";
        word = dictionary[randomcount(2000)].letter;
        let text = word.slice(0);
        console.log(word);
        setQuestion(text);
    };

    //ランダム関数
    const randomcount = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //問題の呼び出し
    useEffect(() => {
        if (!nextQuestion) {
            QuestionText()
        }

        return setNextQuestion(false);

    }, [nextQuestion]);

    //keyイベントを取得して入力された文字を判定する
    const handleKeyDown = (e) => {
        if (e.key === question[corectType]) {
            setIsMisstype(false);
            setCorectType(corectType + 1);
            console.log(corectType)
            console.log(e.key)
            console.log(question.length)
            if (corectType + 1 === question.length) {
                setFinished(true);
                setNextQuestion(true);
                console.log(nextQuestion)
            }
        } else {
            setIsMisstype(true);
            setMissCount(missCount + 1);
            console.log(missCount)
        }
    };
    //終了後モーダル表示

    return (
        <div
            className={classes.inputBox}
            onKeyDown={(e) => { handleKeyDown(e) }}
            tabIndex={0}
        >
            <Typography className={classes.greenFont}>
                {question.slice(0, corectType)}
            </Typography>
            {isMisstype ? (
                <Typography className={classes.redFont}>
                    {question.slice(corectType)}
                </Typography>
            ) : (
                <Typography className={classes.greyFont}>
                    {question.slice(corectType, question.length)}
                </Typography>

            )}


        </div>
    );
};

export default App
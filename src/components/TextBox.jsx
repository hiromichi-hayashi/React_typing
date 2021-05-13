import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

import Text from "./Text";
import AlertDialog from "./AlertDialog";
import Timer from './Timer';
import Explantion from './Explanation';
import Title from './Title';
import dictionary from '../dictionary';


const useStyles = makeStyles({
    textFont: {
        margin: "8px auto",
        fontSize: "18px",
        fontFamily: "Times New Roman",
        width: "80%",
    },
    Box: {
        textAlign: "center",
        padding: "15px",
        height: "50px",
    },

});



const TextBox = () => {
    const classes = useStyles();
    const [countAnswer, setCountAnswer] = useState(0)//回答数
    const [question, setQuestion] = useState("");//問題文
    const [explantion, setExplantion] = useState("");//説明文
    const [nextQuestion, setNextQuestion] = useState(false);//trueの場合に次の問題
    const [typeCount, setTypeCount] = useState(0);//総タイピングカウント数
    const [corectType, setCorectType] = useState(0);//正解カウント
    const [isMisstype, setIsMisstype] = useState(false);//trueでミスタイピングしたときの判定
    const [missCount, setMissCount] = useState(0);//ミスカウント
    const [finished, setFinished] = useState(false);//trueで終了
    const [started, setStarted] = useState(false);//trueで開始
    const [modalOpen, setModalOpen] = useState(false);//モーダルを開く
    const [timeOfTyping, setTimeOfTyping] = useState(60000);
    const ref = useRef(null);

    const defaultProps = {
        m: 5,
        style: { width: '50%', height: '100px' },
    };

    //BOXにフォーカスする
    useEffect(() => {
        ref.current.focus()
    }, [])


    //タイマー機能
    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                if (timeOfTyping !== 0) {
                    setTimeOfTyping(c => c - 10);
                }
            }, 10);

            if (timeOfTyping === 0) {
                setModalOpen(true)
                setNextQuestion(false)
                setFinished(true)
            }
            return () => clearInterval(interval)
        }
    }, [started, timeOfTyping]);



    //問題の受け取り
    const QuestionText = useCallback(() => {
        let word = "";
        word = dictionary[randomcount(2000)];
        let text = word.letter.slice(0);
        setExplantion(word);
        setQuestion(text);
    }, []);

    //ランダム関数
    const randomcount = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // 問題の呼び出し
    useEffect(() => {

        QuestionText()

        return setNextQuestion(false);

    }, [nextQuestion, QuestionText]);


    //keyイベントを取得して入力された文字を判定する
    const handleKeyDown = (e) => {
        if (finished) return;
        setStarted(true);
        if (e.key === question[corectType]) {
            setIsMisstype(false);
            setCorectType(corectType + 1);
            setTypeCount(typeCount + 1)

            if (corectType + 1 === question.length) {
                //corectTypeの初期化
                setCorectType(0);
                setNextQuestion(true);
                setCountAnswer(countAnswer + 1);
            }
        } else {
            setIsMisstype(true);
            setMissCount(missCount + 1);
            setTypeCount(typeCount + 1)
        }

    };
    //modal->open or close
    const modalClose = () => {
        setModalOpen(false)
        refreshAll()
    }

    //要素の初期化
    const refreshAll = () => {
        setModalOpen(false);
        setCorectType(0);
        setTypeCount(0)
        setIsMisstype(false);
        setMissCount(0);
        setFinished(false);
        setStarted(false);
        setCountAnswer(0)
        setTimeOfTyping(60000);
    };

    return (
        <Box
            ref={ref}
            bgcolor="#fff"
            onKeyDown={(e) => { handleKeyDown(e) }}
            tabIndex={0}
        >
            <Title />
            <Explantion />
            <Text color='green' text={question.slice(0, corectType)} />
            {isMisstype ? (
                <Text color={"red"} text={question.slice(corectType)} />
            ) : (
                <Text color="gray" text={question.slice(corectType, question.length)} />
            )}

            <Box
                display="flex"
                justifyContent="center"
                color="white"
                bgcolor="palevioletred" >
                <Box  {...defaultProps}>
                    <Typography className={classes.textFont}>
                        {explantion.meaning1}
                    </Typography>
                    <Typography className={classes.textFont}>
                        {explantion.meaning2}
                    </Typography>
                    <Typography className={classes.textFont}>
                        {explantion.meaning3}
                    </Typography>
                </Box>
            </Box>
            <AlertDialog
                modalopen={modalOpen}
                modalClose={modalClose}
                typeCount={typeCount}
                missCount={missCount}
                timeOfTyping={timeOfTyping}
            />
            <Timer timeOfTyping={timeOfTyping} />
        </Box>
    );
};

export default TextBox
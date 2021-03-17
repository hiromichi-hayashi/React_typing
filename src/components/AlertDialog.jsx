import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from "@material-ui/core/styles";
import { TwitterShareButton, TwitterIcon } from "react-share";

const useStyles = makeStyles({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 'shadows(5)',
        fontFamily: "Meiryo",

    },
});

const AlertDialog = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={props.modalopen}
                onClose={props.modalClose}
                className={classes.modal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <DialogTitle id="alert-dialog-title">{"あなたのタイピング結果は..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h3>総タイピング:{props.typeCount}回</h3>
                        <h3>ミスタイピング:{props.missCount}回</h3>
                        <h3>正タイピング{props.typeCount - props.missCount}回</h3>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Twitterに結果を投稿" placement="top">
                        <TwitterShareButton
                            url="https://chatbot-demo-d5a78.web.app"
                            title={`あなたのタイピング結果\n\n総タイピング:${props.typeCount}回\nミスタイピング: ${props.missCount}回\n正タイピング${props.typeCount - props.missCount}回\n`}
                        >
                            <Button
                                color="primary"
                                size="small"
                            >
                                <TwitterIcon size={32} round />
                                シェアする
                        </Button>
                        </TwitterShareButton>
                    </Tooltip>
                    <Button onClick={props.modalClose} color="secondary" variant="contained" >
                        最初から
                        </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default AlertDialog
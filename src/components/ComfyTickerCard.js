import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActionArea, CardMedia, Grid, Hidden} from "@material-ui/core";
import img from '../assets/brand_background.jpg';
import ComfyWidget from "./ComfyWidget";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        borderColor: 'transparent',
        borderRadius: 15,
        height: 170,
        background: 'linear-gradient(to right, #1c171d 0%, #19191e 100%)',
        '&:hover': {
            background: 'linear-gradient(to left, #202025, #231e24 0%)'
        },
    },
    actionArea: {
        '&:hover $focusHighlight': {
            opacity: 0,
        },
    },
    focusHighlight: {},
    cardDetails: {
        flex: 1,
        alignItems: 'center',
        marginLeft: -16,
        borderRadius: '15px 15px 0 0',
        borderColor: 'transparent',
        justifyContent: 'center',
    },
    media: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    },
    comfy: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    }
}));

const ComfyTickerCard = () => {

    const classes = useStyles()

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea href='https://coinstats.app/coins/comfytoken/'
                            target='_blank'
                            rel='noreferrer'
                            style={{borderRadius: 15}} classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
            }}>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia className={classes.media}
                                   component="img"
                                   src={img}/>
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <ComfyWidget className={classes.comfy}/>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
};

export default ComfyTickerCard;
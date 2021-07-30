import React from "react";
import {Card, CardMedia, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import noImage from "../assets/no_image2.jpg";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        background: 'linear-gradient(to right, #1c171d 0%, #19191e 100%)',
        '&:hover': {
            background: 'linear-gradient(to left, #202025, #231e24 0%)'
        },
        borderColor: '#212328',
        borderRadius: 15,
        height: 170,
    },
    cardDetails: {
        flex: 1,
        alignItems: 'center',
        borderRadius: '15px 15px 0 0',
        justifyContent: 'center'
    },
    media: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    },
    ad: {
        border:0,
        padding:4,
        width:'100%',
        height:'100%',
        overflow:"hidden",
        allowTransparency:"true",
    }
}));


const AdCardMid = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <Hidden xsDown>
                    <CardMedia className={classes.media}
                               component="img"
                               src={noImage}/>
                </Hidden>
                <div className={classes.cardDetails}>
                    <iframe data-aa="1689567"
                            src="//acceptable.a-ads.com/1689567?size=Adaptive&background_color=transparent&text_color=f9c01c&title_color=f9c01c&title_hover_color=fff8e9&link_color=fff8e9&link_hover_color=89435a"
                            scrolling="no" className={classes.ad} title='ad-card2' />
                </div>
            </Card>
        </Grid>
    )
}

export default AdCardMid;
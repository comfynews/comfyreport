import React from "react";
import {Card, CardMedia, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import shillmoon from "../assets/SM.gif";
import smMobile from '../assets/SMmobile.gif';
import Link from "@material-ui/core/Link";

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
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionArea: {
        '&:hover $focusHighlight': {
            opacity: 0,
        },
    },
    focusHighlight: {},
    media: {
        height: "auto",
        width: '100%',
    },
    mobileMedia: {
        height: 170,
        width: '105%',
        marginLeft: -8
    }
}));


const PromoCard = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Hidden xsDown>
            <Card className={classes.card}>
                <Link href="https://shillmoon.com/" target='_blank' rel='noreferrer'>
                <CardMedia className={classes.media}
                    component="img"
                    src={shillmoon}/>
                </Link>
            </Card>
            </Hidden>
            <Hidden smUp>
                <Card className={classes.card}>
                    <Link href="https://shillmoon.com/" target='_blank' rel='noreferrer'>
                        <CardMedia className={classes.mobileMedia}
                                   component="img"
                                   src={smMobile}/>
                    </Link>
                </Card>
            </Hidden>
        </Grid>
    )
}

export default PromoCard;
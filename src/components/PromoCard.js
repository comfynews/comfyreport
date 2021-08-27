import React from "react";
import {Card, CardMedia, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import shillmoon from "../assets/SM.gif";
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
        justifyContent: 'flex-start'
    },
    actionArea: {
        '&:hover $focusHighlight': {
            opacity: 0,
        },
    },
    focusHighlight: {},
    media: {
        height: 170,
        width: '105%',
    },
}));


const PromoCard = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <Link href="https://shillmoon.com/" target='_blank' rel='noreferrer'>
                <CardMedia className={classes.media}
                    component="img"
                    src={shillmoon}/>
                </Link>
            </Card>
        </Grid>
    )
}

export default PromoCard;
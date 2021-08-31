import React from "react";
import {Card, CardMedia, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import newAd from "../assets/m7.gif";
import newAdMobile from '../assets/m7mobile.gif';
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
        height: 170,
        width: '110%',
        marginLeft: -28
    },
    mobileMedia: {
        height: 'auto',
        width: '100%',
    }
}));


const PromoCardTwo = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Hidden xsDown>
                <Card className={classes.card}>
                    <Link href="https://t.me/M7Capital" target='_blank' rel='noreferrer'>
                        <CardMedia className={classes.media}
                                   component="img"
                                   src={newAd}/>
                    </Link>
                </Card>
            </Hidden>
            <Hidden smUp>
                <Card className={classes.card}>
                    <Link href="https://t.me/M7Capital" target='_blank' rel='noreferrer'>
                        <CardMedia className={classes.mobileMedia}
                                   component="img"
                                   src={newAdMobile}/>
                    </Link>
                </Card>
            </Hidden>
        </Grid>
    )
}

export default PromoCardTwo;
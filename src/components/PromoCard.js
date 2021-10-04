import React from "react";
import {Card, CardMedia, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import stakenet from "../assets/stakenet-large.webm";
import xsn_mobile from "../assets/stakenet-mobile.webm";
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
        height: 'auto',
        width: '105%',
        marginLeft: -8
    },
    mobileMedia: {
        height: 'auto',
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
                <Link href="https://stakenet.io/" target='_blank' rel='noreferrer'>
                <CardMedia className={classes.media}
                    component="video"
                    src={stakenet}
                    autoPlay
                    loop
                    muted/>
                </Link>
            </Card>
            </Hidden>
            <Hidden smUp>
                <Card className={classes.card}>
                    <Link href="https://stakenet.io/" target='_blank' rel='noreferrer'>
                        <CardMedia className={classes.mobileMedia}
                                   component="video"
                                   src={xsn_mobile}
                                   autoPlay
                                   loop
                                   muted/>
                    </Link>
                </Card>
            </Hidden>
        </Grid>
    )
}

export default PromoCard;
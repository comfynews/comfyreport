import {
    Card,
    CardActionArea,
    Grid,
    makeStyles
} from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import comfyCast from '../assets/comfycast.jpg';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        height: 170,
        borderColor: 'transparent',
        textOverflow: 'ellipsis',
        overflow: "hidden",
        background: 'linear-gradient(to right, #1c171d 0%, #19191e 100%)',
        borderRadius: 15,
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
        margin: -5,
        alignItems: 'center',
        justifyContent: 'center',
    },
}));


const ComfyCastPlayer = ({post}) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea style={{borderRadius: 15}} classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
            }}>
                <Card className={classes.card} variant='outlined'>
                    <div className={classes.cardDetails}>
                        {/* Mobile Brave users need to enable background audio*/}
                        {/* Mobile Firefox background audio doesn't seem able to be turned on*/}
                        {/* Safari player works by default on iOS*/}
                        <ReactPlayer
                            style={{'borderRadius': '15'}}
                            url='https://www.youtube.com/watch?v=oHg5SJYRHA0'
                            playsinline={true}
                            light={comfyCast}
                            config={{
                                youtube: {
                                    playerVars: {
                                        autoplay: 1,
                                        controls: 0,
                                        start: 44,
                                        modestbranding: 1,
                                        loop: 1
                                    }
                                }
                            }}
                            width='100%'
                            height={175}
                        />
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
};

export default ComfyCastPlayer;

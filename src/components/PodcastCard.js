import {
    Card,
    CardActionArea,
    Grid,
    makeStyles
} from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        height: 170,
        borderColor: 'transparent',
        textOverflow: 'ellipsis',
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
    media: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    },
    cardDetails: {
        flex: 1,
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    podcast: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        marginTop: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));


const PodcastCard = ({post}) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea style={{borderRadius: 15}} classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
            }}>
                <Card className={classes.card} variant='outlined'>
                    <div className={classes.cardDetails}>
                       <ReactPlayer
                        url={post.link}
                        width='100%'
                        height={200}
                        />
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
};

export default PodcastCard;
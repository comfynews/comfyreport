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


const SoundCloudCard = ({post}) => {

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
                            style={{'border-radius': '15'}}
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

export default SoundCloudCard;
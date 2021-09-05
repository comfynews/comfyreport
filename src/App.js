import './App.css';
import React, {useEffect, useState} from "react";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import Header from "./components/Header";
import BaseCard from "./components/BaseCard";
import Footer from "./components/Footer";
import Parser from "rss-parser";
import ap_text from "./assets/fonts/ap_text_regular.ttf";
// import AdCardBottom from "./components/AdCardBottom";
import PodcastCard from "./components/PodcastCard";
import PromoCard from "./components/PromoCard";


const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: 'linear-gradient(to top, #080809, #0c0c0d 50%, #100c10)'
        }
    },
    typography: {
        fontFamily: 'ap_text, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [ap_text],
            },
        },
    },
});


function App() {

    const [posts, setPosts] = useState([]);
    const [trendingPost, setTrendingPost] = useState([]);
    const [currentPodcast, setCurrentPodcast] = useState(false)
    // used to control ads loading after content
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        const parser = new Parser()

        const extractPosts = (items) => {
            let posts = [];
            posts = posts.concat(items);
            return posts
        }

        const filterTweets = (items) => {
            let posts = [];
            posts = posts.concat(items);
            const length = posts.length;
            let creators = [];
            // get list of creators
            for (let i = 0; i < length; i++) {
                creators = creators.concat(posts[i].creator);
            }
            // filter out duplicate tweets
            creators = posts.filter((post, index) => {
                return creators.indexOf(post.creator) === index || post.creator.charAt(0) !== '@'
            })
            return creators;
        }

        function sortPosts(a, b) {
            return new Date(b.isoDate) - new Date(a.isoDate)
        }

        const fetchPosts = async () => {
            const newsURL = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/_pGxlWczRReksuiI4.xml'
            const feed = await parser.parseURL(newsURL)
            let newsPosts = extractPosts(feed.items)

            const tweetURL = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/_jw8DkS4aRay1YxEq.xml'
            const twitterFeed = await parser.parseURL(tweetURL)
            const tweets = filterTweets(extractPosts(twitterFeed.items))

            // used to grab new podcasts
            const podcastURL = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/1xTN7wLZlEolVxPG.xml'
            const podcastFeed = await parser.parseURL(podcastURL)
            const podcasts = extractPosts(podcastFeed.items)
            // soundcloud doesnt provide dates, so grab them from anchorFM
            const podcastDates = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/EOYrDTrXYkWdxQc4.xml'
            const feedDates = await parser.parseURL(podcastDates)
            const dates = extractPosts(feedDates.items)

            newsPosts = newsPosts.concat(tweets)
            newsPosts.sort(sortPosts)
            //set trending post
            setTrendingPost(podcasts[0])
            // if new podcast is < 3 days old, set flag to pin to top
            const datetime = new Date(Date.now());
            const podcastTimestamp = new Date(dates[0].isoDate);

            ((datetime.getTime() - podcastTimestamp.getTime()) / 86400000 < 3) ? setCurrentPodcast(true)
                : setCurrentPodcast(false)
            // add in ad-flag @ index 10
            // newsPosts.splice(10, 0, 'ad')
            // ensure even count for ComfyDude's OCD
            if (!currentPodcast) {
                newsPosts.splice(-1, 1)
            }
            setPosts(newsPosts)
            setLoaded(true)
        }

        fetchPosts().then(() => {
            return null
        })
    }, [trendingPost.isoDate, currentPodcast])


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    { loaded ? <PromoCard/> : null }
                    {/*{ loaded ? <PromoCardTwo/> : null }*/}
                    { loaded && currentPodcast ? <PodcastCard post={trendingPost}/> : null}
                    {posts.map((post, idx) => {
                        return (<BaseCard post={post} key={idx}/>)
                    })}
                    {/*{ loaded ? <AdCardBottom/> : null }*/}
                </Grid>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;


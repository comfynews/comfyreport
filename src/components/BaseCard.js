import NewsCard from "./NewsCard";
import TweetCard from "./TweetCard";
import AdCardMid from "./AdCardMid";

const BaseCard = ({post}) => {

    // console.log(post)
    // check for ad flag
    if (post === 'ad') {
        return (<AdCardMid/>)
    } else if(post.creator.charAt(0) === '@'){
        return (<TweetCard post={post}/>)
    } else {
        return (<NewsCard post={post}/>)
    }

}

export default BaseCard;

import { TweetComment} from '../typing';

const fetchTweetComments = async (tweetId:string) => {
  const res=await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getTweetComments?tweetId=${tweetId}`)
  const data= await res.json();
  const tweets:TweetComment[]=data.tweets;
  return tweets
}

export default fetchTweetComments
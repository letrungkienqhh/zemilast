
import { Tweet } from '../typing';

const fetchTweets = async () => {
  const res=await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getTweets`)
  const data= await res.json();
  const tweets:Tweet[]=data.tweets;
  return tweets
}

export default fetchTweets
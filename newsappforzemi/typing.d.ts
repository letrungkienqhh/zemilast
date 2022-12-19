export interface Post{
    _id:string,
    _createdAt:string,
    title:string,
    author:{
        name:string,
        image:string
    },
    description:string,
    mainImage:{
        asset:{
            url:string,
        },
    },
    comments:Comment[],
    slug:{
        current:string,
    },
    body:[object]
    }
export interface Comment{
    approved:boolean,
    comment:string,
    email:string,
    name:string,
    post:{
        _ref:string,
        _type:string,
    },
    _createdAt:string,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:string,
}

export interface TweetBody{
    text:string,
    userName:string,
    profileImage:string,
    image?:string,
}
export interface Tweet extends TweetBody{
    _id:string,
    _createdAt:string,
    _rev:string,
    _type:'tweet',
    blockTweet:boolean,
}
export interface TweetCommentBody{
    comment:string,
    userName:string,
    tweetId:string,
    profileImage:string,

}
export interface TweetComment extends TweetCommentBody{
    _createdAt:string,
    _id:string,
    _rev:string,
    _type:'comment',
    _updatedAt:string,
    tweet:{
        _ref:string,
        _type:'reference',
    }
}
export default {
    name: 'tweetcomment',
    title: 'TweetComment',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'UseName',
        type: 'string',
      },
      {
        name:'comment',
        title:"Comment",
        type:"string",
  
      },
      {
        name:'profileImg',
        title:'Profile Image',
        type:'string',

      },
      {
        name:'tweet',
        title:'Tweet',
        description:'Reference to ',
        type:"reference",
        to:{
            type:'tweet'
        }
      }
    ]
      
  }
  
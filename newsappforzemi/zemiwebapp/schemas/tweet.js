export default {
    name: 'tweet',
    title: 'Tweet',
    type: 'document',
    fields: [
      {
        name: 'text',
        title: 'Text in tweet',
        type: 'string',
      },
      {
        name:'blockTweet',
        title:"Block Tweet",
        description:"Is approved or not?",
        type:"boolean",
  
      },
      {
        name: 'userName',
        title: 'User Name',
        type: 'string',
       
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'string',

      },
      {
        name:'image',
        title:'tweet image',
        type:'string',
      }
    ]
      
  }
  
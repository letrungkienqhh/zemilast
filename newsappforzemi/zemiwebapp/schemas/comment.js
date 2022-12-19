export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name:'email',
        type:"string",
  
      },
      {
        name:'approved',
        title:'Approved',
        type:'boolean',
        description:'comment will not be showed on the site without approval',


      },
      {
        name:"comment",
        type:"text"
      },
      {
     
        name: 'post',
        type: 'reference',
        to: {type: 'post'},
      },
      
     
      
     
    ],
  
    
  }
  
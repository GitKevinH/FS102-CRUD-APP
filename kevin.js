//Template object

const dummyData = [
    {
      id: 0,
      content: "this is a post",
      date: "01-01-2000",
      author: "Stephen King",
      tags: ["tag1", "tag2","tag3"],
    },
  ];

//read functionality

function getPost(dataArray){
    
    // dataArray.forEach(post => {
    //     post.tags.forEach(tag => {
            
    //     });
    // });
    dataArray.forEach(post => {
    let formatPost = `Post ID: ${dataArray().id} Author: ${dataArray.author} Tags: ${dataArray.tags}  `
    console.log(formatPost);
    return formatPost
        
    });
    
    
}
getPost(dummyData);
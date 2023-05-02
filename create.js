//Template object

// const dummyData = [
//   {
//     id: 0,
//     content: "this is a post",
//     date: "01-01-2000",
//     author: "Stephen King",
//     tags: ["tag1", "tag2"],
//   },
// ];

function create(body, author, tags) {
  let newPost = {};
  newPost.id = 1;
  // newPost.postDate = new Date();
  newPost.content = body;
  newPost.author = author;
  newPost.tags = tags;
}

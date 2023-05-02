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
// const userName = document.querySelector("#username");
// const postBody = document.querySelector("#postBody");
// const tagString = document.querySelector("#tags");
let postList = [];
// function handleClick() {
function create(body, author, tagString) {
  let newPost = {};
  // newPost.postDate = new Date();
  newPost.content = body;
  newPost.author = author;
  newPost.tags = tagString.split(", ");
  return newPost;
}
// }
function addPost(post){
   let id = postList.length;
   post.id = id;
   postList.push(post);
   return postList;
}
addPost(create("here is some body text", "Jacob", "test1, create, hope"));
addPost(create("here is some more body text", "Jacob", "test2, created, hoping"));
console.log(postList);

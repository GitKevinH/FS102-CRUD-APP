// declaring input boxes as variables for ease of use
const postBody = document.querySelector("#postBody");
const userName = document.querySelector("#username");
const tagString = document.querySelector("#tags");
// creating array for storing post objects
let postList = [];
// if local storage has posts sets the empty array = to local storage
if (localStorage.posts) {
  postList = JSON.parse(localStorage.posts);
  // else it creates the array in local storage
} else {
  localStorage.setItem("posts", JSON.stringify(postList));
}
// function for creating a post object
function create(body, author, tags) {
  let newPost = {};
  postDate = new Date();
  newPost.author = author;
  newPost.content = body;
  newPost.tags = tags.split(", ");
  newPost.postDate = postDate.toLocaleString();
  return newPost;
}
// function for adding the post id and putting into local storage
function addPost(post) {
  let id = postList.length;
  post.id = id + 1;
  postList.push(post);
  localStorage.setItem("posts", JSON.stringify(postList));
  return postList;
}
// executes the funtions when submit is clicked and clears the input fields
document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  let body = postBody.value;
  let author = userName.value;
  let tags = tagString.value;
  addPost(create(body, author, tags));
  postBody.value = "";
  userName.value = "";
  tagString.value = "";
  console.log(JSON.parse(localStorage.posts));
});
console.log(JSON.parse(localStorage.posts));

//
//
// Declare postID for input
const postID = document.querySelector("#postID");
// function that takes the post ID, finds a post by ID, and fills the relevant fields with the post info
function findAndFillPost(id) {
  postList = JSON.parse(localStorage.posts);
  userName.value = postList[id - 1].author;
  postBody.value = postList[id - 1].content;
  tagString.value = postList[id - 1].tags.join(", ");
  postID.value = postList[id - 1].id;
}
// function that takes the post ID to update the post at the current location
function update(id) {
  postList[id - 1].content = postBody.value;
  postList[id - 1].tags = tagString.value.split(", ");
  localStorage.setItem("posts", JSON.stringify(postList));
  postBody.value = "";
  userName.value = "";
  tagString.value = "";
  postID.value = "";
}
// event listener that funs the find and fill function
document.querySelector("#find").addEventListener("click", () => {
  findAndFillPost(postID.value);
});
// event listener that updates the post
document.querySelector("#update").addEventListener("click", () => {
  update(postID.value);
});

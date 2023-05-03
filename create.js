// declaring input boxes as variables for ease of use
const postBody = document.querySelector("#postBody");
const userName = document.querySelector("#username");
const tagString = document.querySelector("#tags");
// creating array for storing post objects
let postList = [];
// initialize variable for post ID location
let editID = 0;
let deleteID = 0;
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
  date = new Date();
  newPost.author = author;
  newPost.content = body;
  newPost.tags = tags.split(", ");
  newPost.date = date.toLocaleString();
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
  location.reload()
  let body = postBody.value;
  let author = userName.value;
  let tags = tagString.value;
  addPost(create(body, author, tags));
  postBody.value = "";
  userName.value = "";
  tagString.value = "";
  console.log(JSON.parse(localStorage.posts));

  // Hides the create post form when the submit button is clicked
  const form = document.querySelector(".center-form");
  form.style.display = "none";
});
console.log(JSON.parse(localStorage.posts));

//
//
// function that takes the post ID, finds a post by ID, and fills the relevant fields with the post info
function findAndFillPost(id) {
  // postList = JSON.parse(localStorage.posts);
  let editIndex = postList.findIndex(post => post.id == id);
  console.log(editIndex);
  userName.value = postList[editIndex].author;
  postBody.value = postList[editIndex].content;
  tagString.value = postList[editIndex].tags.join(", ");
}
// function that takes the post ID to update the post at the current location
function update(id) {
  let updateIndex = postList.findIndex(post => post.id == id)
  console.log(updateIndex);
  postList[updateIndex].content = postBody.value + " (Edited)";
  postList[updateIndex].tags = tagString.value.split(", ");
  postList[updateIndex].date = new Date().toLocaleString();
  localStorage.setItem("posts", JSON.stringify(postList));
  postBody.value = "";
  userName.value = "";
  tagString.value = "";
}
// event listener that runs the find and fill function
let postButtons = document.querySelectorAll("#editPost");

postButtons.forEach((post) => {
  post.addEventListener("click", (e) => {
    editID = e.target.parentElement.id;
    findAndFillPost(editID);

    // shows the create post form when edit post is clicked
    const form = document.querySelector(".center-form");
    form.style.display = "block";

    // hides the submit button when edit post is clicked
    document.querySelector('[type="submit"]').style.display = "none";

    //shows the save post button when edit is clicked
    document.getElementById("save-post").style.display = "inline-block";
  });
});

// event listener that updates the post when save post is clicked
document.getElementById("save-post").addEventListener("click", () => {
  update(editID);
  // hides the create post form when clicked
  const form = document.querySelector(".center-form");
  form.style.display = "none";
});

//
function deletePost(id) {
  // postList = JSON.parse(localStorage.posts);
  let deleteIndex = postList.findIndex(post => post.id == id);
  console.log(deleteIndex);
  postList.splice(deleteIndex, 1);
  localStorage.setItem("posts", JSON.stringify(postList));
}

let deleteButtons = document.querySelectorAll("#deleteBTN");

deleteButtons.forEach((post) => {
  post.addEventListener("click", (e) => {
    deleteID = e.target.parentElement.id;
    deletePost(deleteID);
  });
});

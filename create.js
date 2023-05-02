
function create(body, author, tags) {
  let newPost = {};
  postDate = new Date();
  newPost.author = author;
  newPost.content = body;
  newPost.tags = tags.split(", ");
  newPost.postDate = postDate.toLocaleString();
  return newPost;
}
function addPost(post) {
  let id = postList.length;
  post.id = id + 1;
  postList.push(post);
  localStorage.setItem("Posts", JSON.stringify(postList));
  return postList;
}
document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  let body = postBody.value;
  let author = userName.value;
  let tags = tagString.value;
  addPost(create(body, author, tags));
  postBody.value = "";
  userName.value = "";
  tagString.value = "";
  console.log(JSON.parse(localStorage.getItem("Posts")));
});
console.log(JSON.parse(localStorage.getItem("Posts")));
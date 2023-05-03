//Template object

// const dummyData = [
//   {
//     id: 1,
//     content: "This is a post, can you see it?",
//     date: "01-01-2000",
//     author: "Stephen King",
//     tags: ["tag1", "tag2", "tag3"],
//   },
//   {
//     id: 0,
//     content: "This is a post, can you see it?",
//     date: "01-01-2000",
//     author: "Stephen King",
//     tags: ["tag1", "tag2", "tag3"],
//   },
//   {
//     id: 0,
//     content: "This is a post, can you see it?",
//     date: "01-01-2000",
//     author: "Stephen King",
//     tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
//   },
// ];

//Search functionality

function searchTags(userTags) {
  let foundTagCounter = 0;
  JSON.parse(localStorage.posts).forEach((post) => {
    post.tags.forEach((tag) => {
      userTags.forEach((compareTag) => {
        if (tag == compareTag) {
          let formatPost = `<div class="card" >
                            <h5 class="card-header">Author: ${post.author}</h5>
                          <div class="card-body" id=${post.id}>
                          <h6 class="card-title">${post.date}</h6>
                          <p class="card-text">${post.content}</p>
                          <button type="button" id="editPost" class="btn btn-primary">Edit</button>
                          <button type="button"class="btn btn-primary">Delete</button>
                            </div>
                          </div>,<br>`;

          let newLI = document.createElement("div"); //creates new element to add to the HTML
          newLI.innerHTML = formatPost;

          const postFeed = document.querySelector(".list-group"); //grabs existing element
          postFeed.appendChild(newLI); //appends newly created element to append to existing element in HTML
          foundTagCounter++;
        }
      });
    });
  });
  if (foundTagCounter == 0) {
    //If no results come back(checked by the foundTag counter), this executes to display no results to the user
    let newLI = document.createElement("div"); //creates new element to add to the HTML
    newLI.innerHTML = "No Results Found, please try a different tag(s)";

    const postFeed = document.querySelector(".list-group"); //grabs existing element
    postFeed.appendChild(newLI); //appends newly created element to append to existing element in HTML
  }
}

const form = document.querySelector("#searchbar");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type="search"]');
  keywords = input.value.replace(/\s+/g, "");
  keywordsArray = keywords.split(",");
  searchTags(keywordsArray);
});

//read functionality
function getPosts() {
  JSON.parse(localStorage.posts).forEach((post) => {
    // Loops through each element in the array and utilizes the data inside the object to assign to a bootstrap card
    let formatPost = `<div class="card" >
                        <h5 class="card-header">Author: ${post.author}</h5>
                       <div class="card-body" id=${post.id}>
                      <h6 class="card-title">${post.date}</h6>
                       <p class="card-text">${post.content}</p>
                       <button type="button" id="editPost" class="btn btn-primary">Edit</button>
                       <button type="button" id="deletePost" class="btn btn-primary">Delete</button>
                        </div>
                      </div>,<br>`;

    let newLI = document.createElement("div"); //creates new element to add to the HTML
    newLI.innerHTML = formatPost;

    const postFeed = document.querySelector(".list-group"); //appends newly created element to append to existing element in HTML
    postFeed.appendChild(newLI);
  });
}

//getPosts(dummyData); //GetPosts function call to display on HTML

// WIP These event holders won't work right out of gate until a post is created

// //empty eventlistener for editBTN
// document.getElementById('#editBTN').addEventListener('click', () => {
// });

// //empty eventlistener for deleteBTN
// document.getElementById('#deleteBTN').addEventListener('click', () => {
// });
//getPosts();

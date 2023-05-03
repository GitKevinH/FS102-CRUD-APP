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
  const postFeed = document.querySelector(".list-group"); //grabs existing element
  postFeed.innerHTML = "";

  let foundTagCounter = 0;
  JSON.parse(localStorage.posts).forEach((post) => {
    post.tags.forEach((tag) => {
      userTags.forEach((compareTag) => {
        if (tag == compareTag) {
          let formatPost = `<div class="card" >
          <h5 class="card-header">Author: ${post.author}</h5>
         <div class="card-body" id=${post.id}>
        <h6 class="card-title">${post.date}</h6>
         <p class="card-text">${post.content}<br>Tags: ${post.tags}</p>
         <button type="button" id="editPost" class="btn btn-primary">Edit</button>

         <button type="button" id="deleteBTN" class="btn btn-danger" onclick="window.location.href=window.location.href">Delete</button>

          </div>
        </div><br>`;

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
    newLI.innerHTML = "<h6>No Results found, please try again</h6>";

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
                       <p class="card-text">${post.content}<br>Tags: ${post.tags}</p>
                       <button type="button" id="editPost" class="btn btn-primary">Edit</button>

                       <button type="button" id="deleteBTN" class="btn btn-danger" onclick="window.location.href=window.location.href">Delete</button>

                        </div>
                      </div><br>`;

    let newLI = document.createElement("div"); //creates new element to add to the HTML
    //newLI.className = 'col-4'
    newLI.innerHTML = formatPost;

    const postFeed = document.querySelector(".list-group"); //appends newly created element to append to existing element in HTML
    postFeed.appendChild(newLI);
  });
}

getPosts();

//Template object

const dummyData = [
  {
    id: 0,
    content: "This is a post, can you see it?",
    date: "01-01-2000",
    author: "Stephen King",
    tags: ["tag1", "tag2", "tag3"],
  }, {
    id: 0,
    content: "This is a post, can you see it?",
    date: "01-01-2000",
    author: "Stephen King",
    tags: ["tag1", "tag2", "tag3"],
  }, {
    id: 0,
    content: "This is a post, can you see it?",
    date: "01-01-2000",
    author: "Stephen King",
    tags: ["tag1", "tag2", "tag3"],
  },
];



//read functionality
function getPosts(dataArray) {
  dataArray.forEach((post) => {   // Loops through each element in the array and utilizes the data inside the object to assign to a bootstrap card
    let formatPost = `<div class="card">
                        <h5 class="card-header">Author: ${post.author}</h5>
                       <div class="card-body">
                      <h6 class="card-title">${post.date}</h6>
                       <p class="card-text">${post.content}</p>
                       <button type="button"class="btn btn-primary">Edit</button>
                       <button type="button"class="btn btn-primary">Delete</button>
                        </div>
                      </div>,<br>`;

    let newLI = document.createElement("div");  //creates new element to add to the HTML
    newLI.innerHTML = formatPost;

    const postFeed = document.querySelector(".list-group"); //appends newly created element to append to existing element in HTML
    postFeed.appendChild(newLI);

  });
}

getPosts(dummyData);

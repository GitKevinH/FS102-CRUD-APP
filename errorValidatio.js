// Select form and input fields
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const postBodyInput = document.querySelector('#postBody');
const tagsInput = document.querySelector('#tags');
const errorMessageContainer = document.querySelector('#error-message-container');

// Add submit event listener to form
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // Clear any previous error messages
  errorMessageContainer.innerHTML = '';

  // Get input values
  const username = usernameInput.value.trim();
  const postBody = postBodyInput.value.trim();
  const tags = tagsInput.value.trim();

  // Validate input values
  if (username === '') {
    displayErrorMessage('Please enter a username');
    return;
  }

  if (postBody === '') {
    displayErrorMessage('Please enter a post');
    return;
  }

  if (postBody.length > 500) {
    displayErrorMessage('Post cannot exceed 500 characters');
    return;
  }

  // Display error message if tags contain invalid characters
  const tagsRegex = /^[a-zA-Z0-9, ]+$/;
  if (tags !== '' && !tagsRegex.test(tags)) {
    displayErrorMessage('Tags can only contain letters, numbers, commas, and spaces');
    return;
  }

  // Create post object
  const post = {
    username,
    postBody,
    tags: tags.split(',').map((tag) => tag.trim()),
    timestamp: new Date(),
  };

  // Clear form inputs
  usernameInput.value = '';
  postBodyInput.value = '';
  tagsInput.value = '';

  // Log post object to console
  console.log(post);
});

// Function to display error message
function displayErrorMessage(message) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('alert', 'alert-danger');
  errorMessage.setAttribute('role', 'alert');
  errorMessage.innerText = message;
  errorMessageContainer.appendChild(errorMessage);
}


  
  
  


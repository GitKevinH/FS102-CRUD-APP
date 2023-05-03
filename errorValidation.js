const form = document.querySelector("#createPost");
const usernameInput = document.querySelector("#username");
const postBodyInput = document.querySelector("#postBody");
const tagsInput = document.querySelector("#tags");
const errorContainer = document.querySelector("#error-message-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const postBody = postBodyInput.value;
  const tags = tagsInput.value;

  // Validate username length
  if (username.length < 3 || username.length > 20) {
    errorContainer.textContent = "Username must be between 3 and 20 characters";
    return;
  }

  // Validate postBody length
  if (postBody.length < 10 || postBody.length > 500) {
    errorContainer.textContent = "Post body must be between 10 and 500 characters";
    return;
  }

  // Validate tags
  const tagsRegex = /^[a-zA-Z0-9, ]*$/;
  if (!tagsRegex.test(tags)) {
    errorContainer.textContent = "Tags can only contain letters, numbers, commas, and spaces";
    return;
  }

  // If all validations pass, submit the form
  errorContainer.textContent = "";
  form.submit();
});



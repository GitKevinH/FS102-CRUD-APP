$(document).ready(() => {
  $("#createPost").submit((event) => {
    event.preventDefault();
    const username = $("#username").val();
    const postBody = $("#postBody").val();
    const tags = $("#tags").val();

    let postBodyError = "";
    if (!postBody) {
      postBodyError = "Post body is a required field.";
    } else if (postBody.length > 500) {
      postBodyError = "Post body should not exceed 500 characters.";
    }
    $("#postBody-error").text(postBodyError);

    let tagsError = "";
    if (!tags) {
      tagsError = "Tags is a required field.";
    } else if (/\d/.test(tags)) {
      tagsError = "Tags should not contain numbers.";
    }
    $("#tags-error").text(tagsError);

    if (!postBodyError && !tagsError) {
      const post = {
        username,
        postBody,
        tags: tags.split(",").map((tag) => tag.trim()),
      };
      savePost(post);
      $("#createPost")[0].reset();
      $("#show-create-post-form").show();
      $("#error-message-container").hide();
    } else {
      $("#error-message-container").text("There are errors in your form. Please fix them and try again.");
      $("#error-message-container").show();
    }
  });
});






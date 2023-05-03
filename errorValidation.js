$(document).ready(function() {
  // define required fields
  var requiredFields = ['username', 'postBody', 'tags'];

  // clear the error message before the form is submitted
  $('#message').text('');
  $('#message').removeClass('warning');

  $('form').on('submit', function(event) {
    event.preventDefault();

    // get input values
    var username = $('#username').val();
    var postBody = $('#postBody').val();
    var tags = $('#tags').val();

    // validate input values
    if (postBody.length > 500) {
      // display error message if postBody is too long
      $('#postBodyError').text('Post body must be no more than 500 characters');
      $('#postBodyError').addClass('warning');
      $('#postBodyLabel').addClass('warning');
    } else {
      // clear error message if postBody is within character limit
      $('#postBodyError').text('');
      $('#postBodyError').removeClass('warning');
      $('#postBodyLabel').removeClass('warning');
    }

    // check if any required fields are empty
    var required = [username, postBody, tags];
    for (var i = 0; i < required.length; i++) {
      if (required[i] === '') {
        // display error message and add warning class to label if field is empty
        $('#message').text('Please Fill Out Required Fields');
        $('#message').addClass('warning');
        $('label').eq(i).addClass('warning');
        $('#' + requiredFields[i] + '-error').text(requiredFields[i] + ' is a required field.');
        $('#' + requiredFields[i] + '-error').show();
      } else {
        $('label').eq(i).removeClass('warning');
        $('#' + requiredFields[i] + '-error').hide();
      }
    }

    // check if tags are separated by commas
    var tagList = tags.split(','); // split input value by commas
    var validTags = true; // assume tags are valid
    for (var i = 0; i < tagList.length; i++) {
      if (tagList[i].trim() === '') { // ignore empty tags
        continue;
      }
      if (tagList[i].indexOf(' ') >= 0) { // check if tag contains spaces
        validTags = false;
        break;
      }
    }
    if (!validTags) {
      // display error message if tags are not separated by commas
      $('#tagsError').text('Tags must be separated by commas');
      $('#tagsError').addClass('warning');
      $('#tagsLabel').addClass('warning');
    } else {
      // clear error message if tags are separated by commas
      $('#tagsError').text('');
      $('#tagsError').removeClass('warning');
      $('#tagsLabel').removeClass('warning');
    }

    // check if any fields have warning class
    if ($('label').hasClass('warning')) {
      // stop form submission if any required fields are empty or have errors
      return false;
    } else {
      // remove form after submission
      $('form').remove();
    }
  });
});




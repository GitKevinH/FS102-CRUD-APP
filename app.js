// Create post button that shows the create post form when clicked
document.getElementById('show-create-post-form').addEventListener('click', () => {
    const form = document.querySelector('.center-form');
    form.style.display = 'block';
    document.getElementById('save-post').style.display = 'none';
});

// Cancel post button that hides the create post form when clicked
document.getElementById('cancel-create-post-form').addEventListener('click', () => {
    const form = document.querySelector('.center-form');
    form.style.display = 'none';
});

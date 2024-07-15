document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postContainer = document.getElementById('post-container');

    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>by ${post.username}</small>`;
        postContainer.appendChild(postDiv);
    });

    document.getElementById('toggle-mode').addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
});

const blogForm = document.querySelector ('#blog-form');
const blogHader = document.querySelector('.blog-header');

function createBlog(eventObj) {
    eventObj.preventDefault();
    const blogInput = document.querySelector('#blog-input');
    const blogText = blogInput.value;
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const objHours = dateObj.getHours();

    const hour = objHours > 12 ? objHours - 12 : objHours;
    const objMin = dateObj.getMinutes();
    const minutes = objMin < 10 ? '0' + objMin : objMin;

    const dateStr = `${month}/${date}/${year} ${hour}:${minutes}`;
    const blogObj = {
        text: blogText,
        date: dateStr
    };

    const blogs = getBlogs();

    blogs.push(blogObj);
    const jsonarray = JSON.stringify(blogs);
    localStorage.setItem('blogs', jsonArray);
    blogInput.value = '',
    outputBlogs();
    window,location = "./blog.html"
}

addEventListener()

blogForm.addEventListener('submit', createBlog);
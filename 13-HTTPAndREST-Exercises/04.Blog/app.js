function attachEvents() {

    const url = `http://localhost:3030/jsonstore/blog/`;
    
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postsDropdown = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments')

    let posts = {}

    function createDropDown(data) {
        postsDropdown.innerHTML = ''
        Object.values(data).forEach((post) => {
            postsDropdown.innerHTML += `<option value="${post.id}">${post.title}</option>`
            posts[post.id] = {title: post.title, body: post.body}
            });
    }

    function displayPost(data) {
        const postId = postsDropdown.value;

        const comments = Object.values(data)
                .filter((comment) => comment.postId === postId);

        postTitle.textContent = posts[postId].title;
        postBody.innerHTML = posts[postId].body;

        postComments.innerHTML = "";
        
        comments.forEach((comment) => {
            postComments.innerHTML += `<li>${comment.text}</li>`
        });
    }

    function loadPosts() {
        fetch(`${url}posts`)
        .then((response) => response.json()) 
        .then((data) => createDropDown(data))
        .catch ((error) => console.log(error))
    }
    
    function loadComments() {
        fetch(`${url}comments`)
        .then((response) => response.json())
        .then((data) => displayPost(data))
        .catch((error) => console.log(error))
    }    

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', loadComments)
}

attachEvents();
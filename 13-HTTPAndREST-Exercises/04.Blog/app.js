// TODO: 25 / 100 ???

function attachEvents() {
    const url = `http://localhost:3030/jsonstore/blog`;
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments')

    
    function loadPosts() {
        fetch(`${url}`)
            .then((response) => response.json())
            .then((data) => {
                posts.innerHTML = ""
                Object.values(data.posts).forEach(post => {
                    let optionElement = document.createElement('option');
                    optionElement.textContent = post.title
                    optionElement.value = post.id
                    posts.appendChild(optionElement)
                    // posts.innerHTML += 
                    // `<option value="${post.id}">${(post.title)}</section>`
                });
            })
            .catch((error) => console.log(error))
    }
    function loadComments() {
        postId = posts.value;
        if (postId) {
            fetch(`${url}/posts/${postId}`)
            .then((response) => response.json())
            .then((post) => {
                postTitle.textContent = post.title
                postBody.textContent = post.body
            })
            .catch((error) => console.log(error))

            fetch(`${url}/comments`)
                .then((response) => response.json())
                .then((data) => {
                    postComments.innerHTML = ''
                    Object.values(data).forEach(comment => {
                        
                        if (comment.postId === postId) {
                            // postComments.innerHTML += `<li id="${comment.id}">${comment.text}</li>`
                            let liElement = document.createElement('li')
                            liElement.textContent = comment.text
                            liElement.id = comment.id
                            postComments.appendChild(liElement)
                        };
                    });
                })
                .catch((error) => console.log(error))
        }
        
    }
    
    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', loadComments)
}

attachEvents();
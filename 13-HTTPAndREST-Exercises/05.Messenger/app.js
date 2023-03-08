function attachEvents() {
    // TODO:
    const url = 'http://localhost:3030/jsonstore/messenger';
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messages = document.getElementById('messages');
    const controls = document.getElementById('controls');
    const name = document.querySelector("input[name='author']")
    const content = document.querySelector("input[name='content']")

    

    function displayMessages(data) {
        messages.innerHTML = '';
        
        Object.values(data).forEach((message, e) => {
            if (e === Object.values(data).length - 1) {
                messages.innerHTML += `${message.author}: ${message.content}`
            } else {
                messages.innerHTML += `${message.author}: ${message.content}\n`
            }
            
        });
    }
    
    function getPosts() {
        fetch(url)
        .then((response) => response.json())
        .then((data) => displayMessages(data))
        .catch((error) => console.log(error))
    }

    function sendMessage() {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "author": name.value,
                "content": content.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .catch((error) => console.log(error))
        name.value = '';
        content.value = '';
    }

    sendBtn.addEventListener('click', sendMessage)
    refreshBtn.addEventListener('click', getPosts)
}

attachEvents();


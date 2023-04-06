window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn')
    const genre = document.getElementById('genre');
    const songName = document.getElementById("name");
    const author = document.getElementById("author");
    const date = document.getElementById("date");
    const allHitsContainer = document.querySelector(".all-hits-container");
    const totalLikes = document.getElementById("total-likes");
    const savedContainer = document.querySelector(".saved-container")
    
    
    addBtn.addEventListener("click", (e) => {

        e.preventDefault()

        if (genre.value && songName.value && author.value && date.value){
            addSong()
        }
    })

    function addSong() {
        
        let divEl = document.createElement("DIV");
        divEl.className = 'hits-info';
        allHitsContainer.appendChild(divEl)

        let imgEl = document.createElement("IMG");
        imgEl.src = './static/img/img.png';
        divEl.appendChild(imgEl)

        let genreEl = document.createElement("H2")
        genreEl.textContent = `Genre: ${genre.value}`
        divEl.appendChild(genreEl)

        let nameEl = document.createElement("H2");
        nameEl.textContent = `Name: ${songName.value}`
        divEl.appendChild(nameEl)

        let authorEl = document.createElement("H2");
        authorEl.textContent = `Author: ${author.value}`
        divEl.appendChild(authorEl)

        let dateEl = document.createElement("H3");
        dateEl.textContent = `Date: ${date.value}`
        divEl.appendChild(dateEl)

        let saveBtn = document.createElement("BUTTON")
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSong);
        divEl.appendChild(saveBtn)

        let likeBtn = document.createElement("BUTTON");
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong);
        divEl.appendChild(likeBtn)

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        divEl.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', deleteSong); 

        genre.value = "";
        songName.value = "";
        author.value = "";
        date.value = "";
    }

    function likeSong(e) {
        let text = totalLikes.querySelector("div>p")
        let likes = text.textContent.split(": ")[1] * 1 + 1;
        text.textContent = `Total Likes: ${likes}`;
        e.currentTarget.disabled = true;
    }

    function saveSong(e) {
        currentSong = e.target.parentNode;
        currentSong.querySelector('.like-btn').remove()
        currentSong.querySelector('.save-btn').remove()
        savedContainer.appendChild(currentSong)
    }

    function deleteSong(e) {
        e.currentTarget.parentElement.remove();
    }
}

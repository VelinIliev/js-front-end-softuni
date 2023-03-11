function lockedProfile() {
    const URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');

    function displayProfiles(data) {
        main.innerHTML = ""
        Object.values(data).forEach( (person, index) => {
            main.innerHTML +=  `
            <div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${index + 1}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${index + 1}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${index + 1}Username" value="${person.username}" disabled readonly />
				<div id="user${index + 1}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${index + 1}Email" value="${person.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${index + 1}Age" value="${person.age}" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
            `
            const userUsername = main.children[index].querySelector(`div`);
            userUsername.style.display = 'none';
        })
    }

    function showMore(parent) {
        const unlocked = parent.querySelector('input[value="unlock"]');
        const moreInfo = parent.querySelector('div');
        const button = parent.querySelector('button');

        if (unlocked.checked && button.textContent === 'Show more') {
            moreInfo.style.display = 'block';
            button.textContent = 'Hide it'
        } else if (unlocked.checked && button.textContent === 'Hide it') {
            moreInfo.style.display = 'none';
            button.textContent = 'Show more'
        }
    }

    function getData() {
        fetch(URL)
        .then(response => response.json())
        .then(data => displayProfiles(data))
        .catch(error => console.log(error))
    }
    
    document.addEventListener('DOMContentLoaded', getData);

    document.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            showMore(e.target.parentNode);
        }
        
    })
}
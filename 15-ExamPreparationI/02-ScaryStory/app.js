window.addEventListener("load", solve);

function solve() {
	const publishBtn = document.getElementById('form-btn')
	const firstName = document.getElementById('first-name')
	const lastName = document.getElementById('last-name');
	const age = document.getElementById('age');
	const storyTitle = document.getElementById('story-title');
	const genre = document.getElementById('genre');
	const story = document.getElementById('story');
	const previewList = document.getElementById('preview-list');
	const main = document.getElementById('main');

	storyContent = {}

	function displayPreview() {
		if (firstName.value && lastName.value && age.value && storyTitle.value  && story.value) {

				storyContent = {
					firstName: firstName.value,
					lastName: lastName.value,
					age: age.value,
					storyTitle: storyTitle.value,
					genre: genre.value,
					story: story.value
				}
			
				previewList.innerHTML = `
					<h3>Preview</h3>
					<li class="story-info">
						<article>
							<h4>Name: ${storyContent.firstName} ${storyContent.lastName}</h4>
							<p>Age: ${storyContent.age}</p>
							<p>Title: ${storyContent.storyTitle}</p>
							<p>Genre: ${storyContent.genre}</p>
							<p>${storyContent.story}</p>
						</article>
						<button class="save-btn">Save Story</button>
						<button class="edit-btn">Edit Story</button>
						<button class="delete-btn">Delete Story</button>
					`
					
				firstName.value = ""
				lastName.value = ""
				age.value = ""
				storyTitle.value = ""
				story.value = ""
				publishBtn.disabled = true
		}
	}

	function editStory() {

		previewList.innerHTML = `<h3>Preview</h3>`

		firstName.value = storyContent.firstName
		lastName.value = storyContent.lastName
		age.value = storyContent.age
		storyTitle.value = storyContent.storyTitle
		genre.value = storyContent.genre
		story.value = storyContent.story
		publishBtn.disabled = false
		
	}

	function saveStory() {
		main.innerHTML = `<h1>Your scary story is saved!</h1>`
	}
	
	function deleteStory() {
		publishBtn.disabled = false;
		previewList.innerHTML = `<h3>Preview</h3>`
	}

	publishBtn.addEventListener('click', displayPreview)

	previewList.addEventListener("click", (e) => {
		if (e.target.className === "save-btn") {
			saveStory();
		} else if (e.target.className === "edit-btn"){
			editStory()
		} else if (e.target.className === "delete-btn"){
			deleteStory()
		};
	})
}

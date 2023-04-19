function solve(){
   	const creator = document.getElementById('creator');
	const title = document.getElementById('title');
	const category = document.getElementById('category');
	const content = document.getElementById('content');
	const createBtn = document.querySelector('.create');
	const archiveSection = document.querySelector('.archive-section>ol');
	const siteContent = document.querySelector('.site-content>main>section');

	let titles = [];

	createBtn.addEventListener("click", (e) => {
		e.preventDefault()

		let articleEl = document.createElement("ARTICLE");
		siteContent.appendChild(articleEl);

		let titleEl = document.createElement("H1");
		titleEl.textContent = title.value;
		articleEl.appendChild(titleEl);

		let categoryEl = document.createElement("P");
		categoryEl.textContent = `Category: `
		articleEl.appendChild(categoryEl)

		let catEl2 = document.createElement("STRONG");
		catEl2.textContent = category.value;
		categoryEl.appendChild(catEl2)

		let creatorEl = document.createElement("P");
		creatorEl.textContent = `Creator: `
		articleEl.appendChild(creatorEl);

		let creEl2 = document.createElement("STRONG");
		creEl2.textContent = creator.value;
		creatorEl.appendChild(creEl2)

		let contentEl = document.createElement("P");
		contentEl.innerHTML = content.value
		articleEl.appendChild(contentEl)

		let divButtons = document.createElement("DIV");
		divButtons.className = 'buttons';
		articleEl.appendChild(divButtons);

		let deleteBtn = document.createElement("BUTTON");
		deleteBtn.className = 'btn delete';
		deleteBtn.textContent = "Delete";
		divButtons.appendChild(deleteBtn);

		let archiveBtn = document.createElement("BUTTON");
		archiveBtn.className = 'btn archive';
		archiveBtn.textContent = "Archive";
		divButtons.appendChild(archiveBtn);

		deleteBtn.addEventListener("click", deletePost);
		archiveBtn.addEventListener("click", archivePost);

		creator.value = '';
		title.value = '';
		category.value = '';
		content.value = '';

	})

	function deletePost(e) {
		let currentPost = e.currentTarget.parentNode.parentNode;
		currentPost.remove()
	}

	function archivePost(e) {
		let currentPost = e.currentTarget.parentNode.parentNode;
		let currentTitle = currentPost.querySelector("h1").textContent;
		currentPost.remove()

		titles.push(currentTitle);
		titles.sort((a, b) => a.localeCompare(b))
		
		archiveSection.innerHTML = '';

		titles.forEach(element => {
			let titleEl = document.createElement("LI");
			titleEl.textContent = element;
			archiveSection.appendChild(titleEl)
		});
		
	}
}

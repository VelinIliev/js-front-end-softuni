window.addEventListener("load", solve);

function solve() {
	const postTitle = document.getElementById('post-title');
	const postCategory = document.getElementById("post-category");
	const postContent = document.getElementById("post-content");
	const publishBtn = document.getElementById("publish-btn");
	const reviewList = document.getElementById('review-list');
	const publishedList = document.getElementById('published-list');
	const clearBtn = document.getElementById("clear-btn");

	clearBtn.addEventListener("click", ()=> {
		publishedList.innerHTML = '';
	})

	publishBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (postTitle.value && postCategory.value && postContent.value){

			let liEl = document.createElement("LI");
			liEl.className = 'rpost';
			reviewList.appendChild(liEl);

			let articleEl = document.createElement("ARTICLE");
			liEl.appendChild(articleEl)

			let titleEl = document.createElement("H4");
			titleEl.textContent = postTitle.value;
			articleEl.appendChild(titleEl);

			let categoryEl = document.createElement("P");
			categoryEl.textContent = `Category: ${postCategory.value}`;
			articleEl.appendChild(categoryEl);

			let contentEl = document.createElement("P");
			contentEl.textContent = `Content: ${postContent.value}`;
			articleEl.appendChild(contentEl);

			let editBtn = document.createElement("BUTTON");
			editBtn.className = 'action-btn edit';
			editBtn.textContent = 'Edit';
			liEl.appendChild(editBtn);

			let approveBtn = document.createElement("BUTTON");
			approveBtn.className = 'action-btn approve';
			approveBtn.textContent = 'Approve';
			liEl.appendChild(approveBtn);

			editBtn.addEventListener("click", editPost);
			approveBtn.addEventListener("click", approvePost);

			postTitle.value = '';
			postCategory.value = '';
			postContent.value = '';
		}
		
	})

	function editPost(e) {
		currentPost = e.currentTarget.parentNode;
		postTitle.value = currentPost.querySelector("h4").textContent;
		postCategory.value = currentPost.querySelector('article p:nth-child(2)').textContent.replace("Category: ", "");
		postContent.value = currentPost.querySelector('article p:nth-child(3)').textContent.replace("Content: ", "");
		currentPost.remove();
	}

	function approvePost(e) {

		currentPost = e.currentTarget.parentNode;

		currentPost.querySelector('.edit').remove();
		currentPost.querySelector('.approve').remove();
		currentPost.remove()

		publishedList.appendChild(currentPost);
	}
}

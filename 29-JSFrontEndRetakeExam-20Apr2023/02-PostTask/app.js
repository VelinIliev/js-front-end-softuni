window.addEventListener("load", solve);

function solve() {
	const taskTitle = document.getElementById("task-title");
	const taskCategory = document.getElementById("task-category");
	const taskContent = document.getElementById("task-content");
	const publishBtn = document.getElementById("publish-btn");
	const reviewList = document.getElementById("review-list");
	const publishedList = document.getElementById("published-list");

	publishBtn.addEventListener("click", (e) =>{
		e.preventDefault();

		if (taskTitle.value && taskCategory.value && taskContent.value){
			// console.log(taskTitle.value);
			// console.log(taskCategory.value);
			// console.log(taskContent.value);

			let liEl = document.createElement("LI");
			liEl.className = 'rpost';
			reviewList.appendChild(liEl);

			let articleEl = document.createElement("ARTICLE");
			liEl.appendChild(articleEl);

			let titleEl = document.createElement("H4");
			titleEl.textContent = taskTitle.value;
			articleEl.appendChild(titleEl);

			let categoryEl = document.createElement("P");
			categoryEl.textContent = `Category: ${taskCategory.value}`;
			articleEl.appendChild(categoryEl);

			let contentEl = document.createElement("P");
			contentEl.textContent = `Content: ${taskContent.value}`;
			articleEl.appendChild(contentEl);

			let editBtn = document.createElement("BUTTON");
			editBtn.className = 'action-btn edit';
			editBtn.textContent = "Edit";
			liEl.appendChild(editBtn);

			let postBtn = document.createElement("BUTTON");
			postBtn.className = 'action-btn post';
			postBtn.textContent = "Post";
			liEl.appendChild(postBtn);

			editBtn.addEventListener("click", editPost);
			postBtn.addEventListener("click", postPost);

			taskTitle.value = '';
			taskCategory.value = '';
			taskContent.value = ''

		}
		
	})
	function editPost(e) {
		currentPost = e.currentTarget.parentNode;
		currentTitle = currentPost.querySelector("H4").textContent;
		currentCategory = currentPost.querySelector("p:nth-child(2)").textContent.replace("Category: ", "");
		currentContent = currentPost.querySelector("p:nth-child(3)").textContent.replace("Content: ", "");
		currentPost.remove();

		taskTitle.value = currentTitle;
		taskCategory.value = currentCategory;
		taskContent.value = currentContent;

	}	

	function postPost(e) {
		currentPost = e.currentTarget.parentNode;
		currentPost.querySelector(".edit").remove();
		currentPost.querySelector(".post").remove();
		currentPost.remove()

		publishedList.appendChild(currentPost)

	}
}
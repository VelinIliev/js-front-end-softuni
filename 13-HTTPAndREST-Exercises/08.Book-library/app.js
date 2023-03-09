function attachEvents() {

	const URL = 'http://localhost:3030/jsonstore/collections/books';
	const loadBooksBtn = document.getElementById('loadBooks');
	const tableBody = document.querySelector('tbody');
	const submitBtn = document.querySelector('#form button');
	const title = document.querySelector('input[name="title"]');
	const author = document.querySelector('input[name="author"]');
	let idToUpdate = ''


	function displayBooks(data) {
		tableBody.innerHTML = '';
		
		Object.entries(data).forEach(book => {
			// console.log(book[0]);
			tableBody.innerHTML += `
				<tr id="${book[0]}">
					<td>${book[1].title}</td>
					<td>${book[1].author}</td>
					<td>
						<button>Edit</button>
						<button>Delete</button>
					</td>
				</tr>
			`
		})
	}

	function getData() {
		fetch(URL)
		.then(response => response.json())
		.then(data => displayBooks(data))
		.catch(error => console.log(error))	
	}

	function updateBook() {
		// console.log(idToUpdate);
		fetch(`${URL}/${idToUpdate}`, {
			method: "PUT",
			body: JSON.stringify({
				"author": author.value,
				"title": title.value,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(getData)
		.catch((error) => console.log(error))
		author.value = '';
		title.value = '';
		submitBtn.textContent = 'Submit';
	}

	function editBook(id, parrent) {
		submitBtn.textContent = 'Save';
		title.value = parrent.children[0].textContent;
		author.value = parrent.children[1].textContent;
		idToUpdate = id
	}

	function deleteBook(id) {
		fetch(`${URL}/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(getData())
        .catch(error => console.log(error));
	}
	
	function createBook() {
		// console.log(title.value);
		// console.log(author.value);
		if (title.value && author.value) {
			fetch(URL, {
				method: "POST",
				body: JSON.stringify({
					"author": author.value,
					"title": title.value,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			.then(getData)
			.catch((error) => console.log(error))
			author.value = '';
			title.value = '';
		}
	}

	
	loadBooksBtn.addEventListener('click', getData);
	submitBtn.addEventListener('click', () => {
		if (submitBtn.textContent === 'Save') {
			updateBook()
		} else {
			createBook()
		}
	});
	// document.addEventListener('DOMContentLoaded', getData)
	document.addEventListener('click', e => {
		if (e.target.textContent === 'Edit'){
			let id  = e.target.parentNode.parentNode.id;
			let parrent = e.target.parentNode.parentNode;
			editBook(id, parrent)
		};
		if (e.target.textContent === 'Delete'){
			let id  = e.target.parentNode.parentNode.id;
			let parrent = e.target.parentNode.parentNode;
			deleteBook(id, parrent)
		};
	})

}

attachEvents();
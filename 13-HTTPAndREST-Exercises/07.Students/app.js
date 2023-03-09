function attachEvents() {

	const URL = 'http://localhost:3030/jsonstore/collections/students';

	const firstName = document.querySelector('input[name="firstName"]');
	const lastName = document.querySelector('input[name="lastName"]');
	const facultyNumber = document.querySelector('input[name="facultyNumber"]');
	const grade = document.querySelector('input[name="grade"]');
	const submitBtn = document.getElementById('submit');
	const table = document.querySelector('#results tbody');
	
	function displayStudents(data) {
		table.innerHTML = '';
		Object.values(data).forEach(student => {
			table.innerHTML += `
				<tr>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.facultyNumber}</td>
                    <td>${student.grade}</td>
                </tr>
			`
		});
	}

	function getData() {
		fetch(URL)
		.then(response => response.json())
		.then(data => displayStudents(data))
		.catch(error => console.log(error))
	}
	

	function addStudent() {
		if (firstName.value && lastName.value && facultyNumber.value && grade.value) {
			fetch(URL, {
				method: "POST",
				body: JSON.stringify({
					"firstName": firstName.value,
					"lastName": lastName.value,
					"facultyNumber": facultyNumber.value,
					"grade": grade.value,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			.then(getData)
			.catch((error) => console.log(error))
			firstName.value = '';
			lastName.value = '';
			facultyNumber.value = '';
			grade.value = '';
		}
		
	}

	submitBtn.addEventListener('click', addStudent);
	document.addEventListener('DOMContentLoaded', getData)
}

attachEvents();
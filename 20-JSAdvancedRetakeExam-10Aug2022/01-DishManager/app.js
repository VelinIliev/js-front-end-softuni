window.addEventListener("load", solve);

function solve() {
	const firstName = document.getElementById('first-name');
	const lastName = document.getElementById('last-name');
	const age = document.getElementById('age');
	const genderSelect = document.getElementById("genderSelect");
	const taskDescription = document.getElementById('task');
	const submitBtn = document.getElementById("form-btn");
	const inProgress = document.getElementById('in-progress');
	const progressCount = document.getElementById("progress-count");
	const finished = document.getElementById("finished");
	const clearBtn = document.getElementById("clear-btn");

	submitBtn.addEventListener("click", (e) => {
		e.preventDefault()
		// console.log(progressCount.textContent * 1 + 1);

		if (firstName.value && lastName.value && age.value && taskDescription.value){
			progressCount.textContent  = progressCount.textContent * 1 + 1

			let liEl = document.createElement("LI");
			liEl.className = "each-line";
			inProgress.appendChild(liEl);

			let articleEl = document.createElement("ARTICLE");
			liEl.appendChild(articleEl);

			let nameEl = document.createElement("H4");
			nameEl.textContent = `${firstName.value} ${lastName.value}`;
			articleEl.appendChild(nameEl)

			let gendreAgeEl = document.createElement("P");
			gendreAgeEl.textContent = `${genderSelect.value}, ${age.value}`;
			articleEl.appendChild(gendreAgeEl)

			let descrEl = document.createElement("P");
			descrEl.textContent = `Dish description: ${taskDescription.value}`;
			articleEl.appendChild(descrEl)

			let editBtn = document.createElement("BUTTON");
			editBtn.className = 'edit-btn';
			editBtn.textContent = "Edit";
			liEl.appendChild(editBtn);

			let completeBtn = document.createElement("BUTTON");
			completeBtn.className = 'complete-btn';
			completeBtn.textContent = "Mark as complete";
			liEl.appendChild(completeBtn);

			editBtn.addEventListener('click', editTask);
			completeBtn.addEventListener('click', completeTask);

			firstName.value = '';
			lastName.value = ''
			age.value = '';
			taskDescription.value = '';
		}

		function editTask(e) {
			// console.log("Edit");
			let currentTask = e.currentTarget.parentNode;
			[firstName.value, lastName.value] = currentTask.querySelector("h4").textContent.split(" ");
			let data = currentTask.querySelector("p:nth-child(2)").textContent.split(", ");
			age.value = data[1] * 1;
			genderSelect.value = data[0];
			taskDescription.value = currentTask.querySelector("p:nth-child(3)").textContent.replace('Dish description: ','');;

			progressCount.textContent  = progressCount.textContent * 1 - 1;
			currentTask.remove()

		}

		function completeTask(e) {
			let currentTask = e.currentTarget.parentNode;
			currentTask.remove();
			currentTask.querySelector('.edit-btn').remove();
			currentTask.querySelector('.complete-btn').remove();
			finished.appendChild(currentTask);
			progressCount.textContent  = progressCount.textContent * 1 - 1;
		}
		
	})

	clearBtn.addEventListener('click', ()=>{
		finished.innerHTML = ''
	})
}

// Unexpected error: Dish description is invalid: expected 
// 'Biscuits n gravy. An irresistible Southern favorite, biscuits and gravy would be a cliche if they werent so darned delicious.' 
// to equal 
// 'Dish description: 
// Biscuits n gravy. An irresistible Southern favorite, biscuits and gravy would be a cliche if they werent so darned delicious.'

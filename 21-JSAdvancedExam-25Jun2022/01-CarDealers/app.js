window.addEventListener("load", solve);

function solve() {
  	const make = document.getElementById('make');
	const model = document.getElementById('model');
	const year = document.getElementById('year');
	const fuel = document.getElementById("fuel");
	const originalCost = document.getElementById('original-cost');
	const sellingPrice = document.getElementById('selling-price');
	const publishBtn = document.getElementById('publish');
	const tableBody = document.getElementById('table-body');
	const soldCarsList = document.getElementById('cars-list');
	const profitTag = document.getElementById('profit')

	publishBtn.addEventListener("click", (e) => {
		e.preventDefault()
		if (make.value && 
			model.value && 
			year.value && 
			fuel.value && 
			originalCost.value && 
			sellingPrice.value &&
			originalCost.value * 1 <= sellingPrice.value * 1){
			
			let trEl = document.createElement("TR");
			trEl.className = 'row';
			tableBody.appendChild(trEl);

			let makeEl = document.createElement("TD");
			makeEl.textContent = make.value;
			trEl.appendChild(makeEl);

			let modelEl = document.createElement("TD");
			modelEl.textContent = model.value;
			trEl.appendChild(modelEl);

			let yearlEl = document.createElement("TD");
			yearlEl.textContent = year.value;
			trEl.appendChild(yearlEl);

			let fuelEl = document.createElement("TD");
			fuelEl.textContent = fuel.value;
			trEl.appendChild(fuelEl);

			let originalEl = document.createElement("TD");
			originalEl.textContent = originalCost.value;
			trEl.appendChild(originalEl);

			let sellingEl = document.createElement("TD");
			sellingEl.textContent = sellingPrice.value;
			trEl.appendChild(sellingEl);

			let buttnosEl = document.createElement("TD");
			trEl.appendChild(buttnosEl);

			let editBtn = document.createElement("BUTTON");
			editBtn.className = 'action-btn edit';
			editBtn.textContent = "Edit";
			buttnosEl.appendChild(editBtn);

			let sellBtn = document.createElement("BUTTON");
			sellBtn.className = 'action-btn sell';
			sellBtn.textContent = "Sell";
			buttnosEl.appendChild(sellBtn);
			
			editBtn.addEventListener('click', editCar);
			sellBtn.addEventListener('click', sellCar);
			
			make.value = '';
			model.value = ''; 
			year.value  = '';
			fuel.value = '';
			originalCost.value = ''; 
			sellingPrice.value = '';
		}
		
	})

	function editCar(e) {
		currentCar = e.currentTarget.parentNode.parentNode;

		make.value = currentCar.firstChild.textContent;
		model.value = currentCar.querySelector("td:nth-child(2)").textContent;
		year.value = currentCar.querySelector("td:nth-child(3)").textContent;
		fuel.value = currentCar.querySelector("td:nth-child(4)").textContent;
		originalCost.value = currentCar.querySelector("td:nth-child(5)").textContent;
		sellingPrice.value = currentCar.querySelector("td:nth-child(6)").textContent;

		currentCar.remove()
	}
	function sellCar(e) {
		currentCar = e.currentTarget.parentNode.parentNode;
		let sellMake = currentCar.firstChild.textContent;;
		let sellModel = currentCar.querySelector("td:nth-child(2)").textContent;
		let sellYear = currentCar.querySelector("td:nth-child(3)").textContent;
		let profit = currentCar.querySelector("td:nth-child(6)").textContent * 1 -  currentCar.querySelector("td:nth-child(5)").textContent * 1;
	
		let liEl = document.createElement("LI");
		liEl.className = 'each-list';
		soldCarsList.appendChild(liEl);

		let carEl = document.createElement("SPAN");
		carEl.textContent = `${sellMake} ${sellModel}`
		liEl.appendChild(carEl);

		let yearEl = document.createElement("SPAN");
		yearEl.textContent = `${sellYear}`
		liEl.appendChild(yearEl);

		let profitEL = document.createElement("SPAN");
		profitEL.textContent = `${profit}`
		liEl.appendChild(profitEL);

		profitTag.textContent = `${(profitTag.textContent * 1 + profit).toFixed(2)}`

		currentCar.remove()
	}

}

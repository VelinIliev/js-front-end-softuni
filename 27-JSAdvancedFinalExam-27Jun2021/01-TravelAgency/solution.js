window.addEventListener('load', solution);

function solution() {
  	const fname = document.getElementById('fname');
	const email = document.getElementById('email');
	const phone = document.getElementById('phone');
	const address = document.getElementById('address');
	const code = document.getElementById('code');
	const submitBtn = document.getElementById('submitBTN');
	const infoPreview = document.getElementById('infoPreview');
	const editBtn = document.getElementById('editBTN');
	const continueBtn = document.getElementById('continueBTN');
	const block = document.getElementById('block');

	submitBtn.addEventListener("click", (e) => {
		e.preventDefault()
		if (fname.value && email.value){

			let fnameEl = document.createElement("LI");
			fnameEl.textContent = `Full Name: ${fname.value}`;
			infoPreview.appendChild(fnameEl);

			let emailEl = document.createElement("LI");
			emailEl.textContent = `Email: ${email.value}`;
			infoPreview.appendChild(emailEl);

			let phoneEl = document.createElement("LI");
			phoneEl.textContent = `Phone Number: ${phone.value}`;
			infoPreview.appendChild(phoneEl);

			let addressEl = document.createElement("LI");
			addressEl.textContent = `Address: ${address.value}`;
			infoPreview.appendChild(addressEl);

			let codeEl = document.createElement("LI");
			codeEl.textContent = `Postal Code: ${code.value}`;
			infoPreview.appendChild(codeEl);

			fname.value = '';
			email.value = '';
			phone.value = '';
			address.value = '';
			code.value = '';
			
			submitBtn.disabled = true;
			editBtn.disabled = false;
			continueBtn.disabled = false;
		}
	})
	editBtn.addEventListener("click", (e) => {
		console.log();
		fname.value = infoPreview.querySelector("li:nth-child(1)").textContent.replace("Full Name: " , "");
		email.value = infoPreview.querySelector("li:nth-child(2)").textContent.replace("Email: " , "");
		phone.value = infoPreview.querySelector("li:nth-child(3)").textContent.replace("Phone Number: " , "");
		address.value = infoPreview.querySelector("li:nth-child(4)").textContent.replace("Address: " , "");
		code.value = infoPreview.querySelector("li:nth-child(5)").textContent.replace("Postal Code: " , "");
		
		infoPreview.innerHTML = '';

		submitBtn.disabled = false;
		editBtn.disabled = true;
		continueBtn.disabled = true;
	});

	continueBtn.addEventListener('click', ()=>{
		block.innerHTML = '<h3>Thank you for your reservation!</h3>'
	})
}

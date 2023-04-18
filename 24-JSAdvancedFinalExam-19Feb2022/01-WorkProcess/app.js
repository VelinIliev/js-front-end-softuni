function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    const tbody = document.getElementById('tbody');
    const salarySum = document.getElementById('sum');

    addWorkerBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (firstName.value && lastName.value && email.value && birth.value && position.value && salary.value){

            let trEl = document.createElement("TR");
            tbody.appendChild(trEl);

            let fNameEl = document.createElement("TD");
            fNameEl.textContent = firstName.value;
            trEl.appendChild(fNameEl);

            let lNameEl = document.createElement("TD");
            lNameEl.textContent = lastName.value;
            trEl.appendChild(lNameEl);

            let emailEl = document.createElement("TD");
            emailEl.textContent = email.value;
            trEl.appendChild(emailEl);

            let birthEl = document.createElement("TD");
            birthEl.textContent = birth.value;
            trEl.appendChild(birthEl);

            let positionEl = document.createElement("TD");
            positionEl.textContent = position.value;
            trEl.appendChild(positionEl);

            let salaryEl = document.createElement("TD");
            salaryEl.textContent = salary.value;
            trEl.appendChild(salaryEl);
            
            let buttonsEl = document.createElement("TD");
            trEl.appendChild(buttonsEl);

            let firedBtn = document.createElement("BUTTON");
            firedBtn.className = 'fired';
            firedBtn.textContent = 'Fired';
            buttonsEl.appendChild(firedBtn);

            let editdBtn = document.createElement("BUTTON");
            editdBtn.className = 'edit';
            editdBtn.textContent = 'Edit';
            buttonsEl.appendChild(editdBtn);

            firedBtn.addEventListener("click", fireEmpolyee);
            editdBtn.addEventListener("click", editEmpolyee);

            salarySum.textContent = (salarySum.textContent * 1 + salary.value * 1).toFixed(2)

            clearInput()
        }
    })

    function clearInput() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }

    function fireEmpolyee(e) {
        let currentEmployee = e.currentTarget.parentNode.parentNode;

        let cSalary= currentEmployee.querySelector('td:nth-child(6)').textContent;

        salarySum.textContent = (salarySum.textContent * 1 - cSalary * 1).toFixed(2);
        
        currentEmployee.remove()

    }

    function editEmpolyee(e) {
        let currentEmployee = e.currentTarget.parentNode.parentNode;
        let fName = currentEmployee.querySelector('td:nth-child(1)').textContent;
        let lName = currentEmployee.querySelector('td:nth-child(2)').textContent;
        let cEmail = currentEmployee.querySelector('td:nth-child(3)').textContent;
        let cBirth = currentEmployee.querySelector('td:nth-child(4)').textContent;
        let cPosition = currentEmployee.querySelector('td:nth-child(5)').textContent;
        let cSalary= currentEmployee.querySelector('td:nth-child(6)').textContent;

        firstName.value = fName;
        lastName.value = lName;
        email.value = cEmail;
        birth.value = cBirth;
        position.value = cPosition;
        salary.value = cSalary;

        salarySum.textContent = (salarySum.textContent * 1 - cSalary * 1).toFixed(2)

        currentEmployee.remove()
    }

}
solve()
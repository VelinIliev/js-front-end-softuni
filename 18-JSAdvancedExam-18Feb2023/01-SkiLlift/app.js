window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    const infoTicket = document.querySelector('#info-ticket .ticket-info-list');
    const confirmTicket = document.querySelector('#confirm-ticket-section .confirm-ticket');
    const main = document.getElementById('main')

    let tempForm = [];

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (firstName.value && lastName.value && peopleCount.value && fromDate.value && daysCount.value) {

            tempForm = [firstName.value, lastName.value, peopleCount.value, fromDate.value, daysCount.value]

            const liEl = document.createElement("LI");
            liEl.className = 'ticket';
            infoTicket.appendChild(liEl);

            const articleEL = document.createElement("ARTICLE");
            liEl.appendChild(articleEL);

            const h3EL = document.createElement("H3");
            h3EL.textContent = `Name: ${firstName.value} ${lastName.value}`;
            articleEL.appendChild(h3EL);

            const dateEl = document.createElement("P");
            dateEl.textContent = `From date: ${fromDate.value}`;
            articleEL.appendChild(dateEl);

            const daysEl = document.createElement("P");
            daysEl.textContent = `For ${daysCount.value} days`;
            articleEL.appendChild(daysEl);

            const peoplesEL = document.createElement("P");
            peoplesEL.textContent = `For ${peopleCount.value} people`;
            articleEL.appendChild(peoplesEL);

            const editBtn = document.createElement("BUTTON");
            editBtn.className = "edit-btn";
            editBtn.textContent = "Edit";
            liEl.appendChild(editBtn);
            
            const continueBtn = document.createElement("BUTTON");
            continueBtn.className = "continue-btn";
            continueBtn.textContent = "Continue";
            liEl.appendChild(continueBtn);

            editBtn.addEventListener('click', editForm)
            continueBtn.addEventListener("click", () => {
                continueForm(liEl)
            })
            
            firstName.value = '';
            lastName.value = '';
            peopleCount.value = '';
            fromDate.value = '';
            daysCount.value = '';
            nextBtn.disabled = true;
        }
        
    })

    function editForm(e) {
        e.currentTarget.parentNode.remove();
        firstName.value = tempForm[0];
        lastName.value = tempForm[1];
        peopleCount.value = tempForm[2];
        fromDate.value = tempForm[3];
        daysCount.value = tempForm[4];
        nextBtn.disabled = false;
    }

    function continueForm(liEl) {
        // console.log(liEl);
        liEl.querySelector('.edit-btn').remove();
        liEl.querySelector('.continue-btn').remove();

        const confirmBtn = document.createElement("BUTTON");
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        liEl.appendChild(confirmBtn);
        
        const cancelBtn = document.createElement("BUTTON");
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        liEl.appendChild(cancelBtn);

        confirmTicket.appendChild(liEl);

        confirmBtn.addEventListener("click", confirmTicketForm);
        cancelBtn.addEventListener("click", () => {
            cancelTicket(liEl)
        });
    }
   
    function confirmTicketForm(e) {
        console.log(e.currentTarget.parentNode);
        
        main.innerHTML = '';

        const h1El = document.createElement("H1");
        h1El.id = 'thank-you';
        h1El.textContent = "Thank you, have a nice day!";
        main.appendChild(h1El);

        const backBtn = document.createElement("BUTTON");
        backBtn.id = 'back-btn';
        backBtn.textContent = "Back"
        main.appendChild(backBtn);

        backBtn.addEventListener('click', ()=> {
            location.reload();
        })
    }

    function cancelTicket(liEl) {
        liEl.remove();
        nextBtn.disabled = false;
        tempForm = [];
    }
}


    
    

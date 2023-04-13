window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const infoReservations = document.querySelector('#info-reservations .info-list');
    const confirmReservations = document.querySelector('#confirm-reservations .confirm-list');
    const verification = document.getElementById('verification');

    let tempData = []

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let validDate = false;

        let date1 = new Date(dateIn.value).getTime();
        let date2 = new Date(dateOut.value).getTime();
        if (date2 > date1) {
            validDate = true;
        }

        if (firstName.value && lastName.value && validDate && peopleCount.value) {

            verification.textContent = ''
            
            tempData = [firstName.value, lastName.value, dateIn.value, dateOut.value, peopleCount.value]

            let liEl = document.createElement("LI");
            liEl.className = 'reservation-content';
            infoReservations.appendChild(liEl);

            let articleEl = document.createElement("ARTICLE");
            liEl.appendChild(articleEl);

            let nameEL = document.createElement("H3");
            nameEL.textContent = `Name: ${firstName.value} ${lastName.value}`
            articleEl.appendChild(nameEL)

            let fromDateEL = document.createElement("P")
            fromDateEL.textContent = `From date: ${dateIn.value}`;
            articleEl.appendChild(fromDateEL);

            let toDateEL = document.createElement("P")
            toDateEL.textContent = `To date: ${dateOut.value}`;
            articleEl.appendChild(toDateEL);

            let forPeopleEl = document.createElement("P");
            forPeopleEl.textContent = `For ${peopleCount.value} people`;
            articleEl.appendChild(forPeopleEl);

            let editBtn = document.createElement("BUTTON");
            editBtn.className = 'edit-btn';
            editBtn.textContent = 'Edit';
            liEl.appendChild(editBtn);

            let continueBtn = document.createElement("BUTTON");
            continueBtn.className = 'continue-btn';
            continueBtn.textContent = 'Continue';
            liEl.appendChild(continueBtn);

            editBtn.addEventListener("click", editReservation);
            continueBtn.addEventListener("click", continueReservation);

            nextBtn.disabled = true;

            firstName.value = '';
            lastName.value = '';
            dateIn.value = '';
            dateOut.value = '';
            peopleCount.value = '';
        }
    })
    function editReservation(e) {
        e.currentTarget.parentNode.remove();

        nextBtn.disabled = false;

        firstName.value = tempData[0];
        lastName.value = tempData[1];
        dateIn.value = tempData[2];
        dateOut.value = tempData[3];
        peopleCount.value = tempData[4];
    }

    function continueReservation(e) {
        liEl = e.currentTarget.parentNode;
        liEl.remove();
        
        liEl.querySelector('.edit-btn').remove();
        liEl.querySelector('.continue-btn').remove();

        let confirmBtn = document.createElement("BUTTON");
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Confirm';
        liEl.appendChild(confirmBtn);

        let cancelBtn = document.createElement("BUTTON");
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';
        liEl.appendChild(cancelBtn);

        confirmBtn.addEventListener("click", confirmReservation);
        cancelBtn.addEventListener("click", cancelReservation)

        confirmReservations.appendChild(liEl);

    }
    function confirmReservation(e) {
        e.currentTarget.parentNode.remove();
        nextBtn.disabled = false;
        verification.className = 'reservation-confirmed'
        verification.textContent = 'Confirmed.'
    }

    function cancelReservation(e) {
        e.currentTarget.parentNode.remove();
        nextBtn.disabled = false;
        verification.className = 'reservation-cancelled'
        verification.textContent = 'Cancelled.'
        
    }
}



    
    

function solve() {
    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const listOfMails = document.getElementById('list');
    const sentList = document.querySelector(".sent-list");
    const deleteList = document.querySelector(".delete-list");


    addBtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        if (recipientName.value && title.value && message.value) {
            let liEl = document.createElement("LI");
            listOfMails.appendChild(liEl);

            let titleEl = document.createElement("H4");
            titleEl.textContent = `Title: ${title.value}`;
            liEl.appendChild(titleEl);

            let recipientEl = document.createElement("H4");
            recipientEl.textContent = `Recipient Name: ${recipientName.value}`;
            liEl.appendChild(recipientEl);

            let messageEl = document.createElement("SPAN");
            messageEl.textContent = message.value;
            liEl.appendChild(messageEl);

            let buttonsEL = document.createElement("DIV");
            buttonsEL.id = 'list-action';
            liEl.appendChild(buttonsEL);

            let sendBtn = document.createElement("BUTTON");
            sendBtn.id = "send";
            sendBtn.type = "submit";
            sendBtn.textContent = 'Send';
            buttonsEL.appendChild(sendBtn);

            let deleteBtn = document.createElement("BUTTON");
            deleteBtn.id = "delete";
            deleteBtn.type = "sunbmit";
            deleteBtn.textContent = 'Delete';
            buttonsEL.appendChild(deleteBtn);

            sendBtn.addEventListener("click", sendEmail);
            deleteBtn.addEventListener("click", deletEmail);
            
            resetForm()
        }
    });
    
    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        resetForm();
    });

    function resetForm() {
        recipientName.value = '';
        title.value = '';
        message.value = '';
        
    }
    function sendEmail(e) {
        let currentMail = e.currentTarget.parentNode.parentNode;
        let currentTitle = currentMail.querySelector("h4:nth-child(1)").textContent.replace('Title: ','');
        let currentRescipient = currentMail.querySelector("h4:nth-child(2)").textContent.replace('Recipient Name: ','');

        let liEl = document.createElement("LI");
        sentList.appendChild(liEl);

        let toEl = document.createElement("SPAN");
        toEl.textContent = `To: ${currentRescipient}`;
        liEl.appendChild(toEl);

        let titleEl = document.createElement("SPAN");
        titleEl.textContent = `Title: ${currentTitle}`;
        liEl.appendChild(titleEl);

        let buttonsEl = document.createElement("DIV");
        buttonsEl.className = 'btn';
        liEl.appendChild(buttonsEl);

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.className = "delete";
        deleteBtn.type = "submit";
        deleteBtn.textContent = 'Delete';
        buttonsEl.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", deletEmail);
        
        currentMail.remove()

    };

    function deletEmail(e) {
        currentMail = e.currentTarget.parentNode.parentNode;
        let currentTitle = '';
        let currentRescipient = '';

        if (e.currentTarget.parentNode.id === 'list-action') {
            currentTitle = currentMail.querySelector("h4:nth-child(1)").textContent.replace('Title: ','');
            currentRescipient = currentMail.querySelector("h4:nth-child(2)").textContent.replace('Recipient Name: ','');
        } else if (e.currentTarget.parentNode.className === 'btn') {
            currentRescipient = currentMail.querySelector("span:nth-child(1)").textContent.replace('To: ','');
            currentTitle = currentMail.querySelector("span:nth-child(2)").textContent.replace('Title: ','');
        }
        console.log(currentTitle);
        console.log(currentRescipient);

        let liEl = document.createElement("LI");
        deleteList.appendChild(liEl);

        let toEl = document.createElement("SPAN");
        toEl.textContent = `To: ${currentRescipient}`;
        liEl.appendChild(toEl);

        let titleEl = document.createElement("SPAN");
        titleEl.textContent = `Title: ${currentTitle}`
        liEl.appendChild(titleEl);

        currentMail.remove()
    }
}
solve()
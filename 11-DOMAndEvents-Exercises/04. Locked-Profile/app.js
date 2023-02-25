function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]
        button.addEventListener('click', (e) => {

            let hiddenInfo = button.parentNode.children[9];
            let lockedInput = button.parentNode.children[4]

            if (button.innerHTML === 'Show more' && lockedInput.checked === true) {
                button.innerHTML = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else if (button.innerHTML === 'Hide it' && lockedInput.checked === true) {
                button.innerHTML = 'Show more'
                hiddenInfo.style.display = 'none';
            }
        })
    }
}
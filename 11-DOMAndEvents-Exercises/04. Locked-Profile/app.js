function lockedProfile() {
    let buttons = [...document.querySelectorAll('button')];
    buttons.forEach(button => {
        button.addEventListener('click',toggleInfo)
    })

    function toggleInfo(e) {
        let button = e.currentTarget
        let hiddenInfo = button.parentNode.children[9];
        let lockedInput = button.parentNode.children[4];

        if (button.textContent === 'Show more' && lockedInput.checked === true) {
            button.textContent = 'Hide it';
            hiddenInfo.style.display = 'block';
        } else if (button.textContent === 'Hide it' && lockedInput.checked === true) {
            button.textContent = 'Show more'
            hiddenInfo.style.display = 'none';
        }
    }
}
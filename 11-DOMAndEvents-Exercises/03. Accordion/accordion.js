function toggle() {
    const button = document.querySelector('#accordion .button');
    const extra = document.querySelector('#extra')

    if (button.textContent.toLowerCase() === 'more') {
        button.textContent = "Less"
        extra.style.display = 'block'
    } else {
        button.textContent = "More"
        extra.style.display = 'none'
    }
}
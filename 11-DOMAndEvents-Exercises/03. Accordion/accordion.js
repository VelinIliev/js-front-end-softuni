function toggle() {
    console.log('TODO:...');
    const button = document.querySelector('#accordion .button');
    const extra = document.querySelector('#extra')

    if (button.innerHTML.toLowerCase() === 'more') {
        button.innerHTML = "Less"
        extra.style.display = 'block'
    } else {
        button.innerHTML = "More"
        extra.style.display = 'none'
    }
}
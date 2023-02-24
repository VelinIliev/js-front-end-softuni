function focused() {
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', (e) => {
            e.target.parentElement.className = "focused";
        });
        inputs[i].addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove("focused")
        });
    }
}


function validate() {
    const email = document.getElementById('email');

    email.addEventListener('change', () => {
        let text = email.value;
        let pattern = /[a-zA-Z]{1,}@[a-zA-Z]{1,}.[a-zA-Z]{1,}/g
        
        if (pattern.test(text)) {
            email.classList.remove('error')
        } else {
            email.classList.add('error')
        }
    })
}
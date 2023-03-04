function main(password) {
    let isValid = true

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false
    }
    
    let countNumbers = 0;
    let otherChars = false;

    for (let i = 0; i < password.length; i++) {
        if ((/[0-9a-zA-Z]/).test(password[i])) {
            if ((/[0-9]/).test(password[i])) {
                countNumbers += 1
            }
        } else {
            otherChars = true;
        }
    }
    if (otherChars) {
        console.log('Password must consist only of letters and digits');
        isValid = false
    }
    if (countNumbers < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    } 
}

main('logIn')
console.log();
main('MyPass123')
console.log();
main('Pa$s$s')
console.log();
main('')
function main(params) {
    let username = params.shift()
    for (let index = 0; index < params.length; index++) {
        let reversed = [...params[index]].reverse().join("");
        if (reversed === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else if  (index == 3) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
}

main(['Acer','login','go','let me in','recA'])
main(['momo','omom'])
main(['sunny','rainy','cloudy','sunny','not sunny'])
function main(params) {
    params.forEach(number => {
        let isPalindrome = true
        let strNumber = String(number).split("")
        let center = Math.floor(strNumber.length / 2);

        for (let i = 0; i < center; i++) {
            let start = strNumber.shift();
            let end = strNumber.pop()
            if (start !== end ) {
                isPalindrome = false
            }
        }
        
        console.log(isPalindrome);
    });
}

main([123,323,421,121])
main([32,2,232,1010])
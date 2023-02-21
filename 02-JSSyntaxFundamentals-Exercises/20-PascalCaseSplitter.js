function main(input) {
    let output = [];
    let current_word = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()){
            if (current_word) {
                output.push(current_word)
            }
            current_word = ''
        }
        current_word += input[i]
        if (i === input.length - 1) {
            output.push(current_word)
        }
        
    }
    console.log(output.join(", "));
}

main('SplitMeIfYouCanHaHaYouCantOrYouCan')
main('HoldTheDoor')
main('ThisIsSoAnnoyingToDo')
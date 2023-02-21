function main(number, ...params) {
    number = number * 1
    params.forEach(el => {
        if (el === 'chop') {
            number /= 2
        } else if (el === 'dice') {
            number = Math.sqrt(number)
        } else if (el === 'spice') {
            number += 1
        } else if (el === 'bake') {
            number *= 3
        } else if (el === 'fillet') {
            number *= .8
        }
        console.log(number);
    });
}

main('32', 'chop', 'chop', 'chop', 'chop', 'chop')
main('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
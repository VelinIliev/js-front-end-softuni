function main(number) {
    let num_to_str = number.toString();
    let all_same = true;
    let etalon = num_to_str[0];
    let numbers_sum = 0
    for (let i = 0; i < num_to_str.length; i++) {
        if (etalon !== num_to_str[i]) {
            all_same = false;
        }
        numbers_sum += num_to_str[i] * 1;
    }
    console.log(all_same);
    console.log(numbers_sum);
}

main(2222222)
main(1234)
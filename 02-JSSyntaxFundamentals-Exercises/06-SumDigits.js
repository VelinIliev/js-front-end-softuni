function main(number) {
    let str_num = number.toString();
    let final_sum = 0
    for (let i = 0; i < str_num.length; i++) {
        final_sum += str_num[i] * 1;
    }
    console.log(final_sum);
}

main(245678)
main(97561)
main(543)
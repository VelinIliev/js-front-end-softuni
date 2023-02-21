function main(start, end) {
    let sum_num = 0;
    let output = '';
    for (let i = start; i <= end; i++) {
        output += `${i} `;
        sum_num += i;
    }
    console.log(`${output}\nSum: ${sum_num}`);
}

main(5, 10)
main(0, 26)
main(50, 60)
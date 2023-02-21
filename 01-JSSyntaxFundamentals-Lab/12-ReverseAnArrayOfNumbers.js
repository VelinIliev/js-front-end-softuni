function main(n, array_of_nums) {
    let output = "" 
    for (let i = n - 1; i >= 0; i--) {
        output += `${array_of_nums[i]} `;
    }
    console.log(output);
}

main(3, [10, 20, 30, 40, 50])
main(4, [-1, 20, 99, 5])
main(2, [66, 43, 75, 89, 47])
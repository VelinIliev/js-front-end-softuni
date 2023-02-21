function main(array) {
    array.sort((a, b) => a-b)
    arrat_length = array.length / 2;
    new_array = []
    for (let i = 0; i < arrat_length ; i++) {
        new_array.push(array.shift())
        new_array.push(array.pop())
    }
    return new_array;
}

main([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
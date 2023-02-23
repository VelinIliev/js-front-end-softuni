function main(input) {
    input = input.toLowerCase().split(" ")
    let words = {}
    input.forEach(el => {
        if (el in words) {
            words[el] += 1
        } else {
            words[el] = 1
        }
    });
    let output = []
    for (let key in words) {
        if (words[key] % 2 !== 0){
            output.push(key)
        }
    }
    console.log(output.join(" "));
}

main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
main('Cake IS SWEET is Soft CAKE sweet Food')
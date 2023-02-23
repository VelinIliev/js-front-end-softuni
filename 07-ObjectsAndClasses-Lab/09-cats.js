function main(input) {
    let cats = []
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }
    input.forEach(el => {
        let [name, age] = el.split(" ");
        cats.push(new Cat(name, age))
    });
    for (let i = 0; i < cats.length; i++) {
        cats[i].meow();
        
    }
}

main(['Mellow 2', 'Tom 5'])
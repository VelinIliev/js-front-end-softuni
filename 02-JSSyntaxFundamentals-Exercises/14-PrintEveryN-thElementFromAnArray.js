function main(array , number) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        if (i % number === 0){
            output.push(array[i])
        }
    }
    return output
}

main(['5',  '20', '31',  '4',  '20'], 2)
main(['dsa',
'asd', 
'test', 
'tset'], 
2
)
main(['1', 
'2',
'3', 
'4', 
'5'], 
6
)
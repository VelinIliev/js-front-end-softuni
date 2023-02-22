function main(source) {
    let totalAmount = 0
    let days = 0

    while (source >= 100) {
        totalAmount += source - 26
        source -= 10
        days += 1
    }
    if (totalAmount >= 26) {
        totalAmount -= 26
    } else {
        totalAmount = 0
    }
    
    console.log(days);
    console.log(totalAmount);
}

main(111)
main(99)
main(450)
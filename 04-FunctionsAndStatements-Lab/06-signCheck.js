function main(...input) {
    let negatives = input.filter(x => x < 0);
    if (negatives.length % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

main( 5,
    12,
   -15
   )
main(
    -6,
-12,
 14
)
main(-1,
    -2,
    -3
    )
function main(goldResources) {
    let bitcoins = 0;
    let first_day;
    
    const bitcon_price = 11949.16;
    const gold_price = 67.51;
    let current_money = 0;

    goldResources.forEach((element, index) => {
        let day = index + 1
        if (day % 3 === 0 ){
            element = element * .7
        }
        current_money += element * gold_price
        if (current_money >= bitcon_price) {
            let buyed_bitcoins = ~~(current_money / bitcon_price);
            bitcoins += buyed_bitcoins
            current_money -= buyed_bitcoins * bitcon_price
            if (!first_day) {
                first_day = day
            }
        }
    });
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (first_day){
        console.log(`Day of the first purchased bitcoin: ${first_day}`);
    } 
    console.log(`Left money: ${current_money.toFixed(2)} lv.`);
}

main([100, 200, 300])
main([50, 100])
main([3124.15, 504.212, 2511.124])
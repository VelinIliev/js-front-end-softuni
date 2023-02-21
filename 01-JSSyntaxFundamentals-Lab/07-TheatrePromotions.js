function main(day, age) {
    let ticket_price;
    let age_error = false
    
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday': ticket_price = 12; break;
            case 'Weekend': ticket_price = 15; break;
            case 'Holiday': ticket_price = 5; break;  
        }
    } else if ( age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday': ticket_price = 18; break;
            case 'Weekend': ticket_price = 20; break;
            case 'Holiday': ticket_price = 12; break;  
        }
    } else if ( age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday': ticket_price = 12; break;
            case 'Weekend': ticket_price = 15; break;
            case 'Holiday': ticket_price = 10; break;  
        }
    } else {
        ticket_price = 'Error!'
        age_error = true

    }
    if (age_error) {
        console.log(ticket_price);
    } else {
        console.log(`${ticket_price}$`);
    }
}

main('Weekday',  42)
main('Holiday', -12)
main('Holiday', 15)
function main(group, ticket_type, day) {
    let ticket_price;
    switch (ticket_type) {
        case 'Students':
            switch (day) {
                case 'Friday': ticket_price = 8.45; break;
                case 'Saturday': ticket_price = 9.80; break;
                case 'Sunday': ticket_price = 10.46; break;
            } break;
        case 'Business':
            switch (day) {
                case 'Friday': ticket_price = 10.90; break;
                case 'Saturday': ticket_price = 15.60; break;
                case 'Sunday': ticket_price = 16.00; break;
            } break;
        case 'Regular':
            switch (day) {
                case 'Friday': ticket_price = 15.00; break;
                case 'Saturday': ticket_price = 20.00; break;
                case 'Sunday': ticket_price = 22.50; break;
            } break;
    }
    total_price = ticket_price * group
    if (ticket_type === 'Students' && group >= 30) {
        total_price *= .85
    } else if (ticket_type === 'Business' && group >= 100) {
        total_price -= ticket_price * 10
    }  else if (ticket_type === 'Regular' && group >= 10 && group <= 20) {
        total_price *= .95
    }
    console.log(`Total price: ${total_price.toFixed(2)}`);
}

main(30, "Students", "Sunday")
main(40, "Regular", "Saturday")
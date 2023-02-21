function main(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December']
    if (month > 12 || month < 1) {
        console.log('Error!');
    } else {
        console.log(`${months[month - 1]}`);
    }
}

main(2)
main(0)
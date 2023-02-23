function main(input) {
    let flights = input.shift()
    let changeStatus = input.shift()
    let status = input.shift()[0]
    let destinations = {}
    flights.forEach(element => {
        let [number, destination] = element.split(" ");
        destinations[number] = {'Destination': destination, 'Status': 'Ready to fly'}
    });
    changeStatus.forEach(element => {
        let [number, status] = element.split(" ")
        if (number in destinations){
            destinations[number]['Status']= status
        }
        
    });
    // console.log(status);
    for (let key in destinations){
        if (destinations[key]['Status'] === status) {
            console.log(destinations[key]);
        }
    }
}

main([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)

main([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)
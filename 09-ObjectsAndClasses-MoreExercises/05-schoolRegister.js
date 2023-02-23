function main(input) {

    function sortObj(obj) {
        return Object.keys(obj).sort((x, y) => x.localeCompare(y)).reduce(function (result, key) {
          result[key] = obj[key];
          return result;
        }, {});
    }

    let classes = {}
    input.forEach(element => {
        let data = element.split(", "); 
        let name = data[0].split(': ')[1];
        let grade = data[1].split(': ')[1] * 1;
        let score = data[2].split(': ')[1] * 1;
        if (score >= 3){
            grade += 1
            if (grade in classes){
                classes[grade]['students'].push(name);
                classes[grade]['scores'].push(score);
            } else {
                classes[grade] = {'students': [name], 'scores': [score]}
            }
        }
        
    });
    classes = sortObj(classes)
    for (let key in classes){
        console.log(`${key} Grade`);
        console.log(`List of students: ${classes[key]['students'].join(", ")}`);
        let averageScore = classes[key]['scores'].reduce((a, b) => a + b) / classes[key]['scores'].length
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    }
}

// main([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]
//     )

main([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    )
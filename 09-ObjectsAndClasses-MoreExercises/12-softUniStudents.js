function main(input) {
    let courses = {}
    input.forEach(el => {
        let newData = el.split(": ");
        if (newData.length > 1) {
            let course = newData[0];
            let places = newData[1] * 1;
            // console.log(course, places);
            if (course in courses) {
                courses[course]['places'] += places
            } else {
                courses[course] = {
                    'name': course,
                    'places': places,
                    'students': []
                }
            }
        } else {
            newData = newData[0].split(" ");
            let [student, credits] = newData.shift().split('[')
            credits = credits.replace("]", "") * 1
            newData.shift(); newData.shift();
            let email = newData.shift()
            newData.shift();
            let course = newData.shift()
            // console.log(student, credits, email, course);
            if (course in courses) {
                if (courses[course]['students'].length < courses[course]['places'] ){
                    courses[course]['students'].push([credits, student, email])
                }
            }
        }
        

    });
    let sortedCources = Object.values(courses).sort((x, y) => y['students'].length - x['students'].length)
    sortedCources.forEach(course => {
        console.log(`${course.name}: ${course.places - course.students.length} places left`);
        let sortedStudents = course.students.sort((x, y) => y[0]-x[0])
        sortedStudents.forEach(student => {
            console.log(`--- ${student[0]}: ${student[1]}, ${student[2]}`);
        });
    });
}

main(
        [
        'JavaBasics: 2', 
        'user1[25] with email user1@user.com joins C#Basics',
        'C#Advanced: 3', 
        'JSCore: 4', 
        'user2[30] with email user2@user.com joins C#Basics', 
        'user13[50] with email user13@user.com joins JSCore', 
        'user1[25] with email user1@user.com joins JSCore', 
        'user8[18] with email user8@user.com joins C#Advanced', 
        'user6[85] with email user6@user.com joins JSCore', 
        'JSCore: 2', 
        'user11[3] with email user11@user.com joins JavaBasics', 
        'user45[105] with email user45@user.com joins JSCore', 
        'user007[20] with email user007@user.com joins JSCore', 
        'user700[29] with email user700@user.com joins JSCore', 
        'user900[88] with email user900@user.com joins JSCore'
        ]
    );
function main(loading) {    
    if (loading < 100){
        console.log(`${loading}% [${"%".repeat(loading/10)}${".".repeat(10 - loading/10)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${loading}% [${"%".repeat(loading/10)}${".".repeat(10 - loading/10)}]`);
    }
}

main(30)
main(50)
main(100)
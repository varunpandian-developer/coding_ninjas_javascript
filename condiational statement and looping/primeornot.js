let limit = 15;

for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    // Check divisibility from 2 to sqrt(i)
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${i} is a prime number`);
    } 
    //else {
    //     console.log(`${i} is not a prime number`);
    // }
}

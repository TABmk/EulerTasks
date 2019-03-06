let isPrime = num => {
    for (let i = 3, s = Math.sqrt(num); i <= s; i += 2) if (num % i === 0) return false;
    return num > 1;
}

let prime = 0;

for (let p = 3, i = 1; i < 10001; p += 2) {
    if (isPrime(p)) {
        i++;
        prime = p;
    }
}

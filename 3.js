let num = 600851475143;
let largestPrimeFactor = 0;

for (let n = 3; n <= num; n++) {
    while (!(num % n)) {
        largestPrimeFactor = n;
        num = num / n;
    }
}

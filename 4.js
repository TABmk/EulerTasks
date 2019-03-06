let p = 0;
// find in X*X
let toFind = 999;

let reversenum = num => {
    num = num + '';
    cursor = 0
    while (true) {
        if (cursor > Math.ceil(num.length) / 2) break;
        else if (num[cursor] !== num[num.length - cursor - 1]) return false;
        else cursor++
    }
    return true;
}

for (let f = toFind; f >= 100; f--) {
    if (f * toFind < p) break;
    for (let s = f; s >= 100; s--) {
        let num = f * s;
        if (num > p) {
            if (reversenum(num)) p = num;
        } else break;
    }
}

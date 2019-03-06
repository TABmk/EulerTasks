// include https://projecteuler.net/project/resources/p022_names.txt

names.sort();

names.reduce((accum, cur, i) => {
    accum += cur.split('').reduce((a, c) => a += (c.charCodeAt(0) - 65) + 1, 0) * (i + 1);
    return accum;
}, 0);

// yea, no math ¯\_(ツ)_/¯

let start = new Date(1901, 1, 3);
let sun = 0;

while (start < new Date(2000, 11, 31)) {
    if (start.getDate() == 1) sun++;
    start.setDate(start.getDate() + 7);
}

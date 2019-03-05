let accum = 0;

for (let num = 1; num < 1000; num++) {
  if (!(num % 3) || !(num % 5)) accum += num;
}

let accum = p1 = p2 = 0;

while (true) {
	[ p1, p2 ] = [ p2, p1 + p2 || 1 ]
	if (p2 > 4000000) break;
	if (!(p2 & 1)) accum += p2;
}

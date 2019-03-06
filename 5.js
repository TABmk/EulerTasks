let num = 20;

// 1...20
let _numbers = [...Array(21).keys()].slice(1);

while (true) {
	if (_numbers.every(d => num % d === 0)) break;
	else num++;
}

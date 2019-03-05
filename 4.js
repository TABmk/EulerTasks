let palindrome = 0;

main : for (let f = 999; f >= 0; f--) {
	for (let s = 999; s >= 0; s--) {
		num = f*s;
		s_num = `${num}`.split('');
		if (s_num.join('') === s_num.reverse().join('')) {
			palindrome = num;
			break main;
		}
	}
}

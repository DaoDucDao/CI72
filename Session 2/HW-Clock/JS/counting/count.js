export function counting(count) {
	let second = Math.floor(count % 60);
	let minute = Math.floor(count / 60);
	if (second < 10) second = '0' + second;
	if (minute < 10) minute = '0' + minute;
	return `${minute} : ${second}`;
}

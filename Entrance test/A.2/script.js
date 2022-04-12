const arrWeight = [60, 40, 55, 75, 64, 85, 94, 65];
const team1 = [];
const team2 = [];
const sumTwoTeam = [];

for (let i = arrWeight.length; i >= arrWeight.length; i--) {
	if (arrWeight.length > 0) {
		team1.push(arrWeight.shift());
	}
	if (arrWeight.length > 0) {
		team2.push(arrWeight.shift());
	}
}

let sumTeam1 = team1.reduce(add, 0);
let sumTeam2 = team2.reduce(add, 0);

function add(accumulator, a) {
	return accumulator + a;
}

function sumUp(a, b) {
	sumTwoTeam.push(a);
	sumTwoTeam.push(b);
	console.log(`OUTPUT: ${sumTwoTeam}`);
}
sumUp(sumTeam1, sumTeam2);

let first = document.getElementById('first');
let second = document.getElementById('second');
let res = document.getElementById('result');
let button = document.getElementById('btn');

let flagArr = [0, 0];

function reset(a, b) {
	if (a === 1) {
		let removeWar = document.getElementById('war-Id');
		res.removeChild(removeWar);
		flagArr[0] = 0;
	} else if (b === 1) {
		let removeTab = document.getElementById('list');
		res.removeChild(removeTab);
		flagArr[1] = 0;
	}
}

function check(a, b) {
	if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) return false;
	return true;
}

button.addEventListener('click', () => {
	const a = parseInt(first.value);
	const b = parseInt(second.value);
	console.log(a);
	console.log(b);
	reset(flagArr[0], flagArr[1]);
	if (check(a, b) == false) {
		let warning = document.createElement('h1');
		warning.setAttribute('id', 'war-Id');
		warning.innerText = 'Invalid Input! Please re-enter valid number!';
		res.appendChild(warning);
		flagArr[0] = 1;
	} else {
		let table = document.createElement('table');
		table.setAttribute('id', 'list');
		let rowCreated = document.createElement('tr');
		let colCount = 0;
		for (let i = a; i < b; i++) {
			let countPrime = 0;
			for (let j = 2; j <= Math.sqrt(i); j++) {
				if (i % j === 0) countPrime++;
			}
			if (countPrime === 0 && i !== 0) {
				let colCreated = document.createElement('td');
				colCreated.innerText = i;
				rowCreated.appendChild(colCreated);
				colCount++;
				if (colCount / 20 === 1) {
					colCount = 0;
					table.appendChild(rowCreated);
					rowCreated = document.createElement('tr');
				}
			}
		}
		table.appendChild(rowCreated);
		res.appendChild(table);
		flagArr[1] = 1;
	}
});

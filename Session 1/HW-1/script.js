let row = document.getElementById('row');
let col = document.getElementById('col');
let button = document.getElementById('btn');
let tab = document.getElementById('tab');

let flagArr = [0, 0];

function reset(a, b) {
	if (a === 1) {
		let warningText = document.getElementById('war-Id');
		tab.removeChild(warningText);
		flagArr[0] = 0;
	} else if (b === 1) {
		let tableCreated = document.getElementById('table-ID');
		tab.removeChild(tableCreated);
		flagArr[1] = 0;
	}
}

button.addEventListener('click', () => {
	const a = parseInt(row.value);
	const b = parseInt(column.value);
	console.log(a);
	console.log(b);
	reset(flagArr[0], flagArr[1]);
	if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
		let warning = document.createElement('h1');
		warning.setAttribute('id', 'war-Id');
		warning.textContent =
			'Please enter valid number for this operation to start properly!';
		tab.appendChild(warning);
		flagArr[0] = 1;
	} else {
		let table = document.createElement('table');
		table.setAttribute('id', 'table-ID');
		for (let i = 0; i < a; i++) {
			let rowCreated = document.createElement('tr');
			for (let j = 0; j < b; j++) {
				let colCreated = document.createElement('td');
				rowCreated.appendChild(colCreated);
			}
			table.appendChild(rowCreated);
		}
		tab.appendChild(table);
		flagArr[1] = 1;
	}
});

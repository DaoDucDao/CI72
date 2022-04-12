let arr1 = [];
let arr2 = [];
let max = 0;
for (let i = 0; i < 10; i++) {
	let num = parseInt(prompt('Enter your numbers:'));
	arr1.push(num);
}
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
	let multipliedResult = arr1[i] * arr1[i + 1];
	arr2.push(multipliedResult);
}
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
	if (arr2[i] > max) {
		max = arr2[i];
	}
}

alert(`The max multiplied result is ${max}`);

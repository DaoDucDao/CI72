let form = document.getElementById('form');
let link = document.getElementById('input').value;
let container = document.getElementById('container');
let result = document.getElementById('result');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let value = e.target.input.value;
	fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
		.then((res) => res.json())
		.then((data) => {
			e.target.input.value = '';
			console.log(data.result.short_link);
			if (!value) {
				result.innerText = 'No link available!';
			} else {
				result.innerText = `The shortened link is: ${data.result.short_link}`;
			}
		});
}

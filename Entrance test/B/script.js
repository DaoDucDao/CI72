let form = document.getElementById('form');
let link = document.getElementById('input').value;
let container = document.getElementById('container');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let value = e.target.input.value;
	fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
		.then((res) => res.json())
		.then((data) => {
			e.target.input.value = '';
			console.log(data.result.short_link);
			let text = document.createElement('p');
			text.innerText = `The link is: ${data.result.short_link}`;
			console.log(text);
			container.appendChild(text);
			return container;
		});
}

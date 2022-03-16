export class MainScreen {
	$container;
	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('main-form', 'd-flex');
		this.$container.innerText = 'MAIN SCREEN';
	}

	render() {
		return this.$container;
	}
}

class InputComponent {
	$container;
	$label;
	$containerInput;
	$input;

	$error;

	constructor(label, name, id, type) {
		this.$container = document.createElement('div');
		this.$container.classList.add();

		this.$label = document.createElement('label');
		this.$label.classList.add();
		this.$label.innerText = label;

		this.$containerInput = document.createElement('div');
		this.$containerInput.classList.add();

		this.$input = document.createElement('input');
		this.$input.classList.add();
		this.$input.innerText = name;
		this.$input.id = id;
		this.$input.type = type;

		this.$error = document.createElement('div');
		this.$error.classList.add();
	}

	setError(message) {
		this.$error.innerText = message;
		this.$error.classList.remove();
		this.$error.classList.add();
	}

	render() {
		this.$container.append(this.$label, this.$containerInput);
		this.$containerInput.append(this.$input, this.$error);

		return this.$container;
	}
}

export default InputComponent;

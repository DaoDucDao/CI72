class ButtonComponent {
	$button;

	constructor(text, classList, type, callBack) {
		this.$button = document.createElement('button');
		this.$button.classList.add(...classList);
		this.$button.type = type;
		this.$button.innerText = text;
		if (callBack) {
			this.$button.addEventListener('click', callBack);
		}
	}
	render() {
		return this.$button;
	}
}

export default ButtonComponent;

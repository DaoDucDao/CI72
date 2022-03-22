class sideBarComponent {
	$container;
	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('sidebar-container', 'd-flex');
		this.$container.innerText = 'Sidebar container';
	}

	render(appEle) {
		return this.$container;
	}
}
export default sideBarComponent;

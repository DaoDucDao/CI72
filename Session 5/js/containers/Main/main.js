import sideBarComponent from './components/sidebar.js';

export class MainScreen {
	$container;

	$paper;

	$sidebarComponent;
	$chatComponent;
	$informationComponent;
	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('main', 'd-flex');

		this.$paper = document.createElement('div');
		this.$paper.classList.add('chat-paper');

		this.$sidebarComponent = new sideBarComponent();
	}

	render(appEle) {
		appEle.appendChild(this.$container);

		this.$container.append(this.$paper);
		this.$paper.append(this.$sidebarComponent.render());
	}
}

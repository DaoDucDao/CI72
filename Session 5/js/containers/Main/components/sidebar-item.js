class SidebarItem {
	$container;

	$imageUrl;

	$subContainer;
	$title;
	$description;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('flex', 'cs-item');
		this.$container.innerText = 'Something';
	}
	render() {
		return this.$container;
	}
}

export default SidebarItem;

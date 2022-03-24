class SidebarItem {
	//Data
	$container;
	$subContainer;
	$actionContainer;
	$popupContainer;

	$imageEle;
	$nameEle;
	$descEle;
	$buttonMore;
	$buttonUpdate;
	$buttonDelete;

	//Data
	$id;
	$nameEle;
	$imageUrl;
	$description;
	$users;
	$creator;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('flex', 'cs-item');

		this.$imageEle = document.createElement('div');
		this.$imageEle.classList.add('cs-avatar');

		this.$subContainer = document.createElement('div');
		this.$subContainer.classList.add('cs-sub-container');

		this.$actionContainer = document.createElement('div');
		this.$actionContainer.classList.add('cs-action-container');

		this.$nameEle = document.createElement('div');
		this.$nameEle.classList.add('cs-name');

		this.$descEle = document.createElement('div');
		this.$descEle.classList.add('cs-desc');

		this.$popupContainer = document.createElement('div');
		this.$popupContainer.classList.add('cs-popup');

		this.$buttonMore = document.createElement('div');
		this.$buttonMore.classList.add('btn-show-more');

		this.$buttonUpdate = document.createElement('div');
		this.$buttonUpdate.classList.add('btn-popup');
		this.$buttonUpdate.innerText = 'Update';

		this.$buttonDelete = document.createElement('div');
		this.$buttonDelete.classList.add('btn-popup');
		this.$buttonDelete.innerText = 'Delete';
	}
	render() {
		this.$container.append(
			this.$imageEle,
			this.$subContainer,
			this.$actionContainer
		);
		this.$subContainer.append(this.$nameEle, this.$descEle);
		this.$actionContainer.append(this.$buttonMore);
		return this.$container;
	}
}

export default SidebarItem;

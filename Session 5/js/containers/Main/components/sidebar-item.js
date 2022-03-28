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

	$item;
	// conversation {
	// 	id,
	// 	name,
	// 	imgURL,
	// 	users,
	// 	creator
	// }

	constructor(conversation) {
		this.$item = conversation;

		this.$container = document.createElement('div');
		this.$container.classList.add('flex', 'cs-item');
		this.$container.addEventListener('mouseleave', this.handleHiddenPopup);

		this.$imageEle = document.createElement('img');
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
		this.$buttonMore.addEventListener('click', this.handleToggle);

		this.$buttonUpdate = document.createElement('div');
		this.$buttonUpdate.classList.add('btn-popup');
		this.$buttonUpdate.innerText = 'Update';

		this.$buttonDelete = document.createElement('div');
		this.$buttonDelete.classList.add('btn-popup');
		this.$buttonDelete.innerText = 'Delete';

		// console.log(conversation);

		//setup data
		this.setUpData(this.$item);
	}

	setUpData = (cons) => {
		console.log(cons);
		this.$id = cons.id;
		this.$name = cons.name;
		this.$imageUrl = cons.imgURL;
		this.$description = `${cons.users.length} user(s)`;
		this.$users = cons.users;
		this.$creator = cons.creator;

		this.fillDataToEle();
	};

	fillDataToEle = () => {
		this.$imageEle.style.backgroundImage = `url(${this.$imageUrl})`; //this bug due to the privacy of the image on fucking Google
		this.$nameEle.innerText = this.$name;
		this.$descEle.innerText = this.$description;
	};

	handleHiddenPopup = () => {
		if (this.$popupContainer.classList.contains('show')) {
			this.$popupContainer.classList.remove('show');
		}
	}; //this function prevent the popup still on when the chat is not hover anymore

	handleToggle = (e) => {
		e.preventDefault();
		if (this.$popupContainer.classList.contains('show')) {
			this.$popupContainer.classList.remove('show');
		} else {
			this.$popupContainer.classList.add('show');
		}
	};

	render() {
		this.$container.append(
			this.$imageEle,
			this.$subContainer,
			this.$actionContainer
		);
		this.$subContainer.append(this.$nameEle, this.$descEle);
		this.$actionContainer.append(this.$buttonMore);

		this.$buttonMore.append(this.$popupContainer);

		this.$popupContainer.append(this.$buttonUpdate, this.$buttonDelete);
		return this.$container;
	}
}

export default SidebarItem;
// 1h49'48s

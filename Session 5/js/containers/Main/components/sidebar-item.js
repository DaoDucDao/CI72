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

	$callBackUpdate;
	$callBackDelete;
	// conversation {
	// 	id,
	// 	name,
	// 	imgURL,
	// 	users,
	// 	creator
	// }

	constructor(conversation, callBackUpdateFunction, callBackDeleteFunction) {
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
		this.$buttonUpdate.addEventListener('click', this.handleUpdate);

		this.$buttonDelete = document.createElement('div');
		this.$buttonDelete.classList.add('btn-popup');
		this.$buttonDelete.innerText = 'Delete';
		this.$buttonDelete.addEventListener('click', this.handleDelete);

		// console.log(conversation);

		//setup data
		this.setUpData(
			conversation,
			callBackUpdateFunction,
			callBackDeleteFunction
		);
	}

	handleUpdate = () => {
		this.$callBackUpdate(this.$item);
	};
	handleDelete = () => {
		this.$callBackDelete(this.$id, this.$name);
	};

	setUpData = (cons, callBackUpdateFunction, callBackDeleteFunction) => {
		this.$id = cons.id;
		this.$name = cons.name;
		this.$imageUrl = cons.imgURL;
		this.$description = `${cons.users.length} user(s)`;
		this.$users = cons.users;
		this.$creator = cons.creator;

		this.$item = cons;

		this.$callBackUpdate = callBackUpdateFunction;
		this.$callBackDelete = callBackDeleteFunction;
		// Here we only fetch the data from firebase, we haven't display them in text, that why we need the function below
		this.fillDataToEle();
	}; //We need this function with 2 callBack so that every time we update the data, we update everything along with it

	fillDataToEle = () => {
		this.$imageEle.style.backgroundImage = `url(${this.$imageUrl})`; //this bug due to the privacy of the image on fucking Google
		this.$nameEle.innerText = this.$name;
		this.$descEle.innerText = this.$description;
	}; //This function render the data in to text

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

	unMount = () => {
		this.$container.remove();
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

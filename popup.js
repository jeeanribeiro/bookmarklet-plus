window.onload = function() {
	var objects;

	const getObjects = () => {
		chrome.storage.sync.get(null, function(items) { objects = items });
	}
	getObjects();

	const renderObjects = () => {
		objects.forEach(object => renderObject(object));
	}
	renderObjects();

	const renderObject = object => {
		const parentFolder = document.getElementById(folderObject.folder);

		const element = document.createElement('div');
		element.classList.add(object.type);
		element.setAttribute('id', object.id);

		const name = document.createElement('p');
		name.classList.add(`${object.type}-name`);
		name.textContent(object.name);

		const actions = document.createElement('div');
		actions.classList.add(`${object.type}-actions`);

		const editIcon = document.createElement('i');
		editIcon.classList.add('fas', 'fa-pen', `edit-${object.type}`);

		const deleteIcon = document.createElement('i');
		deleteIcon.classList.add('fas', 'fa-trash', `delete-${object.type}`);

		actions.appendChild(editIcon);
		actions.appendChild(deleteIcon);

		element.appendChild(name);
		element.appendChild(actions);

		parentFolder.appendChild(element);
	}

	const saveObject = (id, name, type, folder, content) => {
		chrome.storage.sync.set({id, name, type, folder, content});
	};

	document.getElementById('add-folder').addEventListener('mousedown', e => {
		saveObject(objects.length, 'new folder', 'folder', '', null);
	})

	document.querySelectorAll('edit-folder').forEach(function(editFolder) {
		editFolder.addEventListener('mousedown', e => {
			// edit folder name
			const objectId = e.target.objectId,
				folderNameElement = document.querySelector(`.folder-name [data-object-id=${objectId}]`);
		})
	})

	document.querySelectorAll('delete-folder').forEach(function(removeFolder) {
		removeFolder.addEventListener('mousedown', e => {
			const objectId = e.target.objectId,
				folderElement = document.querySelector(`.folder [data-object-id=${objectId}]`);
			folderElement.remove();
			// chrome.storage.sync.remove()
		})
	})

	document.querySelectorAll('.add-script').forEach(function(addScript) {
		addScript.addEventListener('mousedown', e => {
			// add script
			saveObject(objects.length, 'new script', 'script', '', null);
		})
	})

	document.querySelectorAll('.run-script').forEach(function(runScript) {
		runScript.addEventListener('mousedown', e => {
			const objectId = e.target.objectId;
			// run script
		})
	})

	document.querySelectorAll('.edit-script').forEach(function(editScript) {
		editScript.addEventListener('mousedown', e => {
			console.log(event);
			const objectId = e.target.objectId;
			// edit script
		})
	})

	document.querySelectorAll('.delete-script').forEach(function(deleteScript) {
		deleteScript.addEventListener('mousedown', e => {
			// delete script
			const objectId = e.target.objectId,
			scriptElement = document.querySelector(`.script [data-object-id=${objectId}]`);
			scriptElement.remove();
			// chrome.storage.sync.remove()
		})
	})

	document.querySelector('.save-script').addEventListener('mousedown', e => {
		console.log(event);
		// save script
	})

	document.querySelector('.cancel-script').addEventListener('mousedown', e => {
		console.log(event);
		// cancel-script
	})
}

function SaveInfo() {
	// local storage's versions
	let currentStage = localStorage.getItem('currentProgress') || 'space';


	// space
	let SpaceItem = localStorage.getItem('SpaceItem');
	let SpaceParent = localStorage.getItem('SpaceParent');
	let SpaceImage = localStorage.getItem('SpaceImage');

	// measure
	let HeightVal = localStorage.getItem('HeightVal');
	let backWidthVal = localStorage.getItem('back-widthVal');
	let leftWallVal = localStorage.getItem('left-wallVal');
	let rightWallVal = localStorage.getItem('right-wallVal');
	let leftNibVal = localStorage.getItem('left-nibVal');
	let rightNibVal = localStorage.getItem('right-nibVal');
	let WardrobeWidthVal = localStorage.getItem('wardrobe-widthVal');

	//style
	let StyleItem = localStorage.getItem('StyleItem');
	let StyleParent = localStorage.getItem('StyleParent');
	let StyleImage = localStorage.getItem('StyleImage');

	//Doors
	let DoorItem = localStorage.getItem('DoorItem');
	let DoorParent = localStorage.getItem('DoorParent');
	let DoorImage = localStorage.getItem('DoorImage');

	// breakout
	let BreakOutItem = localStorage.getItem('BreakOutItem');

	// photos
	let Picture = localStorage.getItem('Photo');
	let PictureUrl = localStorage.getItem('PhotoURL');

	// give new section yellow
	$(`#${currentStage}`).addClass("progress__yellow");

	switch (currentStage) {
		case 'space':
			setTimeout(() => {
				$(`#${SpaceParent}`).addClass('selected-option')
			}, 10);
			break;
		case 'measure':
			setTimeout(() => {
				$('#Mheight').val(HeightVal);
				$('#back-width').val(backWidthVal);
				$('#left-wall').val(leftWallVal);
				$('#right-wall').val(rightWallVal);
				$('#left-nib').val(leftNibVal);
				$('#right-nib').val(rightNibVal);
				$('#wardrobe-width').val(WardrobeWidthVal);
			}, 10);
			break;
		case 'style':
			setTimeout(() => {
				$(`#${StyleParent}`).addClass('selected-option')
			}, 10)
			break;
		case 'doors':
			setTimeout(() => {
				$(`#${DoorParent}`).addClass('selected-option')
			}, 10)
			break;
		case 'breakout':
			setTimeout(() => {
				$(`#${BreakOutItem}`).prop('checked', true);
			}, 10)
			break;
		case 'photos':
			setTimeout(() => {
				if (PictureUrl !== null) {
					$(`#${Picture}`).attr('src', PictureUrl)
					$(`#Link`).html(`<h3 style="color: #0077c8;">Here is the link to your <a href="${PictureUrl}" style="color: #00a5e0; text-decoration: underline;">image</p>`)
				}
			}, 10)
			break;
		case 'confirm':
			setTimeout(() => {
				$('#height-confirm').text(HeightVal);
				$('#back-width-confirm').text(backWidthVal);
				$('#left-wall-confirm').text(leftWallVal);
				$('#right-wall-confirm').text(rightWallVal);
				$('#left-nib-confirm').text(leftNibVal);
				$('#right-nib-confirm').text(rightNibVal);

				let ChosenSpace;
				let ChosenStyle;
				let ChosenDoor;
				let ChosenBreakout;

				switch (SpaceItem) {
					case 'select-button-str':
						ChosenSpace = 'Straight Wall'
						localStorage.setItem('UserSpace', ChosenSpace);
						break;
					case 'select-button-enc':
						ChosenSpace = 'Enclosed Walls'
						localStorage.setItem('UserSpace', ChosenSpace);
						break;
					case 'select-button-left':
						ChosenSpace = 'Left Corner'
						localStorage.setItem('UserSpace', ChosenSpace);
						break;
					case 'select-button-right':
						ChosenSpace = 'Right Corner'
						localStorage.setItem('UserSpace', ChosenSpace);
						break;
				}

				switch (StyleItem) {
					case 'ModelA':
						ChosenStyle = 'Model A'
						localStorage.setItem('UserStyle', ChosenStyle);
						break;
					case 'ModelB':
						ChosenStyle = 'Model B'
						localStorage.setItem('UserStyle', ChosenStyle);
						break;
					case 'ModelC':
						ChosenStyle = 'Model C'
						localStorage.setItem('UserStyle', ChosenStyle);
						break;
					case 'ModelD':
						ChosenStyle = 'Model D'
						localStorage.setItem('UserStyle', ChosenStyle);
						break;
					case 'ModelE':
						ChosenStyle = 'Model E'
						localStorage.setItem('UserStyle', ChosenStyle);
						break;

				}

				switch (DoorItem) {
					case 'select-button-slimline':
						ChosenDoor = 'Slimline Door'
						localStorage.setItem('UsersDoor', ChosenDoor);
						break;
					case 'select-button-soft-close':
						ChosenDoor = 'Soft Close Door'
						localStorage.setItem('UsersDoor', ChosenDoor);
						break;
					case 'select-button-coloured':
						ChosenDoor = 'Coloured Door'
						localStorage.setItem('UsersDoor', ChosenDoor);
						break;
					case 'select-button-glass':
						ChosenDoor = 'Glass Door'
						localStorage.setItem('UsersDoor', ChosenDoor);
						break;
				}
				switch (BreakOutItem) {
					case null:
						ChosenBreakout = 'No';
						localStorage.setItem('UsersBreakout', ChosenBreakout);
						break;
					case 'EmptySpaceRadio':
						ChosenBreakout = 'No'
						localStorage.setItem('UsersBreakout', ChosenBreakout);
						break;
					case 'ShelvingAndRodsRadio':
						ChosenBreakout = 'Shelving and Rods Only (Free)'
						localStorage.setItem('UsersBreakout', ChosenBreakout);
						break;
					case 'ShelvingWithDoorsRadio':
						ChosenBreakout = 'Shelving and rods with doors ($100 extra)'
						localStorage.setItem('UsersBreakout', ChosenBreakout);
						break;
				}

				let UserSpace = localStorage.getItem('UserSpace');
				let UserStyle = localStorage.getItem('UserStyle');
				let UserDoor = localStorage.getItem('UsersDoor');
				let UserBreakout = localStorage.getItem('UsersBreakout');

				$('#HeadSpace').text(UserSpace);
				$('#HeadStyle').text(UserStyle);
				$('#HeadDoors').text(UserDoor);

				$('#doors-confirm').text(UserDoor);
				$('#breakout-confirm').text(UserBreakout);

				$('#photos-confirm').attr('src', PictureUrl)

				$('#space-img-confirm').attr('src', SpaceImage);
				$('#style-img-confirm').attr('src', StyleImage);
				$('#doors-img-confirm').attr('src', DoorImage);
			}, 10)
			break;
	}
	return currentStage;
}

$(document).ready(() => {

	let stage = SaveInfo();

	$('.WW-content').load(`/pages/WW-Pages/${stage}.html`, (response, status, xhr) => {
		if (status == "error") {
			WizardError(xhr);
		}
	});
});

$('.progress').on('click', 'a', (event) => {
	//get new section & add yellow
	let target = event.target.id;

	// set target as something to save
	localStorage.setItem('currentProgress', `${target}`);

	// local storage's version
	let currentStage = localStorage.getItem('currentProgress');

	// get current element that is yellow
	let past = $('.progress__yellow').attr('id');
	$(`#${past}`).removeClass("progress__yellow");

	// give new section yellow
	$(`#${currentStage}`).addClass("progress__yellow");

	let stage = SaveInfo();

	// load target page
	$('.WW-content').load(`/pages/WW-Pages/${stage}.html`, (response, status, xhr) => {
		let stage = SaveInfo();
		if (status == "error") {
			WizardError(xhr);
		}
	});
});

// space
$('.WW-content').on('click', '.space-btn', (event) => {
	let target = event.target.id;
	let img = $(`#${target}`).parent().find('img').attr('src');
	// set target as something to save
	localStorage.setItem('SpaceItem', target);
	localStorage.setItem('SpaceImage', img)

	// local storage's space
	let SpaceItem = localStorage.getItem('SpaceItem');

	let past = $('.selected-option').attr('id');
	$(`#${past}`).removeClass("selected-option");

	// add colouring too the id
	let parent = $(`#${SpaceItem}`).parent().attr('id')
	localStorage.setItem('SpaceParent', `${parent}`)
	let SpaceParent = localStorage.getItem('SpaceParent');

	$(`#${SpaceParent}`).addClass('selected-option')

})

//  measure
$('.WW-content').on('input', '.length-input', (event) => {
	let targetId = event.target.id;
	let targetVal = event.target.value;

	switch (targetId) {
		case 'Mheight':
			localStorage.setItem('HeightVal', `${targetVal}`);
			break;
		case 'back-width':
			localStorage.setItem('back-widthVal', `${targetVal}`);
			break;
		case 'left-wall':
			localStorage.setItem('left-wallVal', `${targetVal}`);
			break;
		case 'right-wall':
			localStorage.setItem('right-wallVal', `${targetVal}`);
			break;
		case 'left-nib':
			localStorage.setItem('left-nibVal', `${targetVal}`);
			break;
		case 'right-nib':
			localStorage.setItem('right-nibVal', `${targetVal}`);
			break;
		case 'wardrobe-width':
			localStorage.setItem('wardrobe-widthVal', `${targetVal}`);
			break;
	}
	let HeightVal = localStorage.getItem('HeightVal');
	let backWidthVal = localStorage.getItem('back-widthVal');
	let leftWallVal = localStorage.getItem('left-wallVal');
	let rightWallVal = localStorage.getItem('right-wallVal');
	let leftNibVal = localStorage.getItem('left-nibVal');
	let rightNibVal = localStorage.getItem('right-nibVal');
	let WardrobeWidthVal = localStorage.getItem('wardrobe-widthVal');

	$('#wardrobe-width').val(WardrobeWidthVal);
	$('#Mheight').val(HeightVal);
	$('#back-width').val(backWidthVal);
	$('#left-wall').val(leftWallVal);
	$('#right-wall').val(rightWallVal);
	$('#left-nib').val(leftNibVal);
	$('#right-nib').val(rightNibVal);
})

//  style
$('.WW-content').on('click', '.select-style', (event) => {
	let target = event.target.id;
	let img = $(`#${target}`).parent().parent().find('img').attr('src');

	localStorage.setItem('StyleItem', `${target}`);
	localStorage.setItem('StyleImage', img)

	// local storage's space
	let StyleItem = localStorage.getItem('StyleItem');


	let past = $('.selected-option').attr('id');
	$(`#${past}`).removeClass("selected-option");

	// add colouring too the id
	let parent = $(`#${StyleItem}`).parent().parent().attr('id')
	localStorage.setItem('StyleParent', `${parent}`)
	let StyleParent = localStorage.getItem('StyleParent');
	$(`#${StyleParent}`).addClass('selected-option')

})


// doors
$('.WW-content').on('click', '.door-btn', (event) => {
	let target = event.target.id;
	let img = $(`#${target}`).parent().find('img').attr('src');

	// set target as something to save
	localStorage.setItem('DoorItem', `${target}`);
	localStorage.setItem('DoorImage', img);

	// local storage's space
	let DoorItem = localStorage.getItem('DoorItem');

	let past = $('.selected-option').attr('id');
	$(`#${past}`).removeClass("selected-option");

	// add colouring too the id
	let parent = $(`#${DoorItem}`).parent().attr('id')
	localStorage.setItem('DoorParent', `${parent}`)
	let DoorParent = localStorage.getItem('DoorParent');

	$(`#${DoorParent}`).addClass('selected-option')

})

// breakout
$('.WW-content').on('click', '.form-check-input', (event) => {
	let target = event.target.id;

	// set target as something to save
	localStorage.setItem('BreakOutItem', `${target}`);

	// local storage's space
	let BreakOutItem = localStorage.getItem('BreakOutItem');

	$(`#${BreakOutItem}`).prop('checked', true);

})

//photos
$('.WW-content').on('DOMSubtreeModified', '#targetLayer', (event) => {
	let target = event.target.id;

	let img = $(`#${target}`).children('#upload-preview').attr('id');
	let imgSrc = $(`#${target}`).children('p').attr('id');

	// set target as something to save
	localStorage.setItem('Photo', `${img}`);
	localStorage.setItem('PhotoURL', `${imgSrc}`);

	// get the pic
	let Picture = localStorage.getItem('Photo');
	let PictureUrl = localStorage.getItem('PhotoURL');

	if (PictureUrl !== null) {
		$(`#${Picture}`).attr('src', PictureUrl)
		$(`#Link`).html(`<h3 style="color: #0077c8;">Here is the link to your <a href="${PictureUrl}" style="color: #00a5e0; text-decoration: underline;">image</p>`)
	}

})
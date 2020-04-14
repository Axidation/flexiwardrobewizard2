// prevent typing
$("[type='number']").keypress(function (event) {
    event.preventDefault();
});


// measure
let HeightVal = localStorage.getItem('HeightVal');
let backWidthVal = localStorage.getItem('back-widthVal');
let leftWallVal = localStorage.getItem('left-wallVal');
let rightWallVal = localStorage.getItem('right-wallVal');
let leftNibVal = localStorage.getItem('left-nibVal');
let rightNibVal = localStorage.getItem('right-nibVal');

// space, door. breakout
let UserSpace = localStorage.getItem('UserSpace');
let UserStyle = localStorage.getItem('UserStyle');
let UserDoor = localStorage.getItem('UsersDoor');
let UserBreakout = localStorage.getItem('UsersBreakout');


$('#Room1Info').text(`${UserStyle} in ${UserSpace} with ${UserDoor}s`);
$('#Room1Breakout').text(`Breakout: ${UserBreakout}`);
$('#Room1Measurements').html(`Height: ${HeightVal} <br> BackWidth: ${backWidthVal} <br> 
                              LeftWall: ${leftWallVal} RightWall: ${rightWallVal} <br> 
                              LeftNib: ${leftNibVal} RightNib: ${rightNibVal} <br>`);



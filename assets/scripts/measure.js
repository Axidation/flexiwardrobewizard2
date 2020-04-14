function denyNegative(e) {
  if(!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || e.keyCode == 8)) {
      return false;
    }
}
$("#Mheight").onkeydown = denyNegative;
$("#back-width").onkeydown = denyNegative;
$("#left-wall").onkeydown = denyNegative;
$("#right-wall").onkeydown = denyNegative;
$("#left-nib").onkeydown = denyNegative;
$("#right-nib").onkeydown = denyNegative;


var SpcItem = localStorage.getItem('SpaceItem');
FillMeasure(SpcItem)

function FillMeasure(Space) {
 let spaceItem;
  switch (SpcItem) {
    case 'select-button-str':
      spaceItem = "straight"
      $('.LeftNibs').hide()
      $('.LeftWall').hide()

      $('.RightNibs').hide()
      $('.RightWall').hide()
      break;
    case 'select-button-enc':
      spaceItem = "enclosed"
      $('.WardrobeWidth').hide()
      break;
    case 'select-button-left':
      spaceItem = "left"
      $('.LeftNibs').hide()

      $('.RightNibs').hide()
      $('.RightWall').hide()
      break;
    case 'select-button-right':
      spaceItem = "right"
      $('.LeftNibs').hide()
      $('.LeftWall').hide()

      $('.RightNibs').hide()
      break;
  }
    $('#Measure-IMG').attr('src', `../assets/images/wizard/Measure/${spaceItem}.jpg`)
}
$(document).ready(() => {
    $('.content').load(`/pages/home.html`,( response, status, xhr ) => {
        if ( status == "error" ) {
          Error(xhr);
        }
      });
});

$('.navbar').on('click', 'a', (event) => {
    let button = event.target.id;
    $('.content').load(`/pages/${button}.html`,( response, status, xhr ) => {
        if ( status == "error" ) {
          Error(xhr);
        }
      });
});

function Error(xhr) {
  let msg = "<h1 style='color: #0082C8; font-weight: bold; font-family: Montserrat; text-align: center; font-size: 3em; margin-top: 15%;'>Sorry that page does not exist</h1> <br>";
          $( ".content" ).html(`${msg} <p style='text-align: center; font-weight: bold; font-family: Montserrat; font-size: 3em;'>${xhr.status} ${xhr.statusText}</p>`);
}
function WizardError(xhr) {
  let msg = "<h1 style='color: #0082C8; font-weight: bold; font-family: Montserrat; text-align: center; font-size: 3m; margin-top: 15%;'>Sorry that page does not exist</h1> <br>";
  $(".WW-content").html(`${msg} <p style='text-align: center; font-weight: bold; font-family: Montserrat; font-size: 3em;'>${xhr.status} ${xhr.statusText}</p>`);
}

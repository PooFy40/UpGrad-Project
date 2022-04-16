var createpostmodal = document.getElementById("createpostmodal");
// Get the button that opens the modal
var createpost = document.getElementById("createpost");

// Get the <span> element that closes the modal
var createpostclose = document.getElementsByClassName("createpostclose")[0];

// When the user clicks on the button, open the modal
createpost.onclick = function() {
  createpostmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
createpostclose.onclick = function() {
  createpostmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == createpostmodal) {
//     createpostmodal.style.display = "none";
//   }
// }

function gotobloglist(){
  location.href = "./html/postslist.html"
}
// Get the modal
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


// When ALL POSTS button is clicked It takes to the Postslist Page
function gotobloglist(){
  location.href = "./html/postslist.html"
}
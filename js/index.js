var createpostmodal = document.getElementById("createpostmodal");
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");

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
window.onclick = function(event) {
  if (event.target == createpostmodal || event.target == signupModal || event.target == signinModal) {
    createpostmodal.style.display = "none";
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
}
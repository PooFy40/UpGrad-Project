// Get the modal
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");

// Get the button that opens the modal
var signup = document.getElementById("signup");

// Get the <span> element that closes the modal
var signupclose = document.getElementsByClassName("signupclose")[0];

// When the user clicks on the button, open the modal
signup.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupclose.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == signupModal || event.target == signinModal ) {
//     signupModal.style.display = "none";
//     signinModal.style.display = "none";
//   }
// }


// Get the button that opens the modal
var signin = document.getElementById("signin");
var signupmember = document.getElementById('link')
// Get the <span> element that closes the modal
var signinclose = document.getElementsByClassName("signinclose")[0];

// When the user clicks on the button, open the modal
signin.onclick = function() {
  signinModal.style.display = "block";
}
signupmember.onclick = function() {
  signinModal.style.display="none"
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signinclose.onclick = function() {
  signinModal.style.display = "none";
}


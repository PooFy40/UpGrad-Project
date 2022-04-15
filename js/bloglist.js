let allposts=document.getElementById("allposts")

allposts.onclick=function () {
    location.href = "./html/postslist.html"   
}

var createpostmodal = document.getElementById("createpostmodal");
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");
console.log("this is bloglist")
window.onclick = function(event) {
    if (event.target == createpostmodal || event.target == signupModal || event.target == signinModal) {
      createpostmodal.style.display = "none";
      signupModal.style.display = "none";
      signinModal.style.display = "none";
    }
  }
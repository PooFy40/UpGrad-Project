// This Function Takes AuthorName,BlogTitle and BlogContent From PostsList Page And Store Them In LocalStorage
// Which Was Further Retrived And Displayed On Post Page
function elifn (element) {

  let authorname = document.getElementById(`authorpostlist${element}`).innerText
  let posttitle = document.getElementById(`titlepostlist${element}`).innerText
  let content = document.getElementById(`text${element}`).innerText

  localStorage.setItem("name", authorname)
  localStorage.setItem("title", posttitle)
  localStorage.setItem("content", content)

  location.href = './post.html';
}


























var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");
console.log("this is bloglist")
window.onclick = function (event) {
  if (event.target == signupModal || event.target == signinModal || event.target == delpost) {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
}



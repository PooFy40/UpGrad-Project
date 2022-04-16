// variable to count the amount of likes
var likes=0;

function edit() {
    var titleTxt = document.getElementById("posttitle").innerHTML;
    var contentTxt = document.getElementById("postcontent").innerHTML;

    /* this code sends a premade tag to replace the title with an input area with the title text already in it
       and the css in the onkeypress is just to dynamically increase its width according to the length of text
       it works by finding the amount of character and multiplying it by the width of each character and then setting it as the current width
       the value 13 was found by trial and error as em is relative to the screen size and px is static measurement 
    */
    document.getElementById("titleDiv").innerHTML = `<input id="posttitle" type="text" value="${titleTxt}" style="width:19%;" onkeypress="this.style.width = ((this.value.length + 1) * 13) + 'px';">`;

    // similar code that sends a tag with content which is added in the next line because sending it like title didnt work somehow 
    document.getElementById("contentDiv").innerHTML = `<textarea id="postcontent" rows="13-" style="width:100%;"></textarea>`;
    document.getElementById("postcontent").value=contentTxt;

    // changing the onclick function and editing the contents of the buttton
    document.getElementById("edit").setAttribute('onclick','save()');
    document.getElementById("edit").innerHTML = `Save <i class="far fa-save"></i>`;
}

function save(){
    var titleTxt = document.getElementById("posttitle").value;
    var contentTxt = document.getElementById("postcontent").value;

    // sending tags with the updated value
    document.getElementById("titleDiv").innerHTML = `<h3 id="posttitle"> ${titleTxt}</h3>`;
    document.getElementById("contentDiv").innerHTML = `<div id="postcontent">${contentTxt}</div>`;

    document.getElementById("edit").setAttribute('onclick','edit()');
    document.getElementById("edit").innerHTML = `Edit <i class="fas fa-edit"></i>`;
}

function like() {
    // basic counter code for the number of likes
    document.getElementById("likeBtn").innerHTML = (`<i class="fas fa-thumbs-up"></i> Liked!`);
    likes=likes+1;
    document.getElementById("firstOne").innerText = `${likes} people have liked this!`;
}

function addComment() {
    var text = document.getElementById("commentText").value;

    //check for empty comment
    if(text){
        // makes a new comment div and adds it
        var div = document.createElement("div");
        div.id = "comment";
        div.innerText = text;
        
        document.getElementById("comments").appendChild(div);
    }
    else{
        alert("Comment cannot be empty!");
    }
}


let aname=localStorage.getItem("name")
let title=localStorage.getItem("title")
let content=localStorage.getItem("content")


document.getElementById("postauthor").innerText=aname
document.getElementById("posttitle").innerText=title
document.getElementById("postcontent").innerText=content

localStorage.clear()



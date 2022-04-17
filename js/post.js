// The Details Stored In LocalStorage is Retreved Here And Displayed

let aname=localStorage.getItem("name")
let title=localStorage.getItem("title")
let content=localStorage.getItem("content")

document.getElementById("postauthor").innerText=aname
document.getElementById("posttitle").innerText=title
document.getElementById("postcontent").innerText=content

// After Displaying Details LocalStorage Is Cleared
localStorage.clear()



// variable to count the likes
var likes=0;

/* Edit function which makes postTitle and postContent Editable
and also changed to save button */
function edit() {
    var titleTxt = document.getElementById("posttitle").innerHTML;
    var contentTxt = document.getElementById("postcontent").innerHTML;

    document.getElementById("titleDiv").innerHTML = `<input id="posttitle" type="text" value="${titleTxt}" style="width:50%; text-align: center;" onkeypress="this.style.width = ((this.value.length + 1) * 13) + 'px';">`;
 
    document.getElementById("contentDiv").innerHTML = `<textarea id="postcontent"  style="width:100%; margin-top: 10px ;"></textarea>`;
    document.getElementById("postcontent").value=contentTxt;

    
    document.getElementById("edit").setAttribute('onclick','save()');
    document.getElementById("edit").innerHTML = `Save <i class="far fa-save"></i>`;
}

/*save function which saved new edited postTitle and postContent*/
function save(){
    var titleTxt = document.getElementById("posttitle").value;
    var contentTxt = document.getElementById("postcontent").value;

    document.getElementById("titleDiv").innerHTML = `<h3 id="posttitle"> ${titleTxt}</h3>`;
    document.getElementById("contentDiv").innerHTML = `<div id="postcontent">${contentTxt}</div>`;

    document.getElementById("edit").setAttribute('onclick','edit()');
    document.getElementById("edit").innerHTML = `Edit <i class="fas fa-edit"></i>`;
}

// code for the number of likes
function like() {
    document.getElementById("likeBtn").innerHTML = (`<i class="fas fa-thumbs-up"></i> Liked!`);
    likes=likes+1;
    document.getElementById("firstOne").innerText = `${likes} people have liked this!`;
}

// addcomment function which add comments  
function addComment() {
    var text = document.getElementById("commentText").value;

    //checking for a empty comment 
    if(text){
        // makes a new div and adds it
        var div = document.createElement("div");
        div.id = "comment";
        div.innerText = text;
        
        document.getElementById("comments").appendChild(div);
    }
}





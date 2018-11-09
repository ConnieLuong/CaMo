
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");


function logOut(){
    if(confirm("Are you sure you want to log out?")){
        window.location = "login.html"
    }
}

function addCollection(){
    //var input = document.getElementsByClassName("collection-name").value;
    if(document.forms['form'].collection.value == ""){
        window.alert('Please enter a collection name!');
        modal.style.display = "none";
    }
    else{
        if(confirm("Are you sure you want to add a new collection?")){
            // window.location = "login.html"
            window.alert('Successfully add a new collection!');
            modal.style.display = "none";
        }
    }
}

function add(){
    modal.style.display = "block";
    //when user clicks anywhere outside of hte modal, also close it.
    if(event.target == modal){
        modal.style.display = "none";
    }
}

//when user closes the add collection window
span.onclick = function(){
    modal.style.display = "none";
}

cancel.onclick = function(){
    modal.style.display = "none";
}

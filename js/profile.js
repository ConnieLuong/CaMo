
var modal = document.getElementById('myModal');
var collectionName = document.getElementById('collection-name');
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementsByClassName("cancel")[0];


function logOut(){
    if(confirm("Are you sure you want to log out?")){
        window.location = "login.html"
    }
}

function addCollection(){
    if(collectionName){
        if(confirm("Are you sure you want to add a new collection?")){
            // window.location = "login.html"
            window.alert('Successfully add a new collection!');
            modal.style.display = "none";
        }
    }
    else{
        window.alert('Please enter a collection name!');

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

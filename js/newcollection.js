var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementsByClassName('cancel')[0];

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

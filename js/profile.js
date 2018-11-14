
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

    var newCollectionData = {
        newCollectionName: $('#inputCollectionName').value
       
    }

    console.log('new collection name:', newCollectionData.newCollectionName)

    //compile template cafeCard
    var source_cafeCard = $('#cafeCard').html();
    var template_cafeCard = Handlebars.compile(source_cafeCard);

    //compile template cafeCardNewRow
    var source_cafeCardNR = $('#cafeCardNewRow').html();
    var template_cafeCardNR = Handlebars.compile(source_cafeCardNR);

    //where to append new code to
    var parentDiv = $("#addedCollection");


    for(var i=0; i<newCollectionData.length; i++){
        // check current number of collections on row
        // if curr%4 == 0, make new row
        // else append to curr row

        //maybe use localStorage to store html
        var curData = newCollectionData[i];
        var curHTML = undefined;
        if( 7==4 ){
            curHtml = template_cafeCard(curData);
        }else{
            curHTML = template_cafeCardNR(curData);
        }
        
        parentDiv.append(curHtml);
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

//when user cancels
cancel.onclick = function(){
    modal.style.display = "none";
}

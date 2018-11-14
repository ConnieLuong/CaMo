
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");


function logOut(){
    if(confirm("Are you sure you want to log out?")){
        window.location = "login.html"
    }
}

function addCollection(){
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
        newCollectionName: document.getElementById('inputCollectionName').value       
    }

    //compile template cafeCard
    var source_cafeCard = $('#cafeCard').html();
    var template_cafeCard = Handlebars.compile(source_cafeCard);

    //compile template cafeCardNewRow
    var source_cafeCardNR = $('#cafeCardNewRow').html();
    var template_cafeCardNR = Handlebars.compile(source_cafeCardNR);

    //where to append new code to
    var parentDiv = $("#addedCollection");

    //Initialize num to 1
    if(localStorage.getItem('num')==null){
        localStorage.setItem('num','1');
    }

    console.log('hhehhehe');

    console.log('num =', localStorage.getItem('num'));


    for(var i=0; i<newCollectionData.length; i++){
        //retrieve current value of num
        curr_num = parseInt(localStorage.getItem('num'), 10);

        var curData = newCollectionData[i];
        var curHTML = undefined;

         // if curr_num%4 == 0, make new row
        if( curr_num%4 == 0 ){
            curHtml = template_cafeCardNR(curData);
            parentDiv.append(curHtml);
        }
        // else append to current row
        else{
            curHTML = template_cafeCard(curData);
            parentDiv.append(curHtml);
        }
        

        //update curr_num
        curr_num++;
        localStorage.setItem('num', curr_num);
    }
}

function add(){
    modal.style.display = "block";
    //when user clicks anywhere outside of the modal, also close it.
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


/*var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");

$(document).ready(function() {
    //If addHTML not null, load current collections onto page
    if(localStorage.getItem('addHTML')!=null){
        $("#addedCollection").append(localStorage.getItem('addHTML'));
    }
})

function logOut(){
    if(confirm("Are you sure you want to log out?")){
        window.location = "login.html";
        localStorage.removeItem('addHTML');
        localStorage.removeItem('num');
    }
}

//decide to remove user ability to create new collection - can only have 4 collection

//if user presses return/enter, will immediately call addCollection method
var inputElem = document.getElementById('inputCollectionName');
inputElem.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addCollection();
    }  
});

function addCollection(){
    //Form action
    if(document.forms['form'].collection.value == ""){
        window.alert('Please enter a collection name!');
        modal.style.display = "none";
    }
    else{
        if(confirm("Are you sure you want to add a new collection?")){
            window.alert('Successfully add a new collection!');
            modal.style.display = "none";
        }
    }
    //localStorage.removeItem('num');
    //localStorage.removeItem('addHTML');
    
    //Initialize num in localStorage to 1
    console.log('num before =', localStorage.getItem('num'));
    if(localStorage.getItem('num')==null){
        console.log('Initializing num...');
        localStorage.setItem('num','0');
        console.log('num now =', localStorage.getItem('num'));
    }

    // VARIABLE INITIALIZATIONS
    var parentDiv = $("#addedCollection");
    //retrieve current value of num
    var curr_num = parseInt(localStorage.getItem('num'), 10);
    console.log('num =', localStorage.getItem('num'));
    console.log('input collection name = ', document.getElementById('inputCollectionName').value);

    var curData = {
        'newCollectionName': document.getElementById('inputCollectionName').value     
    };
    console.log('curData = ',curData);
    var curHTML = undefined;
    var source = undefined;
    var template = undefined;

    
    //compile template cafeCard
    source = $('#cafeCard').html();
    template = Handlebars.compile(source);
    curHTML = template(curData);

    console.log('curHTMl = ', curHTML);

    // Update addHTML in localStorage (initialize or append)
    if(localStorage.getItem('addHTML') == null){
        localStorage.setItem('addHTML', curHTML)
    }else{
        new_addHTML_inLS = localStorage.getItem('addHTML') + curHTML;
        localStorage.setItem('addHTML', new_addHTML_inLS);
    }

    // Since previous collections already loaded and appended, 
    // Only need to append the newest collection to parentDiv
    parentDiv.append( curHTML );


    console.log('addHTML = ', localStorage.getItem('addHTML'));
        

    //update curr_num
    curr_num++;
    localStorage.setItem('num', curr_num);

    console.log('num after =', localStorage.getItem('num'));
    document.getElementById('inputCollectionName').value = '';
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
}*/

$(document).ready(function(){
    //load all new names for each collection
    if(localStorage.getItem('collection1name')!=null){
        document.getElementById("collection1name").innerHTML = localStorage.getItem('collection1name');
    }
    if(localStorage.getItem('collection2name')!=null){
    document.getElementById("collection2name").innerHTML = localStorage.getItem('collection2name');
    }
    if(localStorage.getItem('collection3name')!=null){
    document.getElementById("collection3name").innerHTML = localStorage.getItem('collection3name');
    }
    if(localStorage.getItem('collection4name')!=null){
    document.getElementById("collection4name").innerHTML = localStorage.getItem('collection4name');
    }

    //load all cafes for each collection  
    if(localStorage.getItem('collection1HTML')!=null){
        document.getElementById("collection1content").innerHTML = localStorage.getItem('collection1HTML');
    }
    if(localStorage.getItem('collection2HTML')!=null){
    document.getElementById("collection2content").innerHTML = localStorage.getItem('collection2HTML');
    }
    if(localStorage.getItem('collection3HTML')!=null){
    document.getElementById("collection3content").innerHTML = localStorage.getItem('collection3HTML');
    }
    if(localStorage.getItem('collection4HTML')!=null){
    document.getElementById("collection4content").innerHTML = localStorage.getItem('collection4HTML');
    }
    
});

/**
 * Description: changes the selected collection's name to the given newName
 * 
 * Input:
 *      collection - id of the collection
 *      newName - newName that the user wants the collection to be changed into
 * LocalStorage change:
 *      collection<number>name is updated to newName
 */
function changeCollectionName(collection){
    var newName = prompt("Please enter new collection name:", "Collection Name");
    console.log('collection = ', collection);
    if (newName == null || newName == "") {
        window.alert("Collection name was not changed.");
    } else {
        localStorage.setItem(collection+'name',newName);
        window.alert("Successfully changed collection name to "+newName);
        document.getElementById(collection+'name').innerHTML = newName;
    } 
}
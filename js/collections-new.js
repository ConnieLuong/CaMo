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

/**
 * Description: Removes the given cafe from the given collection. This will be clicked from cafe page.
 * 
 * Input:
 *      cafe - id of the cafe card; will be in fomat <cafe id>-collection<number>
 * Output:
 *      * first checks if the users is sure about removing the selected cafe from the selected collection
 *      * alerts the user that the cafe has now been removed from the selected collection
 * LocalStorage change:
 *      updates <cafe name>List to change the corresponding collection index value to 0
 *      updates collection<number>HTML to remove the cafe.
 * Interface change:
 *      the removed cafe will no longer show up in under the collection is was removed from on the collection page
 */
function removeCafeFromCollection(cafe){
    if(confirm("Are you sure you want to remove this cafe?")){
        //get cafe id
        var cafe_id = cafe.substring(0, cafe.length-12);
        //get collection id
        var collection_id = cafe.substring(cafe.length-11);
        //get collection number
        var collection_num = parseInt(collection_id[collection_id.length-1])-1;
        
        //remove cafe card from current html
        $('#'+cafe).remove();

        //update <cafe name>List in LocalStorage
        console.log('cafe_id = ', cafe_id);
        console.log('collection_id = ', collection_id);
        console.log('collection_num = '+collection_num);

        var newList = JSON.parse(localStorage.getItem(cafe_id+'List'));
        console.log('newList before = ', newList);
        newList[collection_num] = 0;
        localStorage.setItem(cafe_id+'List', JSON.stringify(newList));
        console.log('newList after = ', newList)

        //update collection<number>HTML in LocalStorage
        if( (jQuery.trim(document.getElementById(collection_id+'content').innerHTML)).length == 0){
            document.getElementById(collection_id+'content').innerHTML = "Empty collection. Start saving cafes!";
        };
        localStorage.setItem(collection_id+'HTML', document.getElementById(collection_id+'content').innerHTML);
    }
}
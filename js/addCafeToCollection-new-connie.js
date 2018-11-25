var cafe_card_Data=[
    //Cafe 1  - The Bean Palace
    { 
        'cafe-card-id':'The-Bean-Palace-',
        'cafe-link':'cafe_page=The-Bean-Palace',
        'cafe-img':'Cafe1.png',
        'cafe-name':'The Bean Palace',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 2 - Lava Java
    {
        'cafe-card-id':'Lava-Java-',
        'cafe link':'cafe_page=Lava-Java',
        'cafe-img':'Cafe2.png',
        'cafe-name':'Lava Java',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 3 - The Grind
    {
        'cafe-card-id':'The-Grind-',
        'cafe-link':'cafe_page=The-Grind',
        'cafe-img':'Cafe3.png',
        'cafe-name':'The Grind',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 4 - No Social Life
    {
        'cafe-card-id':'No-Social-Life-',
        'cafe-link':'cafe_page=No-Social-Life',
        'cafe-img':'Cafe4.png',
        'cafe-name':'No Social Life',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 5 - No Doze Cafe
    {
        'cafe-card-id':'No-Doze-Cafe-',
        'cafe-link':'cafe_page=No-Doze-Cafe',
        'cafe-img':'Cafe5.png',
        'cafe-name':'No Doze Cafe',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 6 - Aroma Mocha
    {
        'cafe-card-id':'Aroma-Mocha',
        'cafe-link':'cafe_page=Aroma-Mocha',
        'cafe-img':'Cafe6.png',
        'cafe-name':'Aroma Mocha',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 7 - The Split Bean
    {
        'cafe-card-id':'The-Split-Bean',
        'cafe-link':'cafe_page=The-Split-Bean',
        'cafe-img':'Cafe7.png',
        'cafe-name':'The Split Bean',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 8 - Happy Orange
    {
        'cafe-card-id':'Happy-Orange-',
        'cafe-link':'cafe_page=Happy-Orange',
        'cafe-img':'Cafe8.png',
        'cafe-name':'Happy Orange',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 9 - Black Sugars
    {
        'cafe-card-id':'Black-Sugars-',
        'cafe-link':'cafe_page=Black-Sugars',
        'cafe-img':'Cafe9.png',
        'cafe-name':'Black Sugars',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 10 - Bees
    {
        'cafe-card-id':'Bees-',
        'cafe-link':'cafe_page=Bees',
        'cafe-img':'Cafe10.png',
        'cafe-name':'Bees',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 11 - QnA
    {
        'cafe-card-id':'QnA-',
        'cafe-link':'cafe_page=QnA',
        'cafe-img':'Cafe11.png',
        'cafe-name':'QnA',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 12 - Cute Cups
    {
        'cafe-card-id':'Cute-Cups-',
        'cafe-link':'cafe_page=Cute-Cupts',
        'cafe-img':'Cafe12.png',
        'cafe-name':'Cute Cups',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 13 - Amooze
    {
        'cafe-card-id':'Amooze-',
        'cafe-link':'cafe_page=Amooze',
        'cafe-img':'Cafe13.png',
        'cafe-name':'Amooze',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 14 - CHao
    {
        'cafe-card-id':'CHao-',
        'cafe-link':'cafe_page=CHao',
        'cafe-img':'Cafe14.png',
        'cafe-name':'CHao',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 15 - Merp
    {
        'cafe-card-id':'Merp-',
        'cafe-link':'cafe_page=Merp',
        'cafe-img':'Cafe15.png',
        'cafe-name':'Merp',
        'cafe-rating':'',
        'cafe-hashtags':''
    },
    //Cafe 16 - GRE
    {   
        'cafe-card-id':'GRE-',
        'cafe-link':'cafe_page=GRE',
        'cafe-img':'Cafe16.png',
        'cafe-name':'GRE',
        'cafe-rating':'',
        'cafe-hashtags':''
    }
];

$(document).ready(function(){
    //load collection names into dropdown
    if(localStorage.getItem("collection1name")!=null){document.getElementById("collection1-option").innerHTML= localStorage.getItem("collection1name")};
    if(localStorage.getItem("collection2name")!=null){document.getElementById("collection2-option").innerHTML= localStorage.getItem("collection2name")};
    if(localStorage.getItem("collection3name")!=null){document.getElementById("collection3-option").innerHTML= localStorage.getItem("collection3name")};
    if(localStorage.getItem("collection4name")!=null){document.getElementById("collection4-option").innerHTML= localStorage.getItem("collection4name")};

    //check and update SaveButton
    var queryParams = new URLSearchParams(window.location.search);
    var cafe = queryParams.get('cafe_page');
    updateSaveCafeButton(cafe);
    console.log(cafe);
})

//opens the add to collection nav
function openAddToCollectionNav(){
    document.getElementById("addToCollectionNav").style.width = "100%";
}
//closes the add to collection nav
function closeAddToCollectionNav(){
    document.getElementById("addToCollectionNav").style.width = "0%";
}


/**
 * Description: Given a cafe and a collection, will add the given cafe as a bootstrap
 * card to the given collection
 * 
 * Input: 
 *     cafe - id of the cafe
 *     collection - value of the collection dropdown. [value will correspond to the 
 *                  id of the collection (collection1, collection2, collection3, or collection4)]
 * Output:
 *     alerts user that the cafe has been added to the selected collection
 * LocalStorage change:
 *      LocalStorage's key collection<number>HTML to append given cafe
 * Interface change:
 *     The 'Save Cafe' button is changed to 'Unsave Cafe' and add new button 'Save to Another Collection'
 */
function addCafeToCollection(){
    var queryParams = new URLSearchParams(window.location.search);
    var cafe_id = queryParams.get('cafe_page');
    var input_cafe_name = cafe_id.split('-').join(' ');

    var collection_id = $('.dropdown').val();
    //if not a collection, alert user
    if( $('.dropdown').val()=='none' ){
        window.alert('Please select a collection.');
        return;
    }

    var collection = document.getElementById(collection_id+'-option').innerHTML;

    console.log('cafe_id = ', cafe_id);
    console.log('input_cafe_name = ', input_cafe_name);
    console.log('collection_id = ', collection_id);
    console.log('collection = ', collection);


    

    //attempt addCollectionToCafe(). if cafe already in collection, alert user
    var temp = addCollectionToCafe(cafe_id, collection_id);
    if(!temp){
        window.alert(input_cafe_name + ' is already in ' + collection + '.');
        return;
    }
    //else if temp==true, then update collection<number>HTML
    else{
        //get the corresponding cafe information from cafe_card_Data
        var curData = '';
        for(var i=0; i<cafe_card_Data.length; i++){
            if(input_cafe_name==cafe_card_Data[i]["cafe-name"]){
                curData = cafe_card_Data[i];
                //add collection_id after cafe-card-id to prevent confusion if same cafe added to multiple collections
                curData["cafe-card-id"] = curData["cafe-card-id"]+collection_id;
            }
        }

        //compile cafeCard template
        var source = $('#cafeCard').html();
        var template = Handlebars.compile(source);
        var curHTML = template(curData);

        //initialize or update collection<number>HTML
        if(localStorage.getItem(collection_id+'HTML')==null){
            localStorage.setItem(collection_id+'HTML', curHTML);
        }else{
            localStorage.setItem(collection_id+'HTML', localStorage.getItem(collection_id+'HTML')+curHTML);
        }
    }

    //update button
    updateSaveCafeButton(cafe_id);

    //alert user
    window.alert('Successfully added ' + input_cafe_name + ' to the collection ' + collection);
    closeAddToCollectionNav();
}

/**
 * Description: Given a cafe and a collection, will add the given collection to the corresponding
 * cafe's list of collections it has been added to. The cafe's collection list is a list of length
 * 4, where at each index, it is either a 0 or a 1. 0 will represent that the cafe has not been
 * added to the collection(index+1). 1 will represent that the cafe has been added to collection(index+1)
 * 
 * Input:
 *      cafe - id of the cafe
 *      collection - id of the collection (collection1, collection2, collection3, or collection4)
 * Output:
 *      true if collection successfully added to cafe's list (cafe was not previously in collection)
 *      false if collection failed to be added to cafe's list (cafe was previously already in collection)
 * LocalStorage change:
 *      LocalStorage's key <cafe name>List will have been updated to the new list
 * Interface change:
 *      none
 */
function addCollectionToCafe(cafe,collection){
    //get collection number (1,2,3,or 4)
    var collection_number = parseInt(collection[collection.length-1], 10);
    //if not <cafe name>List exists, initialize & add collection to cafe
    if(localStorage.getItem(cafe+'List') == null){
        var cafe_list = [0,0,0,0];
        cafe_list[collection_number-1] = 1;
        localStorage.setItem(cafe+'List', JSON.stringify(cafe_list));
        return true;
    }
    //else check the list to see if collection is already added
    else{
        var cafe_list = JSON.parse(localStorage.getItem(cafe+'List'));
        if(cafe_list[collection_number-1]==1){
            return false;
        }else{
            cafe_list[collection_number-1]=1;
            return true;
        }
    }
}

/**
 * Description: For the given cafe, will toggle the 'Save Cafe' button to 'Cafe Saved to a Collection',
 * vice versa, or no change depending on the cafe's corresponding <cafe name>List on LocalStorage.
 * 
 * Input:
 *      cafe - id of the cafe
 * Output:
 *      none
 * LocalStorage change:
 *      none
 * Interface change:
 *      Depending on the status of the cafe, the 'Save Cafe' button might get changed to 'Cafe Saved to a Collection'
 *      or from 'Cafe Saved to a Collection' to 'Save Cafe'
 *      or no change
 */
function updateSaveCafeButton(cafe){
    //check <cafe name>List to see if cafe is saved to a collection
    if(localStorage.getItem(cafe+'List')!=null){
        console.log('in updateSaveCafeButton first if statement');
        for(var i=0; i<4; i++){
            if(localStorage.getItem(cafe+'List')[i]==1){
                console.log('in updateSaveCafeButton second if statement');
                document.getElementById('SaveButton').innerHTML = 'Saved';
                break;
            }
        }
    }else{
        document.getElementById('SaveButton').innerHTML = 'Save Cafe';
    }
}

/**
 * Description: Removes the given cafe from the given collection. This will be clicked from cafe page.
 * 
 * Input:
 *      cafe - id of the cafe
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
    var input_cafe_name = cafe.split('-').join(' ');
    var remove_id;

    for(var i=0; i<cafe_card_Data.length; i++){
        if(input_cafe_name==cafe_card_Data[i]["cafe-name"]){
            remove_id = cafe_card_Data[i]["cafe-card-id"]+collection;
        }
    }
    $('#'+remove_id).remove();


    //BIG PROBLEM TODO
    //somehow need to convert string from collection<number>HTML to html and then remove from there
    //then need to update <cafe name>List
}
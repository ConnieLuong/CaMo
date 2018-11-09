//fake database
var collectionData =[
    //collection1
    {
        'collection_name':'', 
        'header_img':'../image/', 
    
        'cafe1-img':'',
        'cafe1-name':'',
        'cafe1-rating':'',
        'cafe1-hashtags':'',
        'cafe1-link':'',
    
        'cafe2-img':'',
        'cafe2-name':'',
        'cafe2-rating':'',
        'cafe2-hashtags':'',
        'cafe2-link':'',
    
        'cafe3-img':'',
        'cafe3-name':'',
        'cafe3-rating':'',
        'cafe3-hashtags':'',
        'cafe3-link':'',
    
        'cafe4-img':'',
        'cafe4-name':'',
        'cafe4-rating':'',
        'cafe4-hashtags':'',
        'cafe4-link':'',
    
        'cafe5-img':'',
        'cafe5-name':'',
        'cafe5-rating':'',
        'cafe5-hashtags':'',
        'cafe5-link':'',
    
        'cafe6-img':'',
        'cafe6-name':'',
        'cafe6-rating':'',
        'cafe6-hashtags':'',
        'cafe6-link':'',
    
        'cafe7-img':'',
        'cafe7-name':'',
        'cafe7-rating':'',
        'cafe7-hashtags':'',
        'cafe7-link':'',
    
        'cafe8-img':'',
        'cafe8-name':'',
        'cafe8-rating':'',
        'cafe8-hashtags':'', 
        'cafe8-link':'' 
    },
    //collection2
    {
        'collection_name':'', 
        'header_img':'../image/', 
    
        'cafe1-img':'',
        'cafe1-name':'',
        'cafe1-rating':'',
        'cafe1-hashtags':'',
        'cafe1-link':'',
    
        'cafe2-img':'',
        'cafe2-name':'',
        'cafe2-rating':'',
        'cafe2-hashtags':'',
        'cafe2-link':'',
    
        'cafe3-img':'',
        'cafe3-name':'',
        'cafe3-rating':'',
        'cafe3-hashtags':'',
        'cafe3-link':'',
    
        'cafe4-img':'',
        'cafe4-name':'',
        'cafe4-rating':'',
        'cafe4-hashtags':'',
        'cafe4-link':'',
    
        'cafe5-img':'',
        'cafe5-name':'',
        'cafe5-rating':'',
        'cafe5-hashtags':'',
        'cafe5-link':'',
    
        'cafe6-img':'',
        'cafe6-name':'',
        'cafe6-rating':'',
        'cafe6-hashtags':'',
        'cafe6-link':'',
    
        'cafe7-img':'',
        'cafe7-name':'',
        'cafe7-rating':'',
        'cafe7-hashtags':'',
        'cafe7-link':'',
    
        'cafe8-img':'',
        'cafe8-name':'',
        'cafe8-rating':'',
        'cafe8-hashtags':'', 
        'cafe8-link':'' 
    },
    //collection3
    {
        'collection_name':'', 
        'header_img':'../image/', 
    
        'cafe1-img':'',
        'cafe1-name':'',
        'cafe1-rating':'',
        'cafe1-hashtags':'',
        'cafe1-link':'',
    
        'cafe2-img':'',
        'cafe2-name':'',
        'cafe2-rating':'',
        'cafe2-hashtags':'',
        'cafe2-link':'',
    
        'cafe3-img':'',
        'cafe3-name':'',
        'cafe3-rating':'',
        'cafe3-hashtags':'',
        'cafe3-link':'',
    
        'cafe4-img':'',
        'cafe4-name':'',
        'cafe4-rating':'',
        'cafe4-hashtags':'',
        'cafe4-link':'',
    
        'cafe5-img':'',
        'cafe5-name':'',
        'cafe5-rating':'',
        'cafe5-hashtags':'',
        'cafe5-link':'',
    
        'cafe6-img':'',
        'cafe6-name':'',
        'cafe6-rating':'',
        'cafe6-hashtags':'',
        'cafe6-link':'',
    
        'cafe7-img':'',
        'cafe7-name':'',
        'cafe7-rating':'',
        'cafe7-hashtags':'',
        'cafe7-link':'',
    
        'cafe8-img':'',
        'cafe8-name':'',
        'cafe8-rating':'',
        'cafe8-hashtags':'', 
        'cafe8-link':'' 
    },
    //collection4
    {
        'collection_name':'', 
        'header_img':'../image/', 
    
        'cafe1-img':'',
        'cafe1-name':'',
        'cafe1-rating':'',
        'cafe1-hashtags':'',
        'cafe1-link':'',
    
        'cafe2-img':'',
        'cafe2-name':'',
        'cafe2-rating':'',
        'cafe2-hashtags':'',
        'cafe2-link':'',
    
        'cafe3-img':'',
        'cafe3-name':'',
        'cafe3-rating':'',
        'cafe3-hashtags':'',
        'cafe3-link':'',
    
        'cafe4-img':'',
        'cafe4-name':'',
        'cafe4-rating':'',
        'cafe4-hashtags':'',
        'cafe4-link':'',
    
        'cafe5-img':'',
        'cafe5-name':'',
        'cafe5-rating':'',
        'cafe5-hashtags':'',
        'cafe5-link':'',
    
        'cafe6-img':'',
        'cafe6-name':'',
        'cafe6-rating':'',
        'cafe6-hashtags':'',
        'cafe6-link':'',
    
        'cafe7-img':'',
        'cafe7-name':'',
        'cafe7-rating':'',
        'cafe7-hashtags':'',
        'cafe7-link':'',
    
        'cafe8-img':'',
        'cafe8-name':'',
        'cafe8-rating':'',
        'cafe8-hashtags':'', 
        'cafe8-link':'' 
    }
   ]
    
    //script to load correct cafes
    //query format : ./collection.html?collecton_page=collection_name
    //replae collection_name with the corresponding name
    $(document).ready(function(){
        //compile template
        var source = $('#category-template').html();
        var template = Handlebars.compile(source);
    
        var parentDiv = $("#templatedCollections");
    
        //allow for fake-database queries
        var queryParams = new URLSearchParams(window.location.search);
        var collection = queryParams.get('collection_page');
        console.log('query for', collection);
    
        for(var i=0; i<categoryData.length; i++){
            console.log('in for loop');
            var curData = collectionData[i];
            if(curData.collection_name == collection){
                var curHtml = template(curData);
                parentDiv.append(curHtml);
            }
        }
    })
    
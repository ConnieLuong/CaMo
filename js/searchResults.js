/**
 * Description: generates the html from the given template
 *      * If keyword matches a category, will load all cafes under that category
 *      * If keyword matches a cafe name, will load that cafe
 *      * If keyword matches nothing, will load 'No matches found' & then a 'More Cafes to Consider' underneath
 */
$(document).ready(function(){

    //compile template
    var source = $('#cafeCard').html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#search-results");

    //allow for fake-database queries
    var queryParams = new URLSearchParams(window.location.search);
    var keyword = queryParams.get('keyword');
    document.getElementById('keyword').innerHTML = keyword;
    document.getElementById('search-input').value = keyword;
    console.log('query for', keyword);

    var list = search(keyword);
    console.log('list = ', list);
    var success = list[0];
    //do something with the success value
    if(success==0){
        console.log("Success = 0.");


        parentDiv.append('<h3 class="col-sm-12">No matches found.</h3><h2 class="col-sm-12">More Cafes to Consider<h2>');
        //parse remaining cafe indices --> grab cafe info by index from cafe_card_Data
        for(var i=1; i<list.length; i++){
            //since the value at each index in list is the cafe's corresponding #, 
            var cafe = list[i]-1;
            var curData = cafe_card_Data[cafe];
            var curHtml = template(curData);

            console.log('curHTML', curHTML);

            parentDiv.append(curHtml);
        }
    }else if(success==1){
        console.log("Success = 1.", list[1]);


        //list = [1,1,2,3,4,5,6,7,8]
        //parse where list[1] contains [cafe1, cafe2, cafe3...] to match template cafeCard
        for(var i=1; i<list.length; i++){
            //since the value at each index in list is the cafe's corresponding #, 
            var cafe = list[i]-1;
            var curData = cafe_card_Data[cafe];
            var curHtml = template(curData);

            console.log('curHTML', curHTML);

            parentDiv.append(curHtml);
        }
    }else if(success==2){
        console.log("Success = 2.");

        //list = [2,#]
        //parse where list[1] contains cafe info matching cafeCard
        var cafe = list[1];
        console.log('cafe = ', cafe);

        var curData = cafe_card_Data[cafe];

        console.log('curData = ', curData);

        var curHTML = template(curData);

        console.log('curHTML', curHTML);

        parentDiv.append(curHTML);
    }
})

function linkToSearch(){
    var keyword = document.getElementById('search-input').value;
    var loc = "searchResults.html?keyword="+keyword;
    window.location = (loc);
}

// hover effect for search icon
function searchHover(element) {
    element.setAttribute('src', '../image/searchHover.png');
}

function searchUnhover(element) {
    element.setAttribute('src', '../image/searchIcon.png');
}
/*
//keydown
var searchElem = document.getElementById('search-input');
searchElem.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var keyword = document.getElementById('search-input').value;
        var loc = "searchResults.html?keyword="+keyword;
        window.location = (loc);
    }  
});*/
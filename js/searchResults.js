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
    var keyword = queryParams.get('cafe_page');
    console.log('query for', keyword);

    var list = search(keyword);
    var success = list[0];
    //do something with the success value
    if(success==0){
        parentDiv.append('<h3 class="col-sm-12">No matches found.</h3><h2 class="col-sm-12">More Cafes to Consider<h2>');
        //parse remaining cafe indices --> grab cafe info by index from cafe_card_Data
    }else if(success==1){
        //parse where list[1] contains cafe1, cafe2, cafe3... to match template cafeCard
    }else if(success==2){
        //parse where list[1] contains cafe info matching cafeCard
    }

    for(var i=1; i<list.length; i++){
        //since the value at each index in list is the cafe's corresponding #, 
        // TODO will need to change parsing method
        var cafe = list[i]
        var curData = cafe_card_Data[cafe];
        var curHtml = template(curData);
        parentDiv.append(curHtml);
    }
})
//fake database
var categoryData =[
{
    'category_name':'quiet', 
    'title':'Quiet',
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'twentyfourh', 
    'title':'24h',
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'group', 
    'title':'Group',
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'aesthetic',
    'title':'Aesthetic', 
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'brunch',
    'title':'Brunch', 
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'themed',
    'title':'Themed', 
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},

{
    'category_name':'pet-friendly',
    'title':'Pet Friendly', 
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
},
{
    'category_name':'vegan',
    'title':'Vegan', 
    'header_img':'../image/', 
    'cafe1':'../image/',
    'cafe2':'../image/', 
    'cafe3':'../image/', 
    'cafe4':'../image/', 
    'cafe5':'../image/', 
    'cafe6':'../image/'
}]

//script to load correct cafes
//query format : ...../category.html?category_page=quiet
//replae quiet with the corresponding name
$(document).ready(function(){
    //compile template
    var source = $('#category-template').html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedCategories");

    //allow for fake-database queries
    var queryParams = new URLSearchParams(window.location.search);
    var category = queryParams.get('category_page');
    console.log('query for', category);

    for(var i=0; i<categoryData.length; i++){
        console.log('in for loop');
        var curData = categoryData[i];
        if(curData.category_name == category){
            var curHtml = template(curData);
            parentDiv.append(curHtml);
        }
    }
})

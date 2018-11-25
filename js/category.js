//fake database
var categoryData =[
    //category1 - quiet
    {
        'category_id':'quiet', 
        'header_img':'../image/quietHeader.png', 

        'cafe1-img':'Cafe1.png',
        'cafe1-name':'The Bean Palace',
        'cafe1-rating':'2.5/5',
        'cafe1-hashtags':'#quiet #pet-friendly #vegan',
        'cafe1-link':'cafe_page=The-Bean-Palace',

        'cafe2-img':'Cafe4.png',
        'cafe2-name':'No Social Life',
        'cafe2-rating':'3/5',
        'cafe2-hashtags':'#quiet #brunch #pet-friendly #twentyfourh',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe7.png',
        'cafe3-name':'The Split Bean',
        'cafe3-rating':'3.5/5',
        'cafe3-hashtags':'#quiet #pet-friendly #vegan #brunch',
        'cafe3-link':'cafe_page=The-Split-Bean',

        'cafe4-img':'Cafe3.png',
        'cafe4-name':'The Grind',
        'cafe4-rating':'4/5',
        'cafe4-hashtags':'#quiet #aesthetic #pet-friendly #twentyfourh',
        'cafe4-link':'cafe_page=The-Grind',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3/5',
        'cafe5-hashtags':'#quiet #brunch #group #twentyfourh',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe9.png',
        'cafe6-name':'Black Sugars',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#quiet #pet-friendly #brunch #group',
        'cafe6-link':'cafe_page=Black-Sugars',

        'cafe7-img':'Cafe10.png',
        'cafe7-name':'Bees',
        'cafe7-rating':'3/5',
        'cafe7-hashtags':'#quiet #brunch #twentyfourh #themed',
        'cafe7-link':'cafe_page=No-Doze-Cafe',

        'cafe8-img':'Cafe6.png',
        'cafe8-name':'Aroma Mocha',
        'cafe8-rating':'4.5/5',
        'cafe8-hashtags':'#quiet #aesthetic #vegan #group',
        'cafe8-link':'cafe_page=Aroma-Mocha'
    },
    //category2 - twentyfourh
    {
        'category_id':'twentyfourh', 
        'header_img':'../image/24-hrHeader.png', 
        
        'cafe1-img':'Cafe13.png',
        'cafe1-name':'Amooze',
        'cafe1-rating':'4/5',
        'cafe1-hashtags':'#aesthetic #pet-friendly #brunch #twentyfourh ',
        'cafe1-link':'cafe_page=Amooze',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'3.5/5',
        'cafe2-hashtags':'#twentyfourh #brunch #group #themed ',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe14.png',
        'cafe3-name':'CHao',
        'cafe3-rating':'3/5',
        'cafe3-hashtags':'#themed #vagan #twentyfourh',
        'cafe3-link':'cafe_page=CHao',

        'cafe4-img':'Cafe12.png',
        'cafe4-name':'Cute Cups',
        'cafe4-rating':'3/5',
        'cafe4-hashtags':'#quiet #brunch #group #twentyfourh ',
        'cafe4-link':'cafe_page=Cute-Cups',

        'cafe5-img':'Cafe5.png',
        'cafe5-name':'No Doze Cafe',
        'cafe5-rating':'3.5/5',
        'cafe5-hashtags':'#pet-friendly #twentyfourh #vagan #themed',
        'cafe5-link':'cafe_page=No-Doze-Cafe',

        'cafe6-img':'Cafe3.png',
        'cafe6-name':'The Grind',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#quiet #aesthetic #pet-friendly #twentyfourh',
        'cafe6-link':'cafe_page=The-Grind',

        'cafe7-img':'Cafe10.png',
        'cafe7-name':'Bees',
        'cafe7-rating':'4.5/5',
        'cafe7-hashtags':'#quiet #brunch #twentyfourh #themed',
        'cafe7-link':'cafe_page=Bees',

        'cafe8-img':'Cafe4.png',
        'cafe8-name':'No Social Life',
        'cafe8-rating':'3/5',
        'cafe8-hashtags':'#quiet #brunch #pet-friendly #twentyfourh',
        'cafe8-link':'cafe_page=No-Social-Life'
    },
    //category3 - group
    {
        'category_id':'group', 
        'header_img':'../image/groupHeader.png', 
        
        'cafe1-img':'Cafe6.png',
        'cafe1-name':'Aroma Mocha',
        'cafe1-rating':'4.5/5',
        'cafe1-hashtags':'#quiet #aesthetic #vegan #group',
        'cafe1-link':'cafe_page=The-Bean-Palace',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'3.5/5',
        'cafe2-hashtags':'#twentyfourh #brunch #group #themed ',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe8.png',
        'cafe3-name':'Happy Orange',
        'cafe3-rating':'3/5',
        'cafe3-hashtags':'#aesthetic #brunch #group #themed',
        'cafe3-link':'cafe_page=The-Grind',

        'cafe4-img':'Cafe15.png',
        'cafe4-name':'Merp',
        'cafe4-rating':'3.5/5',
        'cafe4-hashtags':'#aesthetic #group #themed #vegan ',
        'cafe4-link':'cafe_page=The-Split-Bean',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3/5',
        'cafe5-hashtags':'#quiet #brunch #group #twentyfourh ',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe16.png',
        'cafe6-name':'GRE',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#pet-friendly #vagan #group #aesthetic',
        'cafe6-link':'cafe_page=No-Social-Life',

        'cafe7-img':'Cafe11.png',
        'cafe7-name':'QnA',
        'cafe7-rating':'2.5/5',
        'cafe7-hashtags':'#aesthetic #vegan #group #themed',
        'cafe7-link':'cafe_page=QnA',

        'cafe8-img':'Cafe9.png',
        'cafe8-name':'Black Sugars',
        'cafe8-rating':'4/5',
        'cafe8-hashtags':'#quiet #pet-friendly #brunch #group',
        'cafe8-link':'cafe_page=Black-Sugars'  
    },
    //category4 - aesthetic
    {
        'category_id':'aesthetic',
        'header_img':'../image/aestheticHeader.png', 
        
        'cafe1-img':'Cafe16.png',
        'cafe1-name':'GRE',
        'cafe1-rating':'4/5',
        'cafe1-hashtags':'#pet-friendly #vagan #group #aesthetic',
        'cafe1-link':'cafe_page=GRE',

        'cafe2-img':'Cafe10.png',
        'cafe2-name':'Bees',
        'cafe2-rating':'4.5/5',
        'cafe2-hashtags':'#aesthetic',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe8.png',
        'cafe3-name':'Happy Orange',
        'cafe3-rating':'3/5',
        'cafe3-hashtags':'#aesthetic #brunch #group #themed',
        'cafe3-link':'cafe_page=No-Doze-Cafe',

        'cafe4-img':'Cafe15.png',
        'cafe4-name':'Merp',
        'cafe4-rating':'3.5/5',
        'cafe4-hashtags':'#aesthetic #group #themed #vegan ',
        'cafe4-link':'cafe_page=Merp',

        'cafe5-img':'Cafe13.png',
        'cafe5-name':'Amooze',
        'cafe5-rating':'4/5',
        'cafe5-hashtags':'#aesthetic #pet-friendly #brunch #twentyfourh ',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe3.png',
        'cafe6-name':'The Grind',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#quiet #aesthetic #pet-friendly #twentyfourh',
        'cafe6-link':'cafe_page=The-Grind',

        'cafe7-img':'Cafe6.png',
        'cafe7-name':'Aroma Mocha',
        'cafe7-rating':'4.5/5',
        'cafe7-hashtags':'#quiet #aesthetic #vegan #group',
        'cafe7-link':'cafe_page=Aroma-Mocha',

        'cafe8-img':'Cafe11.png',
        'cafe8-name':'QnA',
        'cafe8-rating':'2.5/5',
        'cafe8-hashtags':'#aesthetic #vegan #group #themed',
        'cafe8-link':'cafe_page=Black-Sugars'  
    },
    //category5 - brunch
    {
        'category_id':'brunch',
        'header_img':'../image/brunchHeader.png', 
        
        'cafe1-img':'Cafe10.png',
        'cafe1-name':'Bees',
        'cafe1-rating':'4.5/5',
        'cafe1-hashtags':'#quiet #brunch #twentyfourh #themed',
        'cafe1-link':'cafe_page=Bees',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'3.5/5',
        'cafe2-hashtags':'#twentyfourh #brunch #group #themed ',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe7.png',
        'cafe3-name':'The Split Bean',
        'cafe3-rating':'3.5/5',
        'cafe3-hashtags':'#quiet #pet-friendly #vegan #brunch',
        'cafe3-link':'cafe_page=The-Split-Bean',

        'cafe4-img':'Cafe4.png',
        'cafe4-name':'No Social Life',
        'cafe4-rating':'3/5',
        'cafe4-hashtags':'#quiet #brunch #pet-friendly #twentyfourh',
        'cafe4-link':'cafe_page=The-Grind',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3/5',
        'cafe5-hashtags':'#quiet #brunch #group #twentyfourh ',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe9.png',
        'cafe6-name':'Black Sugars',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#quiet #pet-friendly #brunch #group',
        'cafe6-link':'cafe_page=Black-Sugars',

        'cafe7-img':'Cafe8.png',
        'cafe7-name':'Happy Orange',
        'cafe7-rating':'3/5',
        'cafe7-hashtags':'#aesthetic #brunch #group #themed',
        'cafe7-link':'cafe_page=No-Happye-Orange',

        'cafe8-img':'Cafe13.png',
        'cafe8-name':'Amooze',
        'cafe8-rating':'4/5',
        'cafe8-hashtags':'#aesthetic #pet-friendly #brunch #twentyfourh ',
        'cafe8-link':'cafe_page=Amooze'  
    },
    //category 6 - themed
    {
        'category_id':'themed',
        'header_img':'../image/themedHeader.png', 
        
        'cafe1-img':'Cafe2.png',
        'cafe1-name':'Lava Java',
        'cafe1-rating':'3.5/5',
        'cafe1-hashtags':'#twentyfourh #brunch #group #themed ',
        'cafe1-link':'cafe_page=Lava-Java',

        'cafe2-img':'Cafe1.png',
        'cafe2-name':'The Bean Palace',
        'cafe2-rating':'2.5/5',
        'cafe2-hashtags':'#themed',
        'cafe2-link':'cafe_page=The-Bean-Palace',

        'cafe3-img':'Cafe5.png',
        'cafe3-name':'No Doze Cafe',
        'cafe3-rating':'3.5/5',
        'cafe3-hashtags':'#pet-friendly #twentyfourh #vagan #themed',
        'cafe3-link':'cafe_page=No-Doze-Cafe',

        'cafe4-img':'Cafe8.png',
        'cafe4-name':'Happy Orange',
        'cafe4-rating':'3/5',
        'cafe4-hashtags':'#aesthetic #brunch #group #themed',
        'cafe4-link':'cafe_page=Happy-Orange',

        'cafe5-img':'Cafe15.png',
        'cafe5-name':'Merp',
        'cafe5-rating':'3.5/5',
        'cafe5-hashtags':'#aesthetic #group #themed #vegan ',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe11.png',
        'cafe6-name':'QnA',
        'cafe6-rating':'2.5/5',
        'cafe6-hashtags':'#aesthetic #vegan #group #themed',
        'cafe6-link':'cafe_page=QnA',

        'cafe7-img':'Cafe14.png',
        'cafe7-name':'CHao',
        'cafe7-rating':'3/5',
        'cafe7-hashtags':'#themed #vagan #twentyfourh',
        'cafe7-link':'cafe_page=CHao',

        'cafe8-img':'Cafe10.png',
        'cafe8-name':'Bees',
        'cafe8-rating':'4.5/5',
        'cafe8-hashtags':'#quiet #brunch #twentyfourh #themed',
        'cafe8-link':'cafe_page=Black-Sugars' 
    },
    //category 7 - pet-friendly
    {
        'category_id':'pet-friendly',
        'header_img':'../image/petHeader.png', 
    
        'cafe1-img':'Cafe1.png',
        'cafe1-name':'The Bean Palace',
        'cafe1-rating':'2.5/5',
        'cafe1-hashtags':'#quiet #pet-friendly #vegan',
        'cafe1-link':'cafe_page=The-Bean-Palace',

        'cafe2-img':'Cafe7.png',
        'cafe2-name':'The Split Bean',
        'cafe2-rating':'3.5/5',
        'cafe2-hashtags':'#quiet #pet-friendly #vegan #brunch',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe4.png',
        'cafe3-name':'No Social Life',
        'cafe3-rating':'3/5',
        'cafe3-hashtags':'#quiet #brunch #pet-friendly #twentyfourh',
        'cafe3-link':'cafe_page=No-Social-Life',

        'cafe4-img':'Cafe3.png',
        'cafe4-name':'The Grind',
        'cafe4-rating':'4/5',
        'cafe4-hashtags':'#quiet #aesthetic #pet-friendly #twentyfourh',
        'cafe4-link':'cafe_page=The-Grind',

        'cafe5-img':'Cafe5.png',
        'cafe5-name':'No Doze Cafe',
        'cafe5-rating':'3.5/5',
        'cafe5-hashtags':'#pet-friendly #twentyfourh #vagan #themed',
        'cafe5-link':'cafe_page=No-Doze-Cafe',

        'cafe6-img':'Cafe16.png',
        'cafe6-name':'GRE',
        'cafe6-rating':'4/5',
        'cafe6-hashtags':'#pet-friendly #vagan #group #aesthetic',
        'cafe6-link':'cafe_page=GRE',

        'cafe7-img':'Cafe13.png',
        'cafe7-name':'Amooze',
        'cafe7-rating':'4/5',
        'cafe7-hashtags':'#aesthetic #pet-friendly #brunch #twentyfourh ',
        'cafe7-link':'cafe_page=Cute-Cups',

        'cafe8-img':'Cafe9.png',
        'cafe8-name':'Black Sugars',
        'cafe8-rating':'4/5',
        'cafe8-hashtags':'#quiet #pet-friendly #brunch #group',
        'cafe8-link':'cafe_page=Black-Sugars'  
    },
    //category 8 - vegan
    {
        'category_id':'vegan',
        'header_img':'../image/veganHeader.png', 
        
        'cafe1-img':'Cafe15.png',
        'cafe1-name':'Merp',
        'cafe1-rating':'3.5/5',
        'cafe1-hashtags':'#aesthetic #group #themed #vegan ',
        'cafe1-link':'cafe_page=Cute-Cups',

        'cafe2-img':'Cafe14.png',
        'cafe2-name':'CHao',
        'cafe2-rating':'3/5',
        'cafe2-hashtags':'#themed #vagan #twentyfourh',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe1.png',
        'cafe3-name':'The Bean Palace',
        'cafe3-rating':'2.5/5',
        'cafe3-hashtags':'#quiet #pet-friendly #vegan',
        'cafe3-link':'cafe_page=The-Bean-Palace',

        'cafe4-img':'Cafe5.png',
        'cafe4-name':'No Doze Cafe',
        'cafe4-rating':'3.5/5',
        'cafe4-hashtags':'#pet-friendly #twentyfourh #vagan #themed',
        'cafe4-link':'cafe_page=No-Doze-Cafe',

        'cafe5-img':'Cafe16.png',
        'cafe5-name':'GRE',
        'cafe5-rating':'4/5',
        'cafe5-hashtags':'#pet-friendly #vagan #group #aesthetic',
        'cafe5-link':'cafe_page=GRE',

        'cafe6-img':'Cafe7.png',
        'cafe6-name':'The Split Bean',
        'cafe6-rating':'3.5/5',
        'cafe6-hashtags':'#quiet #pet-friendly #vegan #brunch',
        'cafe6-link':'cafe_page=The-Grind',

        'cafe7-img':'Cafe6.png',
        'cafe7-name':'Aroma Mocha',
        'cafe7-rating':'4.5/5',
        'cafe7-hashtags':'#quiet #aesthetic #vegan #group',
        'cafe7-link':'cafe_page=Aroma-Mocha',

        'cafe8-img':'Cafe11.png',
        'cafe8-name':'QnA',
        'cafe8-rating':'2.5/5',
        'cafe8-hashtags':'#aesthetic #vegan #group #themed',
        'cafe8-link':'cafe_page=Black-Sugars'  
    }
];

//script to load correct cafes onto category page
//query format : /category.html?category_page=category_id
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
        if(curData.category_id == category){
            var curHtml = template(curData);
            parentDiv.append(curHtml);
        }
    }
})

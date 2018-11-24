function add(){
    modal.style.display = "block";
    //when user clicks anywhere outside of the modal, also close it.
    if(event.target == modal){
        modal.style.display = "none";
    }
}

var cafeData =[
    //cafe1 - The Bean Palace
    {
        'cafe_id':'The-Bean-Palace', 
        'header_img':'../image/cafe1header.png', 
        'food1-img':'food/food1.png',
        'food2-img':'food/food4.png',
        'food3-img':'drink/drink10.png',
        'food4-img':'drink/drink1.png',
        'food5-img':'food/food19.png',
        'food6-img':'drink/drink8.png',
        'food7-img':'drink/drink3.png',
        'food8-img':'food/food8.png'

    },
    //cafe2 - Lava Java
    {
        'cafe_id':'Lava-Java', 
        'header_img':'../image/cafe2header.png', 
        'food1-img':'food/food2.png',
        'food2-img':'drink/drink2.png',
        'food3-img':'drink/drink7.png',
        'food4-img':'food/food7.png',
        'food5-img':'drink/drink9.png',
        'food6-img':'drink/drink5.png',
        'food7-img':'food/food10.png',
        'food8-img':'drink/drink3.png'

    },
    //cafe3 - The Grind
    {
        'cafe_id':'The-Grind', 
        'header_img':'../image/cafe3header.png', 
        'food1-img':'food/food4.png',
        'food2-img':'drink/drink10.png',
        'food3-img':'drink/drink8.png',
        'food4-img':'food/food5.png',
        'food5-img':'food/food12.png',
        'food6-img':'drink/drink6.png',
        'food7-img':'food/food15.png',
        'food8-img':'drink/drink2.png'

    }, 
    //cafe4 - No Social Life
    {
        'cafe_id':'No-Social-Life', 
        'header_img':'../image/cafe4header.png', 
        'food1-img':'food/food17.png',
        'food2-img':'drink/drink8.png',
        'food3-img':'drink/drink5.png',
        'food4-img':'food/food18.png',
        'food5-img':'drink/drink3.png',
        'food6-img':'food/food1.png',
        'food7-img':'drink/drink2.png',
        'food8-img':'drink/drink1.png'

    },
    //cafe5 - No Doze Cafe
    {
        'cafe_id':'No-Doze-Cafe', 
        'header_img':'../image/cafe5header.png', 
        'food1-img':'drink/drink6.png',
        'food2-img':'food/food7.png',
        'food3-img':'drink/drink8.png',
        'food4-img':'food/food2.png',
        'food5-img':'drink/drink9.png',
        'food6-img':'food/food5.png',
        'food7-img':'drink/drink10.png',
        'food8-img':'drink/drink1.png'

    },
    //cafe6 - Aroma Mocha
    {
        'cafe_id':'Aroma-Mocha', 
        'header_img':'../image/cafe6header.png', 
        'food1-img':'food/food12.png',
        'food2-img':'drink/drink3.png',
        'food3-img':'drink/drink2.png',
        'food4-img':'drink/drink8.png',
        'food5-img':'food/food8.png',
        'food6-img':'drink/drink5.png',
        'food7-img':'food/food4.png',
        'food8-img':'drink/drink1.png'

    },
    //cafe7 - The Split Bean
    {
        'cafe_id':'The-Split-Bean', 
        'header_img':'../image/cafe7header.png', 
        'food1-img':'food/food2.png',
        'food2-img':'drink/drink10.png',
        'food3-img':'drink/drink8.png',
        'food4-img':'food/food5.png',
        'food5-img':'drink/drink6.png',
        'food6-img':'drink/drink4.png',
        'food7-img':'food/food6.png',
        'food8-img':'food/food7.png'

    },
    //cafe8 - Happy Orange
    {
        'cafe_id':'Happy-Orange', 
        'header_img':'../image/cafe8header.png', 
        'food1-img':'drink/drink2.png',
        'food2-img':'food/food8.png',
        'food3-img':'food/food9.png',
        'food4-img':'drink/drink9.png',
        'food5-img':'drink/drink7.png',
        'food6-img':'food/food12.png',
        'food7-img':'food/food13.png',
        'food8-img':'drink/drink5.png'

    },
    //cafe9 - Black Sugars
    {
        'cafe_id':'Black-Sugars', 
        'header_img':'../image/cafe9header.png', 
        'food1-img':'drink/drink3.png',
        'food2-img':'food/food4.png',
        'food3-img':'drink/drink1.png',
        'food4-img':'food/food14.png',
        'food5-img':'food/food18.png',
        'food6-img':'drink/drink10.png',
        'food7-img':'food/food19.png',
        'food8-img':'drink/drink8.png'

    },
    //cafe10 - Bees
    {
        'cafe_id':'Bees', 
        'header_img':'../image/cafe10header.png', 
        'food1-img':'drink/drink6.png',
        'food2-img':'drink/drink4.png',
        'food3-img':'food/food1.png',
        'food4-img':'drink/drink2.png',
        'food5-img':'food/food2.png',
        'food6-img':'food/food7.png',
        'food7-img':'drink/drink9.png',
        'food8-img':'food/food11.png'

    },
    //cafe11 - QnA
    {
        'cafe_id':'QnA', 
        'header_img':'../image/cafe11header.png', 
        'food1-img':'drink/drink7.png',
        'food2-img':'food/food1.png',
        'food3-img':'drink/drink5.png',
        'food4-img':'food/food6.png',
        'food5-img':'food/food8.png',
        'food6-img':'drink/drink3.png',
        'food7-img':'drink/drink1.png',
        'food8-img':'food/food11.png'

    },
    //cafe12 - Cute Cups
    {
        'cafe_id':'Cute-Cups', 
        'header_img':'../image/cafe12header.png', 
        'food1-img':'drink/drink10.png',
        'food2-img':'drink/drink9.png',
        'food3-img':'food/food2.png',
        'food4-img':'drink/drink8.png',
        'food5-img':'food/food8.png',
        'food6-img':'drink/drink7.png',
        'food7-img':'food/food9.png',
        'food8-img':'food/food10.png'

    },
    //cafe13 - Amooze
    {
        'cafe_id':'Amooze', 
        'header_img':'../image/cafe13header.png', 
        'food1-img':'drink/drink6.png',
        'food2-img':'food/food2.png',
        'food3-img':'drink/drink5.png',
        'food4-img':'food/food5.png',
        'food5-img':'food/food6.png',
        'food6-img':'drink/drink4.png',
        'food7-img':'food/food15.png',
        'food8-img':'drink/drink3.png'

    },
    //cafe14 - CHao
    {
        'cafe_id':'CHao', 
        'header_img':'../image/cafe14header.png', 
        'food1-img':'food/food16.png',
        'food2-img':'drink/drink2.png',
        'food3-img':'food/food18.png',
        'food4-img':'drink/drink1.png',
        'food5-img':'food/food4.png',
        'food6-img':'drink/drink10.png',
        'food7-img':'drink/drink9.png',
        'food8-img':'food/food3.png'

    },
    //cafe15 - Merp
    {
        'cafe_id':'Merp', 
        'header_img':'../image/cafe15header.png', 
        'food1-img':'drink/drink8.png',
        'food2-img':'food/food2.png',
        'food3-img':'drink/drink7.png',
        'food4-img':'food/food6.png',
        'food5-img':'food/food9.png',
        'food6-img':'drink/drink6.png',
        'food7-img':'food/food14.png',
        'food8-img':'drink/drink5.png'

    },
    //cafe16 - GRE
    {
        'cafe_id':'GRE', 
        'header_img':'../image/cafe16header.png', 
        'food1-img':'drink/drink4.png',
        'food2-img':'drink/drink3.png',
        'food3-img':'food/food18.png',
        'food4-img':'drink/drink2.png',
        'food5-img':'food/food13.png',
        'food6-img':'drink/drink1.png',
        'food7-img':'food/food3.png',
        'food8-img':'food/food5.png'

    }   
];
    
//script to load correct cafes
//query format : ./cafe.html?cafe_page=cafe_id
$(document).ready(function(){
    //compile template
    var source = $('#cafe-template').html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedCafes");

    //allow for fake-database queries
    var queryParams = new URLSearchParams(window.location.search);
    var cafe = queryParams.get('cafe_page');
    console.log('query for', cafe);

    for(var i=0; i<cafeData.length; i++){
        console.log('in for loop');
        var curData = cafeData[i];
        if(curData.cafe_id == cafe){
            var curHtml = template(curData);
            parentDiv.append(curHtml);
        }
    }
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
 * Saves the current cafe to addHTML#collection_name in localStorage
 * @param {*} collection 
 *
function addToCollection (collection){
    //selected_option is #collection_name
    var selected_option = '#'+$('.dropdown').val();
    console.log(selected_option);

    //alert that successfully added to collection, and then close
    window.alert('Successfully added this cafe to'+selected_option+'!');
    closeNav();

    //localStorage.removeItem('num'+selected_option);
    //localStorage.removeItem('addHTML'+selected_option);
///*
    //Initialize num#selected_option in localStorage to 0
    console.log('num'+selected_option+' before =', localStorage.getItem('num'+selected_option));
    if(localStorage.getItem('num'+selected_option)==null){
        console.log('Initializing num'+selected_option+'...')
        localStorage.setItem('num'+selected_option,'0');
        console.log('num'+selected_option+' now is...', localStorage.getItem('num'+selected_option));
    }

    //retrieve current value of num
    var curr_num = parseInt(localStorage.getItem('num'+selected_option), 10);
    //retrieve cafe name
    var queryParams = new URLSearchParams(window.location.search);
    var cafe = queryParams.get('cafe_page');
    //retrieve cafe link
    var cafe_link;
    for(var i=0; i<cafeData.length; i++){
        var curCafe = cafeData[i];
        if(curCafe.cafe_name == cafe){
            cafe_link = 'cafe_page='+cafe;
        }
    }
    //retrieve cafe image
    var cafe_image;
    for(var i=0; i<cafe_img_Data.length; i++){
        var cur = cafe_img_Data[i];
        if(cur["cafe-name"]==cafe){
            cafe_image = cur["cafe-img"];
        }
    }

    var curData = {
        'cafe-img':cafe_image,
        'cafe-link':cafe_link,
        'cafe-name': cafe     
    };
    console.log('curData = ',curData);
    var curHTML = undefined;
    var source = undefined;
    var template = undefined;

    // Decide which template (in cafe.html) to use based on the number of collection currently in row 
    // fill template to later add to collection.html (in collection.html)
    if( curr_num%4 == 0 ){
        //compile template cafeCardNewRow
        source = $('#cafeCardNewRow').html();
        
        template = Handlebars.compile(source);
        curHTML = template(curData);
    }
    else{
        //compile template cafeCard
        source = $('#cafeCard').html();
        
        template = Handlebars.compile(source);
        curHTML = template(curData);
    }
    console.log('curHTML = ', curHTML);


    // Update addHTML#collection_name in localStorage (initialize or append)
    if(localStorage.getItem('addHTML'+selected_option) == null){
        localStorage.setItem('addHTML'+selected_option, curHTML)
    }else{
        new_addHTML_inLS = localStorage.getItem('addHTML'+selected_option) + curHTML;
        localStorage.setItem('addHTML'+selected_option, new_addHTML_inLS);
    }

    // pull from localStorage when load category page
        
    //update curr_num
    curr_num++;
    localStorage.setItem('num'+selected_option, curr_num);

    console.log('num'+selected_option+' after =', localStorage.getItem('num'+selected_option)); 
 //   
}*/
    
//fake database
var cafeData =[
    //cafe1
    {
        'cafe_name':'No_Social_Life', 
        'header_img':'../image/2.jpg', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe2
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe3
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    }, 
    //cafe4
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe5
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe6
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe7
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe8
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe9
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe10
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe11
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe12
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe13
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe14
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe15
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    },
    //cafe16
    {
        'cafe_name':'', 
        'header_img':'../image/', 
        'food1-img':'',
        'food2-img':'',
        'food3-img':'',
        'food4-img':'',
        'food5-img':'',
        'food6-img':'',
        'food7-img':'',
        'food8-img':''

    }   
]
    
    //script to load correct cafes
    //query format : ./cafe.html?cafe_page=cafe_name
    //replae cafe_name with the corresponding name
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
            if(curData.cafe_name == cafe){
                var curHtml = template(curData);
                parentDiv.append(curHtml);
            }
        }
    })
    
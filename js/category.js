//fake database
var categoryData =[
    //category1 - quiet
    {
        'category_id':'quiet', 
        'header_img':'../image/quietHeader.png', 

        'cafe1-img':'Cafe1.png',
        'cafe1-name':'The Bean Palace',
        'cafe1-rating':'3.png',
        'cafe1-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe1-link':'cafe_page=The-Bean-Palace',

        'cafe2-img':'Cafe4.png',
        'cafe2-name':'No Social Life',
        'cafe2-rating':'3.png',
        'cafe2-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe2-link':'cafe_page=No-Social-Life',

        'cafe3-img':'Cafe7.png',
        'cafe3-name':'The Split Bean',
        'cafe3-rating':'4.png',
        'cafe3-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-brunch.png" class="tag-b">',
        'cafe3-link':'cafe_page=The-Split-Bean',

        'cafe4-img':'Cafe3.png',
        'cafe4-name':'The Grind',
        'cafe4-rating':'4.png',
        'cafe4-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe4-link':'cafe_page=The-Grind',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3.png',
        'cafe5-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe9.png',
        'cafe6-name':'Black Sugars',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe6-link':'cafe_page=Black-Sugars',

        'cafe7-img':'Cafe10.png',
        'cafe7-name':'Bees',
        'cafe7-rating':'5.png',
        'cafe7-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe7-link':'cafe_page=Bees',

        'cafe8-img':'Cafe6.png',
        'cafe8-name':'Aroma Mocha',
        'cafe8-rating':'4.png',
        'cafe8-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe8-link':'cafe_page=Aroma-Mocha'
    },
    //category2 - twentyfourh
    {
        'category_id':'twentyfourh', 
        'header_img':'../image/24-hrHeader.png', 
        
        'cafe1-img':'Cafe13.png',
        'cafe1-name':'Amooze',
        'cafe1-rating':'4.png',
        'cafe1-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe1-link':'cafe_page=Amooze',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'4.png',
        'cafe2-hashtags':
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe14.png',
        'cafe3-name':'CHao',
        'cafe3-rating':'3.png',
        'cafe3-hashtags':
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe3-link':'cafe_page=CHao',

        'cafe4-img':'Cafe12.png',
        'cafe4-name':'Cute Cups',
        'cafe4-rating':'3.png',
        'cafe4-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe4-link':'cafe_page=Cute-Cups',

        'cafe5-img':'Cafe5.png',
        'cafe5-name':'No Doze Cafe',
        'cafe5-rating':'4.png',
        'cafe5-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe5-link':'cafe_page=No-Doze-Cafe',

        'cafe6-img':'Cafe3.png',
        'cafe6-name':'The Grind',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe6-link':'cafe_page=The-Grind',

        'cafe7-img':'Cafe10.png',
        'cafe7-name':'Bees',
        'cafe7-rating':'5.png',
        'cafe7-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe7-link':'cafe_page=Bees',

        'cafe8-img':'Cafe4.png',
        'cafe8-name':'No Social Life',
        'cafe8-rating':'3.png',
        'cafe8-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe8-link':'cafe_page=No-Social-Life'
    },
    //category3 - group
    {
        'category_id':'group', 
        'header_img':'../image/groupHeader.png', 
        
        'cafe1-img':'Cafe6.png',
        'cafe1-name':'Aroma Mocha',
        'cafe1-rating':'5.png',
        'cafe1-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe1-link':'cafe_page=Aroma-Mocha',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'4.png',
        'cafe2-hashtags':
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe8.png',
        'cafe3-name':'Happy Orange',
        'cafe3-rating':'3.png',
        'cafe3-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe3-link':'cafe_page=Happy-Orange',

        'cafe4-img':'Cafe15.png',
        'cafe4-name':'Merp',
        'cafe4-rating':'4.png',
        'cafe4-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">',
        'cafe4-link':'cafe_page=Merp',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3.png',
        'cafe5-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe16.png',
        'cafe6-name':'GRE',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">',
        'cafe6-link':'cafe_page=GRE',

        'cafe7-img':'Cafe11.png',
        'cafe7-name':'QnA',
        'cafe7-rating':'3.png',
        'cafe7-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe7-link':'cafe_page=QnA',

        'cafe8-img':'Cafe9.png',
        'cafe8-name':'Black Sugars',
        'cafe8-rating':'4.png',
        'cafe8-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe8-link':'cafe_page=Black-Sugars'  
    },
    //category4 - aesthetic
    {
        'category_id':'aesthetic',
        'header_img':'../image/aestheticHeader.png', 
        
        'cafe1-img':'Cafe16.png',
        'cafe1-name':'GRE',
        'cafe1-rating':'4.png',
        'cafe1-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">',
        'cafe1-link':'cafe_page=GRE',

        'cafe2-img':'Cafe10.png',
        'cafe2-name':'Bees',
        'cafe2-rating':'5.png',
        'cafe2-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe2-link':'cafe_page=Bees',

        'cafe3-img':'Cafe8.png',
        'cafe3-name':'Happy Orange',
        'cafe3-rating':'3.png',
        'cafe3-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe3-link':'cafe_page=Happy-Orange',

        'cafe4-img':'Cafe15.png',
        'cafe4-name':'Merp',
        'cafe4-rating':'4.png',
        'cafe4-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">',
        'cafe4-link':'cafe_page=Merp',

        'cafe5-img':'Cafe13.png',
        'cafe5-name':'Amooze',
        'cafe5-rating':'4.png',
        'cafe5-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe5-link':'cafe_page=Amooze',

        'cafe6-img':'Cafe3.png',
        'cafe6-name':'The Grind',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe6-link':'cafe_page=The-Grind',

        'cafe7-img':'Cafe6.png',
        'cafe7-name':'Aroma Mocha',
        'cafe7-rating':'5.png',
        'cafe7-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe7-link':'cafe_page=Aroma-Mocha',

        'cafe8-img':'Cafe11.png',
        'cafe8-name':'QnA',
        'cafe8-rating':'3.png',
        'cafe8-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe8-link':'cafe_page=QnA'  
    },
    //category5 - brunch
    {
        'category_id':'brunch',
        'header_img':'../image/brunchHeader.png', 
        
        'cafe1-img':'Cafe10.png',
        'cafe1-name':'Bees',
        'cafe1-rating':'5.png',
        'cafe1-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe1-link':'cafe_page=Bees',

        'cafe2-img':'Cafe2.png',
        'cafe2-name':'Lava Java',
        'cafe2-rating':'4.png',
        'cafe2-hashtags':
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe2-link':'cafe_page=Lava-Java',

        'cafe3-img':'Cafe7.png',
        'cafe3-name':'The Split Bean',
        'cafe3-rating':'4.png',
        'cafe3-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-brunch.png" class="tag-b">',
        'cafe3-link':'cafe_page=The-Split-Bean',

        'cafe4-img':'Cafe4.png',
        'cafe4-name':'No Social Life',
        'cafe4-rating':'3.png',
        'cafe4-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe4-link':'cafe_page=No-Social-Life',

        'cafe5-img':'Cafe12.png',
        'cafe5-name':'Cute Cups',
        'cafe5-rating':'3.png',
        'cafe5-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe5-link':'cafe_page=Cute-Cups',

        'cafe6-img':'Cafe9.png',
        'cafe6-name':'Black Sugars',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe6-link':'cafe_page=Black-Sugars',

        'cafe7-img':'Cafe8.png',
        'cafe7-name':'Happy Orange',
        'cafe7-rating':'3.png',
        'cafe7-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe7-link':'cafe_page=Happy-Orange',

        'cafe8-img':'Cafe13.png',
        'cafe8-name':'Amooze',
        'cafe8-rating':'4.png',
        'cafe8-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe8-link':'cafe_page=Amooze'  
    },
    //category 6 - themed
    {
        'category_id':'themed',
        'header_img':'../image/themedHeader.png', 
        
        'cafe1-img':'Cafe2.png',
        'cafe1-name':'Lava Java',
        'cafe1-rating':'4.png',
        'cafe1-hashtags':
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe1-link':'cafe_page=Lava-Java',

        'cafe2-img':'Cafe1.png',
        'cafe2-name':'The Bean Palace',
        'cafe2-rating':'3.png',
        'cafe2-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe2-link':'cafe_page=The-Bean-Palace',

        'cafe3-img':'Cafe5.png',
        'cafe3-name':'No Doze Cafe',
        'cafe3-rating':'4.png',
        'cafe3-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe3-link':'cafe_page=No-Doze-Cafe',

        'cafe4-img':'Cafe8.png',
        'cafe4-rating':'3.png',
        'cafe4-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe4-link':'cafe_page=Happy-Orange',

        'cafe5-img':'Cafe15.png',
        'cafe5-name':'Merp',
        'cafe5-rating':'4.png',
        'cafe5-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">',
        'cafe5-link':'cafe_page=Merp',

        'cafe6-img':'Cafe11.png',
        'cafe6-name':'QnA',
        'cafe6-rating':'3.png',
        'cafe6-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe6-link':'cafe_page=QnA',

        'cafe7-img':'Cafe14.png',
        'cafe7-name':'CHao',
        'cafe7-rating':'3.png',
        'cafe7-hashtags':
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe7-link':'cafe_page=CHao',

        'cafe8-img':'Cafe10.png',
        'cafe8-name':'Bees',
        'cafe8-rating':'5.png',
        'cafe8-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe8-link':'cafe_page=Bees' 
    },
    //category 7 - pet-friendly
    {
        'category_id':'pet-friendly',
        'header_img':'../image/petHeader.png', 
    
        'cafe1-img':'Cafe1.png',
        'cafe1-name':'The Bean Palace',
        'cafe1-rating':'3.png',
        'cafe1-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe1-link':'cafe_page=The-Bean-Palace',

        'cafe2-img':'Cafe7.png',
        'cafe2-name':'The Split Bean',
        'cafe2-rating':'4.png',
        'cafe2-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-brunch.png" class="tag-b">',
        'cafe2-link':'cafe_page=The-Split-Bean',

        'cafe3-img':'Cafe4.png',
        'cafe3-name':'No Social Life',
        'cafe3-rating':'3.png',
        'cafe3-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe3-link':'cafe_page=No-Social-Life',

        'cafe4-img':'Cafe3.png',
        'cafe4-name':'The Grind',
        'cafe4-rating':'4.png',
        'cafe4-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe4-link':'cafe_page=The-Grind',

        'cafe5-img':'Cafe5.png',
        'cafe5-name':'No Doze Cafe',
        'cafe5-rating':'4.png',
        'cafe5-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe5-link':'cafe_page=No-Doze-Cafe',

        'cafe6-img':'Cafe16.png',
        'cafe6-name':'GRE',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">',
        'cafe6-link':'cafe_page=GRE',

        'cafe7-img':'Cafe13.png',
        'cafe7-name':'Amooze',
        'cafe7-rating':'4.png',
        'cafe7-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe7-link':'cafe_page=Amooze',

        'cafe8-img':'Cafe9.png',
        'cafe8-name':'Black Sugars',
        'cafe8-rating':'4.png',
        'cafe8-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe8-link':'cafe_page=Black-Sugars'  
    },
    //category 8 - vegan
    {
        'category_id':'vegan',
        'header_img':'../image/veganHeader.png', 
        
        'cafe1-img':'Cafe15.png',
        'cafe1-name':'Merp',
        'cafe1-rating':'4.png',
        'cafe1-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">',
        'cafe1-link':'cafe_page=Merp',

        'cafe2-img':'Cafe14.png',
        'cafe2-name':'CHao',
        'cafe2-rating':'3.png',
        'cafe2-hashtags':
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe2-link':'cafe_page=CHao',

        'cafe3-img':'Cafe1.png',
        'cafe3-name':'The Bean Palace',
        'cafe3-rating':'3.png',
        'cafe3-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe3-link':'cafe_page=The-Bean-Palace',

        'cafe4-img':'Cafe5.png',
        'cafe4-name':'No Doze Cafe',
        'cafe4-rating':'4.png',
        'cafe4-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe4-link':'cafe_page=No-Doze-Cafe',

        'cafe5-img':'Cafe16.png',
        'cafe5-name':'GRE',
        'cafe5-rating':'4.png',
        'cafe5-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">',
        'cafe5-link':'cafe_page=GRE',

        'cafe6-img':'Cafe7.png',
        'cafe6-name':'The Split Bean',
        'cafe6-rating':'4.png',
        'cafe6-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-brunch.png" class="tag-b">',
        'cafe6-link':'cafe_page=The-Split-Bean',

        'cafe7-img':'Cafe6.png',
        'cafe7-name':'Aroma Mocha',
        'cafe7-rating':'5.png',
        'cafe7-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe7-link':'cafe_page=Aroma-Mocha',

        'cafe8-img':'Cafe11.png',
        'cafe8-name':'QnA',
        'cafe8-rating':'3.png',
        'cafe8-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe8-link':'cafe_page=QnA'  
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

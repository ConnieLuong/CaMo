var shuffleList=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var cafeList = [
    {
        'cafe-img':'Cafe1.png',
        'cafe-name':'The Bean Palace',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=The-Bean-Palace'
    },

    {
        'cafe-img':'Cafe2.png',
        'cafe-name':'Lava Java',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=Lava-Java',
    },

    {
        'cafe-img':'Cafe3.png',
        'cafe-name':'The Grind',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe-link':'cafe_page=The-Grind'
    },

    {
        'cafe-img':'Cafe4.png',
        'cafe-name':'No Social Life',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe-link':'cafe_page=No-Social-Life'
    },

    {
        'cafe-img':'Cafe5.png',
        'cafe-name':'No Doze Cafe',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=No-Doze-Cafe'
    },

    {
        'cafe-img':'Cafe6.png',
        'cafe-name':'Aroma Mocha',
        'cafe-rating':'5.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe-link':'cafe_page=Aroma-Mocha'
    },

    {
        'cafe-img':'Cafe7.png',
        'cafe-name':'The Split Bean',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-brunch.png" class="tag-b">',
        'cafe-link':'cafe_page=The-Split-Bean'
    },

    {
        'cafe-img':'Cafe8.png',
        'cafe-name':'Happy Orange',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=Happy-Orange'
    },

    {
        'cafe-img':'Cafe9.png',
        'cafe-name':'Black Sugars',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">',
        'cafe-link':'cafe_page=Black-Sugars'
    },

    {
        'cafe-img':'Cafe10.png',
        'cafe-name':'Bees',
        'cafe-rating':'5.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=Bees'
    },

    {
        'cafe-img':'Cafe11.png',
        'cafe-name':'QnA',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">',
        'cafe-link':'cafe_page=QnA'
    },

    {
        'cafe-img':'Cafe12.png',
        'cafe-name':'Cute Cups',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-quiet.png" class="tag-q">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe-link':'cafe_page=Cute-Cups'
    },

    {
        'cafe-img':'Cafe13.png',
        'cafe-name':'Amooze',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-brunch.png" class="tag-b">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe-link':'cafe_page=Amooze'
    },

    {
        'cafe-img':'Cafe14.png',
        'cafe-name':'CHao',
        'cafe-rating':'3.png',
        'cafe-hashtags':
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-24hr.png" class="tag-24">',
        'cafe-link':'cafe_page=CHao'
    },

    {
        'cafe-img':'Cafe15.png',
        'cafe-name':'Merp',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-aesthetic.png" class="tag-a">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-themed.png" class="tag-t">'+
            '<img src="../image/tag-vegan.png" class="tag-v">',
        'cafe-link':'cafe_page=Merp'
    },

    {
        'cafe-img':'Cafe16.png',
        'cafe-name':'GRE',
        'cafe-rating':'4.png',
        'cafe-hashtags':
            '<img src="../image/tag-pet.png" class="tag-p">'+
            '<img src="../image/tag-vegan.png" class="tag-v">'+
            '<img src="../image/tag-group.png" class="tag-g">'+
            '<img src="../image/tag-aesthetic.png" class="tag-a">',
        'cafe-link':'cafe_page=GRE'
    }
];

$(document).ready(function() {
    shuffle(shuffleList);
    update();
})

function update(){

    $("#CafeCards").html(
        '<div class="card-group" style="margin-right: 15%; margin-left: 15%;" >'+
            '<div class="col-sm-3" style="padding:3% 0" >' +
                '<div class="card">' +
                    '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[0]]["cafe-link"]+'">'+
                    '<img class="card-img-top" src="../image/'+cafeList[shuffleList[0]]["cafe-img"]+'">' +
                    // '<div class="card-body">' +
                    //     '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[0]]["cafe-name"]+'</h5>' +
                    //     '<img src="../image/star'+cafeList[shuffleList[0]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
                    //     '<div style="margin-top:1%">' +
                    //         cafeList[shuffleList[0]]["cafe-hashtags"] +
                    //     '</div>' +
                    // '</div>' +
                    '</a>'+
                '</div>' +
            '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
            '<div class="card">' +
                '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[1]]["cafe-link"]+'">'+
                '<img class="card-img-top" src="../image/'+cafeList[shuffleList[1]]["cafe-img"]+'">' +
                // '<div class="card-body">' +
                //     '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[1]]["cafe-name"]+'</h5>' +
                //     '<img src="../image/star'+cafeList[shuffleList[1]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
                //     '<div style="margin-top:1%">' +
                //         cafeList[shuffleList[1]]["cafe-hashtags"] +
                //     '</div>' +
                // '</div>' +
                '</a>'+
            '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[2]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[2]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[2]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[2]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[2]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[3]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[3]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[3]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[3]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[3]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[4]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[4]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[4]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[4]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[4]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[5]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[5]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[5]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[5]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[5]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[6]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[6]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[6]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[6]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[6]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '<div class="col-sm-3" style="padding:3% 0">' +
        '<div class="card">' +
        '<a href="../Cafe/cafe.html?'+cafeList[shuffleList[7]]["cafe-link"]+'">'+
        '<img class="card-img-top" src="../image/'+cafeList[shuffleList[7]]["cafe-img"]+'">' +
        // '<div class="card-body">' +
        // '<h5 class="card-title" style="font-family: Caveat; font-size: 36px; color: #7E4F4F">'+cafeList[shuffleList[7]]["cafe-name"]+'</h5>' +
        // '<img src="../image/star'+cafeList[shuffleList[7]]["cafe-rating"]+'" style="max-width: 150px; width:80%;">' +
        // '<div style="margin-top:1%">' +
        // cafeList[shuffleList[7]]["cafe-hashtags"] +
        // '</div>' +
        // '</div>' +
        '</a>'+
        '</div>' +
        '</div>'+

        '</div>'
    );
}

function shuffle(array){
    var j,x,i=0,len=array.length;
    for(i;i<len;i++){
        j=Math.floor(Math.random()*len);
        x=array[i];
        array[i]=array[j];
        array[j]=x;
    }
}

// hover effect for explore more icon
function exploreHover(element) {
    element.setAttribute('src', '../image/exploremore2.png');
}

function exploreUnhover(element) {
    element.setAttribute('src', '../image/exploremore1.png');
}
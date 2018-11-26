$(document).ready(function() {
    loadNavBar();
})

/*
 * Function that is called when the document is ready.
 * Loads navbar into pages excluding:
 *      * index.html
 *      * more.html
 *      * profile.html
 *      * search.html
 */
function loadNavBar(){
    $("head").append(
        '<meta name="viewport" content="width=device-width, initial-scale=1">'+
        '<!-- Bootstrap -->'+
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" '+
        'integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">'+
        '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" '+
        'integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>'+
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" '+
        'integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>'+
        '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" '+
        'integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>'+
        '<!-- Fonts -->'+
        '<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">'+
        '<link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet">'
    );
    $("#menu").html(
        '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">'+
            '<a class="navbar-brand" id="back-button" onclick="goBack()" ><img src="../image/backButton.png" width="25"></a>'+
            '<a class="navbar-brand" href="../index.html"><img src="../image/LightLogoHor.png" id="logo" alt="profile icon" width="100"></a>'+
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
            
            '<div class="collapse navbar-collapse" id="pages">'+
                '<ul class="navbar-nav ml-auto mt-2 mt-lg-0">'+
                    '<li><a class="nav-link" href="../index.html">Explore</a></li>'+
                    '<li id="collections"></li>'+
                    '<li id="profile"><a class="nav-link" href="../login.html">Log In</a></li>'+
                '</ul>'+
            '</div>'+
        '</nav>'+

        '<div id="footer">'+
        '<a href="../help/help.html"><img src="../image/helpIcon.png"></a>'+
        '</div>'
    );
    //set local storage login status to false if haven't set yet
    if(localStorage.getItem('loginLS')==null){
        localStorage.setItem('loginLS','false');
    }
    checkLogIn();
}

function checkLogIn(){
    // If login == true, show profile
    if(localStorage.getItem('loginLS')=='true'){
        $("#collections").html(
            '<a class="nav-link" href="../collections/collections-new.html">Collections</a></li>'
        )
        $("#profile").html(
            '<a class="nav-link" href="../profile.html">Profile</a>'
        );
    }
    // Else if login==false, show Log In
    else{
        $("#collections").html(
            ''
        )
        $('#profile').html(
            '<a class="nav-link" href="../login.html">Log In</a>'
        );
    }
}

function goBack(){
    window.history.back();
}

/* Old navbar js loader
function loadNavBar() {
	$("#navbar").html(

        VERSION 1
        '<ul>'+
        '<li id="profile"><a href="../profile.html">Profile</a></li>'+
        '<li id="explore"><a href="../index.html">Explore</a></li>'+
        '<li id="search"><a href="../search.html">Search</a></li>'+
        '<li id="more"><a href="../more.html">More</a></li>'+'</ul>'

        VERSION 2
        '<ul class="menuopt">'+
            '<a href="../index.html"><img src="../image/LightLogoHor.png" id="logo" alt="profile icon" width="100"></a>'+
            '<li><a href="../profile.html">Profile</a></li>'+
            '<li><a href="../more.html">More</a></li>'+
            '<li><a href="../search.html">Search</a></li>'+
            '<li><a href="../index.html">Explore</a></li>'+
        '</ul>'
    );

}*/
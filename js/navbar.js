$(document).ready(function() {
	loadNavBar();
})

/*
 * Function that is called when the document is ready.
 * Loads navbar
 */
function loadNavBar(){
    $("#menu").html(

        '<ul class="menuopt">'+
            '<a href="../index.html"><img src="../image/LightLogoHor.png" id="logo" alt="profile icon" width="100"></a>'+
            '<li><a href="../more.html">About</a></li>'+
            '<li><a href="../search.html">Search</a></li>'+
            '<li><a href="../profile.html">Profile</a></li>'+
            '<li><a href="../index.html">Explore</a></li>'+
        '</ul>'
    );
}

/* Old navbar js loader
function loadNavBar() {
	$("#navbar").html(
        '<ul>'+
        '<li id="profile"><a href="../profile.html">Profile</a></li>'+
        '<li id="explore"><a href="../index.html">Explore</a></li>'+
        '<li id="search"><a href="../search.html">Search</a></li>'+
        '<li id="more"><a href="../more.html">More</a></li>'+'</ul>'
    );

}*/
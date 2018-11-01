$(document).ready(function() {
	loadNavBar();
})

/*
 * Function that is called when the document is ready.
 * Loads navbar
 */
function loadNavBar(){
    $("#navbar").html(
        '<table cellspacing="0" cellpadding="0">'+
            '<tbody>'+
            '<tr>'+
                '<td class="icon profile"><a href="../profile.html"><img src="../image/icons8-user.png" alt="profile icon" width="70%"></a></td>'+
                '<td class="icon explore"><a href="../index.html"><img src="../image/icons8-hot_chocolate.png" alt="explore icon" width="70%"></a></td>'+
                '<td class="icon search"><a href="../search.html"><img src="../image/icons8-search.png" alt="search icon" width="70%"></a></td>'+
                '<td class="icon more"><a href="../more.html"><img src="../image/icons8-more.png" alt="more icon" width="70%"></a></td>'+
            '</tr>'+
            '<tr>'+
                '<td class="profile"><a href="../profile.html" style="color: #FFFCFC;">Profile</a></td>'+
                '<td class="explore"><a href="../index.html" style="color: #FFFCFC;">Explore</a></td>'+
                '<td class="search"><a href="../search.html" style="color: #FFFCFC;">Search</a></td>'+
                '<td class="more"><a href="../more.html" style="color: #FFFCFC;">More</a></td>'+
            '</tr>'+
            '</tbody>'+
        '</table>'
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
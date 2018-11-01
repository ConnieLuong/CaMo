# CaMo
CSE170/COGS120 Project


# NOTICE TO TEAM MEMBERS
### (from Connie)
In order to achieve the sizing effect and navbar we talked about, I've made some formating decisions 
that I hope you guys are cool with. So I'll list the certain formating stuff you guys should stick to 
when creating your html file. Of course, you can always copy and paste a previous HTML file and then 
edit it. But if you do do this, please make sure all the links are correct. It will be more efficient
and intuitive for us to use relative file paths, so I will first talk about how files will be organized:

* We have a total of 4 main pages (Profile, Explore, Search, More). Please place the the main pages directly
in the first layer. In other words, please don't put, for example, 'search.html' into the 'search' directory. Otherwise
the navbar links we not align correctly.

* Do create directories to better categorize the remaining pages. Right now, we have directories: categories, articles,
more_page, profile_page, images, css, js, wireframes. Note the search directory has yet to be created.
Files in these directories will be referred to as the 2nd layer. Avoid placings file in a 3rd layer (nested directories)
as this will also mess with the navbar links.

So I'll lay out the organization if more clearly below:
<b>1st layer</b>
* search.html
* index.html
* profile.html
* more.html
* any directories for categorizing stuff (categories, articles, more_page, profile_page, images, 
css, js, wireframes)

<b>2nd layer (example: 'categories' directory)</b>
* Group.html
* 24H.html
* Quiet.html
* Aesthetic.html
* etc....

Next I'll talk about basic setup things within the html pages
* Under stylesheets in head, link the stylesheets index.css and navbar.css along with the stylesheet for that specific
page. index.css takes care of the sizing issue and navbar.css takes care of navbar stuff.
* Right before the `</body>` closing tag insert the script links 
    `<!-- Load Scripts-->
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="js/navbar.js"></script>`
   You might need to change `js/navbar.js` to `../js/navbar.js` depending which layer you are on.
* Also wrap your page content in a div with id name viewport. This is how I did the sizing. You do not need to place the
script in it. 

Next I'll talk about how to add the navbars to the pages. 
* If the html file is on the first layer, you'll have
to copy and paste the navbar from one of the main pages already finished (like index.html) and put it in the body.
It honeslty doesn't matter if you place it on the top of body or bottom of body since the css already takes care of it
so that it will only show up at the bottom of the screen.
* If the html file is on the second layer, you can simply put this `<nav id="navbar"></nav>` and the javascript
will take care of it.

One last thing, when writing your commit messages, please add your name or initals at the end in parenthese so it'll
help speed up who updated what without clicking and checking on github and stuff. It just speeds stuff up and makes
everything more convenience. 

That was a lot of stuff to update you guys on. If there are any questions or unclear, just refer to index.html. 
Or just ask me lol.

-------------------------------------------------------------------------------------------------------


<b>Our point of view:</b> With so many new trending foods and places to dine at, it has 
now become increasingly easy to become overwhelmed with the problem of overchoice. 
But enjoying new food can be made much simpler when approached in a more efficient way.

<b>Project Idea:</b> Cafe Search Engine

<b>Description:</b> wip

## Timeline
### Week 1 - Needfinding
### Week 2 - Storyboarding
### Week 3 - Prototyping
### Week 4 - Heuristic Evaluations
### Week 5 - Development Plan & Wireframing



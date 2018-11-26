/**
 * Description: Given keyword, will conduct search:
 *      * If keyword matches a category, will load all cafes under that category
 *      * If keyword matches a cafe name, will load that cafe
 *      * If keyword matches nothing, will load 'No matches found' & then a 'More Cafes to Consider' underneath
 * Will return the cafes that match the given keyword. If nothing matches, will return a random list
 * of 8 cafes.
 * 
 * Input:
 *      keyword
 * 
 * Output:
 *      list: [0,.......] or [1,......]
 *      if list[0]==0, then that means no matches were found
 *      if list[0]==1, then that means the cafes from list[1] and on are the search results
 */
function search(keyword){
    var list;
    if(keyword.length==0){
        list = random_cafe();
        return list;
    }
    //check match with hashtags
    list = hashtags_search(keyword);
    //if not match with hashtags, check match with cafes
    if(list==null){
        list = cafe_search(keyword);
        //if not match with cafes, return 8 random cafes
        if(list==null){
            list = random_cafe();
        }
    }
    return list;
}

/**
 * Description: returns list of matching cafes that have same hashtag
 * @param {string} keyword 
 * 
 * Output:
 *      list - [1,{dictionary containing cafes for specific category}]
 *      null if nothing found
 */
function hashtags_search(keyword){
    var list = null;
    for(var i=0; i<categoryData.length; i++){
        if(keyword==categoryData[i]["category_id"]){
            list.append(1);
            list.append(categoryData[i]);
        }
    }
    return list;
}

/**
 * Description: returns list of matching cafes that have same cafe name
 * @param {string} keyword 
 * 
 * Output:
 *      list - [2,{cafe info}]
 *      null if nothing found
 */
function cafe_search(keyword){
    var list = null;
    for(var i=0; i<cafe_card_Data.length; i++){
        if(keyword==cafe_card_Data[i]["cafe-name"]){
            list.append(2);
            list.append(cafe_card_Data[i]);
        }
    }
    return list;
}

/**
 * Description: returns a list of 8 recommended cafes (hardcoded)
 * 
 * Output:
 *      list - [0,,,,,,]
 */
function random_cafe(){
    return [0,1,5,11,4,6,16,3,10];
}
/**
 * Description: Given a cafe and a collection, will add the given cafe as a bootstrap
 * card to the given collection
 * 
 * Input: 
 *     cafe - id of the cafe
 *     collection - id of the collection (collection1, collection2, collection3, or collection4)
 * Output:
 *     alerts user that the cafe has been added to the selected collection
 * LocalStorage change:
 *      LocalStorage's key collection<number>HTML to append given cafe
 *      LocalStorage's key collection<number>Number will be assessed and incremented by 1. This key
 *              will keep track of how many cafes are currently in the given collection.
 * Interface change:
 *     The 'Save Cafe' button is changed to 'Cafe Saved to a Collection'
 */
function addCafeToCollection(cafe, collection){
    
}

/**
 * Description: Given a cafe and a collection, will add the given collection to the corresponding
 * cafe's list of collections it has been added to. The cafe's collection list is a list of length
 * 4, where at each index, it is either a 0 or a 1. 0 will represent that the cafe has not been
 * added to the collection(index+1). 1 will represent that the cafe has been added to collection(index+1)
 * 
 * Input:
 *      cafe - id of the cafe
 *      collection - id of the collection (collection1, collection2, collection3, or collection4)
 * Output:
 *      none
 * LocalStorage change:
 *      LocalStorage's key <cafe name>List will have been updated to the new list
 * Interface change:
 *      none
 */
function addCollectionToCafe(cafe,collection){}

/**
 * Description: For the given cafe, will toggle the 'Save Cafe' button to 'Cafe Saved to a Collection',
 * vice versa, or no change depending on the cafe's corresponding <cafe name>List on LocalStorage.
 * 
 * Input:
 *      cafe - id of the cafe
 * Output:
 *      none
 * LocalStorage change:
 *      none
 * Interface change:
 *      Depending on the status of the cafe, the 'Save Cafe' button might get changed to 'Cafe Saved to a Collection'
 *      or from 'Cafe Saved to a Collection' to 'Save Cafe'
 *      or no change
 */
function toggleSaveCafeButton(cafe){}

/**
 * Description: Removes the given cafe from the given collection.
 * 
 * Input:
 *      cafe - id of the cafe
 * Output:
 *      * first checks if the users is sure about removing the selected cafe from the selected collection
 *      * alerts the user that the cafe has now been removed from the selected collection
 * LocalStorage change:
 *      updates <cafe name>List to change the corresponding collection index value to 0
 *      updates collection<number>HTML to remove the cafe.
 * Interface change:
 *      the removed cafe will no longer show up in under the collection is was removed from on the collection page
 */
function removeCafeFromCollection(cafe, collection){}

/**
 * Description: changes the selected collection's name to the given newName
 * 
 * Input:
 *      collection - id of the collection
 *      newName - newName that the user wants the collection to be changed into
 */
function changeCollectionName(collection, newName){}
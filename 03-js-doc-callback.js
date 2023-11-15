// FUNCTION CALLBACK

/**
 * @type {number[]} - array of numbers
 */
let data = [1,2,3,4,5]



/**
 * This callback is invoked after data processing.
 * 
 * @callback myCallback - callback function
 * @param {number[]} processedData - array of numbers
 * 
*/


function myCallback(processedData) { // gives "any" because the IDE probably has a limitation with JsDoc
    console.log("Processed data:", processedData)
}


/**
 * Process an array of data and then executes a callback function
 * 
 * @param {number[]} data - The data to be processed.
 * @param {processData} callback - the callback to execute after processing
 * 
*/
function processData(data, callback){
    // multiply each element of array data by 10
    let updatedArray = data.map(item => item * 10)

    //invoke the callback function
    callback(updatedArray)
}



// Call processData, passing both data array and the callback function
processData(data, myCallback)
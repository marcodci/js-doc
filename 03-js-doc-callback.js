/**
 * Example data: an array of numbers.
 * @type {number[]}
 */
let data = [1, 2, 3, 4, 5];


/**
 * Callback function that is invoked after data processing.
 * @callback myCallback
 * @param {number[]} processedData - An array of numbers
 */

/**
 * Callback function to log the processed data.
 * 
 * @param {number[]} processedData - An array of numbers
 */
function myCallback(processedData) {
    console.log("Processed data:", processedData);
}

/**
 * Process an array of data and then execute a callback function.
 * 
 * @param {number[]} data - The data to be processed
 * @param {myCallback} callback - The callback to execute after processing
 */
function processData(data, callback) {
    // Multiply each element of the data array by 10
    let updatedArray = data.map(item => item * 10);

    // Invoke the callback function with the updated data
    callback(updatedArray);
}


// Process the data and call the callback
processData(data, myCallback);

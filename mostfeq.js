// function mostfeq(str) {
//     var charfequency = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         if (charfequency[char]) {
//             charfequency[char]++;
//         } else {
//             charfequency[char] = 1;
//         }
//     }
//     return charfequency;
// }

// var str = "dcdxcjdkcjdkc";
// console.log(mostfeq(str));  // Output the frequency


function mostFrequentChar(str) {
    // Initialize an empty object to store character frequencies
    const charFrequency = {};
    
    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            // Otherwise, add the character to the object with a count of 1
            charFrequency[char] = 1;
        }
    }
    
    // Initialize variables to store the most frequent character and its frequency
    let maxChar = '';
    let maxCount = 0;
    
    // Loop through the object to find the character with the highest frequency
    for (let char in charFrequency) {
        if (charFrequency[char] > maxCount) {
            maxCount = charFrequency[char];
            maxChar = char;
        }
    }
    
    // Return the most frequent character
    return maxChar;
}

// Example usage
const str = "hello world";
console.log(mostFrequentChar(str)); // Output: "l"

 
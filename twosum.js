//"Given an array of integers and a target sum, return the indices of the two numbers that add up to the target sum.	"

function sum(arr,k)
{
    var left =0
    var right = arr.length-1
    while(left < right)
        {
            var sum = arr[left] + arr[right]

                if(sum === k){
                    return [left,right]
                }
               else if(sum < k)
                {
                   left++
                }
                else{
                    right--
                }

                
        }
        return []
}

var array = [2, 5,4, 15];
console.log(sum(array, 9)); // Output: [0, 1]



function sum1(arr,k)
{
    for(var i=0 ;i < arr.length-1;i++)
        {
            for(var j = i+1;j<arr.length; j++)
                {
                    var sum = arr[i] +arr[j]
                    if(sum === k)
                        {
                            return [i,j]
                        }
                }
        }
}

var array = [2, 5,4, 15];
console.log(sum1(array, 7)); // Output: [0, 1]



//Write a function to convert a string of digits to an integer withiut type casting and parsing functions


function stringToInteger(str)
{
    var invalue=0
    for(var i =0;i< str.length ;i++)
        {
            let digitValue = str.charCodeAt(i) -48
            invalue = invalue *10 + digitValue

        }
        return invalue 
}

// Example usage:
let str2 = "12345";
console.log(stringToInteger(str2)); // Output: 12345

//"Given a string containing '(', ')', '{', '}', '[', and ']', determine if it is valid. A string is valid if brackets are closed in the correct order and match their types.	"



function parenthessis(str)
{
    var stack =[]
    
    var brackets= {
        '[' : ']',
        '{' : '}',
        '(' : ')'

    }

    for(var i =0 ;i< str.length ;i++)
        {
            var char = str[i]

            if(brackets[char])
                {
                    stack.push(char)
                }
                else{
                    var top = stack.pop()

                    if(!top || brackets[top] !== char)
                      {
                        return false
                      }  
                }
        }
        return stack.length===0
}

console.log(parenthessis("[][]"))

//Given an array of strings, find the longest common prefix. If there is no common prefix, return an empty string.	"



function longest(str)
{
    for(var i=0 ;i<str.length;i++)
        {
            for(var j =1;j<str.length;j++)
                {
                    if(str[0][i] != str[j][i])
                        {
                            return str[0].slice(0,i)
                        }
                }
        }
}

console.log(longest(["fl","fll","fkv"   ]))
console.log(longest(["flower", "flow", "flight"])); // Output: "fl"




//"Given a map, sort it by its values and return the sorted map.	" "{ ""a"": 3, ""b"": 1, ""c"": 2 }	"	{ "b": 1, "c": 2, "a": 3 }


function sortMapByValues(map){

    //convert map object to array of key value pairs
    
    var entries = Object.entries(map)

    //sorting array by value

    entries.sort((a,b)=> a[1]- b[1])

    //convert arrray in object
    const sortedmap= Object.fromEntries(entries)

    //return 

    return sortedmap
}
const map = { "a": 3, "b": 1, "c": 2 };
console.log(sortMapByValues(map));



//"Given a string, find the word that occurs the most frequently.	"

// function mostFrequentWord(str) {
//     // Convert the string to lowercase and split it into an array of words
    
//     const words = str.toLowerCase().match(/\b\w+\b/g);


//     // Create an object to store the frequency of each word
//     const wordFrequency = {};

//     // Iterate through each word in the array and count its frequency
//     for (const word of words) {
//         if (word in wordFrequency) {
//             wordFrequency[word]++;
//         } else {
//             wordFrequency[word] = 1;
//         }
//     }

//     // Find the word with the highest frequency
//     let maxFrequency = 0;
//     let mostFrequentWord = "";
//     for (const word in wordFrequency) {
//         if (wordFrequency[word] > maxFrequency) {
//             maxFrequency = wordFrequency[word];
//             mostFrequentWord = word;
//         }
//     }

//     return mostFrequentWord;
// }

// // Example usage:
// const str3= "Given a string, find the word that occurs the most frequently. A string is given here.";
// console.log(mostFrequentWord(str3)); // Output: "string"


function most(str) {
    var words = str.toLowerCase().match(/\b\w+\b/g);

    var wordFrequency = {};

    for (const word of words) {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    }

    let maxFrequency = 0;
    var maxFrequencyWord = ""; // Corrected variable name

    for (const word in wordFrequency) {
        if (wordFrequency[word] > maxFrequency) {
            maxFrequency = wordFrequency[word];
            maxFrequencyWord = word; // Corrected variable assignment
        }
    }
    return maxFrequencyWord; // Corrected return statement
}

const str3 = "Given a string, find the word that occurs the most frequently. A string is given here.";
console.log(most(str3)); // Output: "string"



///"Write a function to find a target element in a sorted 2D array.	


function targetInmattrix(mat,k)
{ if (!mat || mat.length === 0 || mat[0].length === 0) {
    return false; // Handle edge case: empty matrix
}

         for(var row =0;row < mat.length;row++)
            {
                for(var col =0 ; col <mat[row].length; col++)
                    {
                        if(mat[row][col] ===k)
                            {
                                return true
                            }
                    }
            }

            return false
}

 
const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17],
];
const target = 5444 ;
console.log(targetInmattrix(matrix, target)); // Output: true

 

//"Given an array of integers, find all elements that appear twice.	"in other way


function findDuplicates(arr)
{
    var frequency={}

    const duplicate= []

        for(let num of arr)
        {
            if(frequency[num])
                {
                    frequency[num]++
                }
                else{
                    frequency[num]=1
                }
        }
           for(const num in frequency)
            {
               if(frequency[num]==2)
                {
                    duplicate.push(Number(num))
                }
            }

            return duplicate
}
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]
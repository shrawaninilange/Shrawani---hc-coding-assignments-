 // "Given an array of integers, find the sum of the three largest numbers.	"



 function num(arr)
 {
 
    arr.sort((a, b) => b - a);

  if(arr.length >3)
    {
        console.log("no")
    }
     
    var num1 = arr[0] +arr[1]+ arr[2]
    return num1

 }
 
const numbers = [4,5,53,4];
console.log(num(numbers)); // Output: 27
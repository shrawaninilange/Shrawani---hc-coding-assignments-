

function pal(str)
{
    var left = 0
    var right = str.length -1
    while(left < right)
        {
            if(str[left]!= str[right])
                {
                    return false
                }
                else{
                    left++
                    right--
                }
        }
        return true


}

console.log(pal("aasd"))



// number 


function pal1(num)
{
    var str = num.toString()

    var left =0
    var right = str.length-1

    while(left <right)
        {
            if(str[left] != str[right])
                {
                    return false
                }
                else{
                         left++
                         right--
                }
        }

        return true
}

function ispal(arr)
{
    for(var i =0 ;i<arr.length ;i++)
        {
             if(pal1(arr[i]))
            {
                     console.log(arr[i])
            }
        }
}

var num = [111,3444,545]
console.log(ispal(num))

//"Write a function to find all palindrome numbers in a given integer array.	"

 
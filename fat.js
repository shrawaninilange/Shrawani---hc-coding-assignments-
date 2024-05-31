  function fat(n){
        if(n<0)
        {
            return "no"
        }
        let res =1

        for(var i =1 ;i<=n ;i++)
            {
             res *=  i
            }

            return res
}

const num3 = 5;
console.log(fat(num3));



function fat1(n)
{
       if(n<0)
        {
            return 0
        }
        if (n === 0 || n === 1) {
            return 1;  
        }

        return n * fat(n-1)
}
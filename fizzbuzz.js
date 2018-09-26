//fizzbuzz, funct accepts n parameter, print 1 thru n, if mult of 3 ,print fizz, if mult of 5 print buzz, if mult of 3&5 print fizzbuzz

function FizzBuzz(n)
{
    string = ""
    if (n <= 0)
    {
        return("n must be greater than 0");
    }
    for (var i = 1; i < n+1; i++)
    {
        if (i % 15 == 0)
        {
            string += "FizzBuzz, ";
        }
        else if (i % 3 == 0)
        {
            string += "Fizz, ";
        }
        else if (i % 5 == 0)
        {
            string += "Buzz, ";
        }
        else
        {
            string += i+", "
        }
    }
    return (string); 
}
num = 100;
console.log(FizzBuzz(num));
//Coin Change

function CoinChange(num)
{
    var change = { Pennies:0 , Nickels:0, Dimes:0, Quarters:0, dollars:0 };//declares a object dict called change with lookup for each kind of coin
    if(num < 0)//bool for neg num
    {
        return ("if num is Negative you owe me")
    }
    if (num >= 100)//boole over 1$
    {
        change.Dollars = Math.floor(num/100);//sets dollars to greatest int of num/100
        num -= change.Dollars * 100;//subtracts dollars from num aka num = num % dollars
    }
    if (num >= 25)//bool over .24$
    {
        change.Quarters = Math.floor(num/25);//sets quarters to greatest int of num/25
        num -= change.Quarters * 25;
    }
    if (num >= 10)//bool over .09$
    {
        change.Dimes = Math.floor(num/10);//sets dimes to greatest int of num/10
        num -= change.Dimes * 10;
    }
    if (num >= 5)//bool over .05$
    {
        change.Nickels = Math.floor(num/5);//sets nickels to greatest int of num/5
        num -= change.Nickels * 5;
    }
    if (num >= 0)//bool of less than 5 to cath pennies
    {
        change.Pennies = num;
    }
    else
    {
        return ("Enter a numeric value less then 1.00")
    } 
    return (change);
}
a = 312;
console.log(CoinChange(a));
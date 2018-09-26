//Bubble Sort

function BubbleSortLeast(arr)//least to greatest
{
    var length = arr.length;
    for (var i = 0; i < length; i++)//iterates through the length of array
    {
        for (var j = 0; j < (length - i - 1); j++)//iterates through array for each value of i
        {
            if (arr[j] > arr[j+1])//compares pairs with each element and the one ahead, bool statement is hit each iteration if lesser element is ahead a greater element
            {
                var temp = arr[j];//stores the greater element
                arr[j] = arr[j+1];//replaces lesser element to the front of pair
                arr[j+1] = temp;//replaces greater element behind to complete swap of pair
            }
        }
    }
    return(arr);
}
q = [9,8,5,0,2,3,6,4,1,7];
console.log(BubbleSortLeast(q));

function BubbleSortMost(arr)//greatest to least
{
    var length = arr.length;
    for (var i = 0; i < length; i++)//iterates through the length of array
    {
        for (var j = 0; j < (length - i - 1); j++)//iterates through array for each value of i
        {
            if (arr[j] < arr[j+1])//compares pairs with each element and the one ahead, bool statement is hit each iteration if greater element is ahead a lesser element
            {
                var temp = arr[j];//stores the lesser element
                arr[j] = arr[j+1];//replaces greater element to the front of pair
                arr[j+1] = temp;//replaces lesser element behind to complete swap of pair
            }
        }
    }
    return(arr);
}
r = [9,8,5,0,2,3,6,4,1,7];
console.log(BubbleSortMost(r));

//Classify the following O(n^2), O(n), O(1)

function printArray(arr)//O(n) because the time requires increases linear to the length of arr
{
    for(var i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }
}

functioncopy findNth(arr, n)//O(1) time remains constant regardless of length of arr
{
    console.log(arr[n]);
}

function halving(n)//O(1) time remains constant regardless of value of n
{
    var count = 0;
    while(n > 1)
    {
        n = n/2;
        count++;
    }
    return count;
}

function identityMatrix(n)//O(n^2) because a time increases quadratically as n increases, eg. given 4 the loops touch each element 16 times, given 5, the loops touch each element 25 times, given 6 the loops touch each element 36 times, given 1000 the loops touch each element 1M times
{
    var matrix = [];
    for(var i=0; i < n; i++)
    {
        var row = [];
        for(var j=0; j < n; j++)
        {
            if(j == i)
            {
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}


// Binary Search
function binarySearch (arr, val)//declares func with args arr to be search for a val
{
    var low = 0;//declares var low set to 0
    var high = arr.length -1;//declares var high set to lengh-1 eg arr.length 0-9 will be 9 not 10
    var mid;//declares var mid      
    while (low <= high)//loops while low is less than equal to high
    {
        mid = Math.floor(low+high/2); //sets mid to greatest int low+high/2    
        if(arr[mid] == val)//bool if mid idx of arr is val
        {
          return mid;//arr contains val at idx mid
        }
        else if (arr[mid] < val)//if mid idx less than val
        {
          low = mid+1;//low set to mid +1 for next iteration of loo to start right of mid
        }
        else//else next iteration start to left of mid
        {
          high = mid-1;
        }
    }
    return -1;//returns 
}
a = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200];
b = 93;
console.log(binarySearch(a,b));
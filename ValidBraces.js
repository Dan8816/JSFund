//string valid


function validBraces(string)
{
    var pairs = //lookup obj dict
    {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var stack = [];//array to push/pop keys within object
    for (var i = 0; i < string.length; i++)//iterates through string
        if (string[i] === '(' || string[i] === '[' || string[i] === '{')//bool if opens are found
        {
            stack.push(string[i]);//push to array
        }
        else if (stack[stack.length-1] === pairs[string[i]])//bool if a closing brace if foundon last idx of stack
        {
            stack.pop();//pop the last open off
        }
        else
        {
            return false; // catchall
        }
    return stack.length === 0;//if the string was valid the stack length will be 0
}
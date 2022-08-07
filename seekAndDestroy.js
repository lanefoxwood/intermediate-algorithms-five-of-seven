function destroyer(arr,...seekers) {
    return arr
        .filter(element => !seekers.includes(element));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
0. filter out values that are NOT arg(n);
*/
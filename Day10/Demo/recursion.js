'use strict';

// recursion
// its a function

/*
1.specify your base case 
2. specify the recursive part 
 */
/*





*/

function factorial(n){
    if(n==1){// base case 
        return 1 
    }else{// recursive part 
        return n*factorial(n-1);

    }
}
/////// fibonacci 

function fibo(n){
    if(n==0){
        return 0

    }
    else if (n==1){
        return 1
    }
    else{
        return fibo(n-1)+fibo(n-2);

    }
}




/*Array Practice Problems */
/* UC1:- Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */

var readlineSync = require('readline-sync');
var Choice = readlineSync.questionInt("1.UC1 And UC2\n2.Store all the Prime Factors\n3.Sum of three Integer\nEnter Choice:- ");
switch (Choice) 
{
    case 1:
        try 
        {
            let numArray = new Array(10);
            for (let i = 0; i < numArray.length; i++) 
            {
                numArray[i] = Math.floor(Math.random() * 900) + 100;
            }
            console.log(numArray);
            //using bubble sort to sort the array into ascending order
            for (let i = 0; i < numArray.length; i++) 
            {
                for (let j = 0; j < numArray.length - 1; j++) 
                {
                    if (numArray[j] > numArray[j + 1]) 
                    {
                        let temp = numArray[j];
                        numArray[j] = numArray[j + 1];
                        numArray[j + 1] = temp;
                    }
                }
            }
            console.log(numArray);
            console.log("2nd largest element: " + numArray[(numArray.length - 2)] + "\n2nd smallest element: " + numArray[1]);
/* UC2:- Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element. */
            let sortedArray = numArray.sort();
            console.log("Sorted array:");
            console.log(sortedArray);
            console.log("Using sorting\n2nd largest element: " + sortedArray[(sortedArray.length - 2)] + "\n2nd smallest element: " + sortedArray[1]);
        }
        catch (ex) 
        {
            console.log(ex);
        }

        break;
    case 2:

/* UC3: Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output. */
        try {
            const prompt = require('prompt-sync')();
            var n = readlineSync.questionInt("Enter  the Number:- ");
            let primeFactorsArr = [];
            // Print the number of 2s that divide n
            while (n % 2 == 0) 
            {
                primeFactorsArr.push(2);
                n = n / 2;
            }
            // n must be odd at this point. So we can skip  
            // one element (Note i = i+2)  
            for (let i = 3; i * i <= n; i = i + 2) 
            {
                // While i divides n, print i and divide n  
                while (n % i == 0) 
                {
                    primeFactorsArr.push(i);
                    n = n / i;
                }
            }
            // This condition is to handle the case when after division by 2 n  
            // is a prime number greater than 2  
            if (n > 2)
                primeFactorsArr.push(n);
            console.log("Prime factors:")
            console.log(primeFactorsArr);
        }
        catch (ex) 
        {
            console.log(ex);

        }
        break;
    case 3:
/* UC4:- Write a Program to show Sum of three Integer adds to ZERO */
        try 
        {
            let arr = [0, -1, 2, -3, 1];
            n = arr.length;
            console.log("Triplets with sum 0 are:")
            for (let i = 0; i < n - 2; i++) 
            {
                for (let j = i + 1; j < n - 1; j++) 
                {
                    for (let k = j + 1; k < n; k++) 
                    {
                        if (arr[i] + arr[j] + arr[k] == 0) 
                        {
                            console.log(arr[i] + "," + arr[j] + "," + arr[k] + "\n");
                        }
                    }
                }
            }

        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 4:
/* UC5:- Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array. */
        try 
        {
            repeatedDigitsArr = [];
            for (let i = 10; i < 100; i++) 
            {
                let onesDigit = i % 10;
                let tensDigit = (i - onesDigit) / 10;
                if (onesDigit == tensDigit) 
                {
                    console.log(i);
                    repeatedDigitsArr.push(i);
                }
            }
            console.log("Repeated digits content:- ")
            console.log(repeatedDigitsArr);
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;

    default:
        break;
}
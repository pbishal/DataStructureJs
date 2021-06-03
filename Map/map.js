/* Map Practice Problems */
var readlineSync = require('readline-sync');
var Choice = readlineSync.questionInt("1.\n2.Generate a birth month of 50\nEnter Choice:- ");
switch (Choice) 
{
    case 1:
        /* UC1:- Write a program in the following steps
                a. Roll a die and find the number between 1 to 6
                b. Repeat the Die roll and find the result each time
                c. Store the result in a dictionary
                d. Repeat till any one of the number has reached 10 times
                e. Find the number that reached maximum times and the one that was for minimum times 
        */    
       try
       {
        diceMap=new Map();
        let flag = true;
        while(flag)
        {
            //generating random number between 1-6
            let diceValue=(Math.floor((Math.random()*10)%6))+1;
            //if the map already has the key increase the count and update the map
            if(diceMap.has(diceValue))
            {
                count=diceMap.get(diceValue);
                count++;
                diceMap.set(diceValue,count);
            }
            // else add new key value pair into the map
            else
            {
                diceMap.set(diceValue,1);
            }
            //console.log(diceMap);
            //check for all key-value pairs if the value=10 then come out of while loop
            for(let [key,value] of diceMap)
            {
                if(value==10)
                {
                    flag=false;
                    break;
                }
            }
        }
        for(let [key,value] of diceMap)
        {
            //Check if the value = max of all the values in dicemap
            if(value==Math.max(...diceMap.values()))
            console.log("Maximum occurence: "+key+" occured for "+value+" times.");
            //Check if the value = min of all the values in dicemap
            if(value==Math.min(...diceMap.values()))
            console.log("Minimum occurence: "+key+" occured for "+value+" times.");
        }
       }
       catch(ex)
       {
           console.log(ex);
       }
                

        break;
        case 2:
/* UC2:- Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays 
                     in the same month. Store it to finally print. */
            try
            {
                bDayMap = new Map();
                //Initializes start date
                startDate=new Date("1 Jan 1992");
                //Initializes end date
                endDate= new Date("31 Dec 1993");
                // generate 50 random dates between the above specified dates
                for(let i=0;i<50;i++)
                {
                    // date.getTime() gives total milliseconds till the date from 1970/01/01
                    randomDate = new Date(startDate.getTime()+Math.random()*(endDate.getTime()-startDate.getTime()));
                    bDayMap.set((i+1),randomDate);
                }
                sameMonthBdayMap = new Map();
                for(let [key1,value1] of bDayMap)
                {
                    arr = [];
                    month=value1.getMonth();
                    for(let [key2,value2] of bDayMap)
                    {
                        //checking if the month value is same and then pushing into array and map
                        if(value2.getMonth()==month)
                        {
                            arr.push(key2);
                            sameMonthBdayMap.set(value2.getMonth(),arr);
                        }      
                    }
                }
                // printing values
                for(let [key,value] of sameMonthBdayMap)
                {
                    console.log("Month: "+key+". Person id: "+value);
                }

            }
            catch(ex)
            {
                console.log(ex);
            }
            break;

    default:
        break;
}

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV) 
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    //Set sortComplete to false
    var sortComplete = false; 
    //Loop through until sort complete is true  
    while(sortComplete == false){
        //Set sortComplete to true
        sortComplete = true;
        for(var i = 0; i < array.length-1; i++){
            //Compare array[i] and array[i+1]
            var result = comparator(array[i],array[i+1]);
            //If result was false(least car before greater)
            if(result == false){
                //Swap elements
                var temp = array[i]
                array[i] = array[i+1];
                array[i+1] = temp;
                //Set sortComplete to false
                sortComplete = false;
            }
        }
    }
    var newArray = [];
    for(var j = 0; j < array.length; ++j){
        newArray[j] = array[j];
    }
    return newArray;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/

function yearComparator (auto1, auto2){
    return auto1.year > auto2.year;
}



/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    //Make the first character of each make uppercase and then compare whivh comes first
    return (auto1.make.toUpperCase().charAt(0)) < (auto2.make.toUpperCase().charAt(0)) ;
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    //Set each rating to 4
    var auto1TypeRating = 4;
    var auto2TypeRating = 4;
    //Change rating if the type matches for auto1
    if(auto1.type.toUpperCase()== "ROADSTER"){
        auto1TypeRating = 0;
    }
    if(auto1.type.toUpperCase()== "PICKUP"){
        auto1TypeRating = 1;
    }
    if(auto1.type.toUpperCase()== "SUV"){
        auto1TypeRating = 2;
    }
    if(auto1.type.toUpperCase()== "WAGON"){
        auto1TypeRating = 3;
    }
    //Change rating if the type matches for auto1
    if(auto2.type.toUpperCase()== "ROADSTER"){
        auto2TypeRating = 0;
    }
    if(auto2.type.toUpperCase()== "PICKUP"){
        auto2TypeRating = 1;
    }
    if(auto2.type.toUpperCase()== "SUV"){
        auto2TypeRating = 2;
    }
    if(auto2.type.toUpperCase()== "WAGON"){
        auto2TypeRating = 3;
    }

    //Compare ratings
    //If the same then compare years
    if(auto1TypeRating == auto2TypeRating){
        return yearComparator(auto1,auto2);
    }
    else if(auto1TypeRating < auto2TypeRating){
        return true;
    }
    else{
        return false;
    }
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */

Automobile.prototype.logMe = function(bool) {
    if(bool == false){
        console.log(this.year + " " + this.make + " " + this.model);
    }
    else{
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    }
    
}

console.log("*****");
console.log("The cars sorted by year are:");
sortArr(yearComparator, automobiles).forEach(function (auto){
    auto.logMe(false);
    })
console.log("\n");
console.log("The cars sorted by make are:");
sortArr(makeComparator, automobiles).forEach(function (auto){
    auto.logMe(false);
    })
console.log("\n");
console.log("The cars sorted by type are:");
sortArr(typeComparator, automobiles).forEach(function (auto){
    auto.logMe(true);
    })
console.log("*****");

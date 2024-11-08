import {inventory} from "./car.js";
import {getCarDetail ,getLastCar ,getCarModel,getAllYear,getSpecificCarDetails,getBMWAndAudi} from "./Solution.js"
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
const carDetail = getCarDetail(inventory);  
console.log(carDetail) 

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"
 
const lastCar =getLastCar(inventory);
console.log(lastCar) 

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
const carModel =getCarModel(inventory);
console.log(carModel) 

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const allYear =getAllYear(inventory); 
console.log(allYear)  

// ==== Problem #5 ====
  // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
  
const specificCarDetails =getSpecificCarDetails(allYear,200); 
console.log(specificCarDetails.length) 

// ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
const BMWAndAudi =getBMWAndAudi(inventory);
console.log(JSON.stringify(BMWAndAudi));

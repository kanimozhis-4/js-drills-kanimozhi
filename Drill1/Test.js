import { arrayOfObjects } from "./person.js";  
import { getAge, getEmailAddress ,getHobbies,getNameAndCity,getNameArray, getFirstHobbies, getNameAndEmail, getCityAndCountry} from "./Solution.js";

const emailArray =getEmailAddress(arrayOfObjects);
// console.log(emailArray)
//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
const hobbiesArray=getHobbies(arrayOfObjects,30);
console.log(hobbiesArray) 

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
const nameArray=getNameArray(arrayOfObjects,'Australia',true) 
console.log(nameArray) 

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset. 
const nameAndCityArray=getNameAndCity(arrayOfObjects,3)
console.log(nameAndCityArray) 

//    Implement a loop to access and print the ages of all individuals in the dataset. 
const ageArray=getAge(arrayOfObjects); 
console.log(ageArray); 

//    Create a function to retrieve and display the first hobby of each individual in the dataset. 
const firstHobbiesArray=getFirstHobbies(arrayOfObjects);
console.log(firstHobbiesArray) 

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
const nameAndEmailArray=getNameAndEmail(arrayOfObjects,25);
console.log(nameAndEmailArray) 

//    Implement a loop to access and log the city and country of each individual in the dataset. 
const cityAndCountryArray=getCityAndCountry(arrayOfObjects);
console.log(cityAndCountryArray)

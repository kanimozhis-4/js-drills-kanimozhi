// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
export function getCarDetail(inventory){
    for(let item=0;item<inventory.length;item++){
        if(inventory[item].id===33){
            return "Car is "+inventory[item].id+" is a "+inventory[item].car_year+" "+inventory[item].car_make+" "+inventory[item].car_model;
        }
    }
}    

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"
export function getLastCar(inventory){ 
    let last_inventory=inventory[inventory.length-1] 
    return "Last car is a "+last_inventory.car_make+" "+last_inventory.car_model;

}   

export function getCarModel(inventory){
    let length=inventory.length; 
    let result=[]; 
    for(let i=0;i<length;i++){
        for(let j=i+1;j<length;j++){ 

            if(inventory[i].car_model.toLowerCase()>inventory[j].car_model.toLowerCase()){
                let temp=inventory[i].car_model;
                inventory[i].car_model=inventory[j].car_model; 
                inventory[j].car_model=temp;
            }
        }
    } 
    for(let item=0;item<length;item++){
        result.push(inventory[item].car_model)
    } 
    return result;
}   

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

export function getAllYear(inventory){ 
    let length=inventory.length; 
    let result=[];
    for(let item=0;item<length;item++){ 
        result.push(inventory[item].car_year)

    } 
    return result;
}  

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
export function getSpecificCarDetails(all_year){ 
    let result=[];
    let length=all_year.length; 
    for(let index=0;index<length;index++){
        if(all_year[index]<2000){
            result.push(all_year[index]);
        }
    } 
    return result;

}   

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

export function getBMWAndAudi(inventory){
    let result=[];
    let length=inventory.length; 
    for(let index=0;index<length;index++){
        let car=inventory[index].car_make;
        if(car==='Audi' || car ==='BMW'){
            result.push(inventory[index]);
        }
    } 
    return result
}

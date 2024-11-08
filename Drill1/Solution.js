//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
  
export function getEmailAddress(Details){  
    const emailArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){
        emailArray.push(Details[index].email)
    } 
    return emailArray;


} 
 //    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
  export function getHobbies(Details,personAge){ 
    const hobbiesArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){ 
        if(Details[index].age===personAge){
            hobbiesArray.push(Details[index].hobbies) 
        }
    } 
    return hobbiesArray;
  } 

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
export function getNameArray(Details,country,Flag){ 
    const nameArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){ 
        if(Details[index].country===country && Details[index].isStudent===Flag){
            nameArray.push(Details[index].name) 
        }
    } 
    return nameArray;

} 
//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
export function getNameAndCity(Details,position){ 
    const nameAndCityArray=[];
    nameAndCityArray.push(Details[position].name ) 
    nameAndCityArray.push(Details[position].city) 
    return nameAndCityArray;

} 
//    Implement a loop to access and print the ages of all individuals in the dataset.
export function getAge(Details){
    const ageArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){ 
        ageArray.push(Details[index].age)
    }  
    return ageArray;
} 

//    Create a function to retrieve and display the first hobby of each individual in the dataset. 
export function getFirstHobbies(Details){ 
    let firstHobbiesArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){ 
        firstHobbiesArray.push(Details[index].hobbies[0])
    }  
    return firstHobbiesArray;
} 

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
export function getNameAndEmail(Details,personAge){  
    let nameAndEmailArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){ 
        if(Details[index].age===personAge){ 
            let array=[]
            array.push(Details[index].name) 
            array.push(Details[index].email) 
            nameAndEmailArray.push(array)
        } 
       
    } 
    return nameAndEmailArray;

}  
//    Implement a loop to access and log the city and country of each individual in the dataset.
export function getCityAndCountry(Details){
    let cityAndCountryArray=[];
    const length=Details.length;
    for( let index=0;index<length;index++){  
        let array={}; 
        array["city"]=Details[index].city;
        array["country"]=Details[index].country;
        cityAndCountryArray.push(array)
    }
    return cityAndCountryArray;
}


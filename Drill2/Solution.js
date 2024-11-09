// Q1 Find all users who are interested in playing video games. 

export function getUser(users,hobby){
    let userArray=[];
    let value=Object.values(users) 
    let key=Object.keys(users)
    let length=key.length; 
    for(let index=0;index<length;index++){ 
        if(value[index].interests[0].includes(hobby)===true){  
            let username=key[index] 
            userArray.push(username);
        }
    } 
    return userArray;
} 
// Q2 Find all users staying in Germany.  
export function getUserStay(users,nationality){
    let userStayArray=[];
    let value=Object.values(users) 
    let key=Object.keys(users)
    let length=key.length;  
    for(let index=0;index<length;index++){
        if(value[index].nationality===nationality){
            userStayArray.push(key[index])
        }
    } 
    return userStayArray
} 
// Q3 Find all users with masters Degree. 
export function getUserDegree(users,qualification){
    let userDegreeArray=[];
    let value=Object.values(users) 
    let key=Object.keys(users)
    let length=key.length;  
    for(let index=0;index<length;index++){
        if(value[index].qualification===qualification){
            userDegreeArray.push(key[index])
        }
    } 
    return userDegreeArray
}  
// Q4 Group users based on their Programming language mentioned in their designation.
export function getGroupUser(users){
    let groupUser={
        "Python":[],
        "Javascript":[],
        "Golang":[]
    };   
    let value=Object.values(users) 
    let key=Object.keys(users)
    let length=key.length;  
    for(let index=0;index<length;index++){  
        let designation=value[index].desgination;
        let groupUserKey=Object.keys(groupUser) 
       
        for(let j=0;j<length;j++){
            if(designation.includes(groupUserKey[j])){
                // console.log(key[index])
                groupUser[groupUserKey[j]].push(key[index])
            }
        }
    } 
    return groupUser


}
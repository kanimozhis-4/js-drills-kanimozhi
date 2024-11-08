import {users} from "./User.js" 
import {getUser ,getUserStay,getUserDegree,getGroupUser} from "./Solution.js"

// Q1 Find all users who are interested in playing video games. 
const userArray=getUser(users,"Playing Video Games");
console.log(userArray);  

// Q2 Find all users staying in Germany. 
const userStayArray=getUserStay(users,"Germany");
console.log(userStayArray);

// Q3 Find all users with masters Degree.
const userDegreeArray=getUserDegree(users,"Masters");
console.log(userDegreeArray); 

// Q4 Group users based on their Programming language mentioned in their designation. 
const groupUser=getGroupUser(users);
console.log(groupUser)

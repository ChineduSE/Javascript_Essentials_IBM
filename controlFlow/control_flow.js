let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log(`User message: ${userMessage}`);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

// Practice Task

let userRoles = "New"
let authorizedAcess;

switch (userRoles) {
    case "Employee":
        authorizedAcess = "You have authorized access to dietary services"
        break;
    case "Enrolled Member":
        authorizedAcess = "You have authorized access to dietary service and one-on-ine interaction with dietician"
        break;
    case "Subscriber":
        authorizedAcess = "You are authorized to partial access to dietary services"
        break;
    default:
        authorizedAcess = "Please subscribe to have access to dietary services"
}

console.log(authorizedAcess)

// Practice Task Second Approach

let aSubscriber = true;
let userStatus = "Enrolled Member";
let haveAccess;

if (aSubscriber) {
    if(userStatus === "Employee")
        haveAccess = "You have authorized access to dietary services";
    else if(userStatus === "Enrolled Member")
         haveAccess = "You have authorized access to dietary service and one-on-ine interaction with dietician";
    else
        haveAccess = "You are authorized to partial access to dietary services";
}
else haveAccess = "Please subscribe!";

console.log(haveAccess);
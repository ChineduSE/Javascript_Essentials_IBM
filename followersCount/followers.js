//Increasing Followers and Resetting Followers

// Method One

const defaultFollowers = parseFloat(document.getElementById("countDisplay").innerText);
let myFollowers;
myFollowers = defaultFollowers;

const followersButton = document.getElementById("followButton");
const resetButton = document.getElementById("resetButton");

// followersButton.onclick = function(){
//     myFollowers++;
//     document.getElementById("countDisplay").innerText = myFollowers;
// }

// resetButton.onclick = function(){
//     myFollowers = defaultFollowers;
//     document.getElementById("countDisplay").innerText = myFollowers;
// }

// Method Two


followersButton.addEventListener('click', increaseCount);
resetButton.addEventListener('click', resetCount);

function increaseCount(){
    myFollowers++;
    document.getElementById("countDisplay").innerText = myFollowers;
}

function resetCount(){
    myFollowers = defaultFollowers;
    document.getElementById("countDisplay").innerText = myFollowers;
}
// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// Little Practice.
{
    let goalsLet = 10;
    const goalsConst = 15;
    var goalsVar = 20;

    // goalsLet = 30;
    // goalsConst = 45;
    // goalsVar = 60;
}
    let goalsLet = 30;
    const goalsConst = 45;
    var goalsVar = 60;

    console.log(goalsVar);
    console.log(goalsLet);
    console.log(goalsConst);
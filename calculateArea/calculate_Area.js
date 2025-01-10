let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // console.log(length,width);
   
   let area = length * width;
//    console.log(area);
   document.getElementById('result').innerText = `The area of the rectangle is only: ${area}`;
}

let grocery1;
let grocery2;
let grocery3;

function calculateGroceryTotal(){
grocery1 = parseFloat(document.getElementById("Grocery-1").value);
grocery2 = parseFloat(document.getElementById("Grocery-2").value);
grocery3 = parseFloat(document.getElementById("Grocery-3").value);

let total = grocery1+grocery2+grocery3;
document.getElementById("groceryResult").innerText = `The total amount of grocery is: $${total}`;
}
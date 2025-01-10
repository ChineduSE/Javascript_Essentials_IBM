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
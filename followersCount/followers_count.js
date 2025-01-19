// I want to be able to increase the followers when I click a button.
// First I want to get the initial number of followers set.
// Then I want to write a function that increases the followers
    // This will work by me using an event
    // This will be me using function closure.

// function outerFunction() {
    
//     let initialFollowers = parseFloat(document.getElementById("countDisplay").innerText);
//     function innerFunction(){
//         initialFollowers++;
//         document.getElementById("countDisplay").innerText = initialFollowers;
//         if(initialFollowers === 10){
//             alert("Congratulations, you hit 10 followers");
//         }
//         else if (initialFollowers === 20){
//             alert("Congratulations, you hit a major milestone. You hit 20 followers");
//         }
//     }
//     return innerFunction;
// }
// const increaseCount = outerFunction();

// function outerReset(){
//   let initialFollowers = parseFloat(document.getElementById("countDisplay").innerText);
//   function innerReset(){
//     document.getElementById("countDisplay").innerText = initialFollowers;
//     alert("Your followers has been reset to default");
//   }
//   return innerReset;
// }

// const resetCount = outerReset();

// New lines of code

// function createCounter() {
//   let initialFollowers = parseFloat(document.getElementById("countDisplay").innerText);

//   function increaseCount() {
//       initialFollowers++; // Increment the count
//       document.getElementById("countDisplay").innerText = initialFollowers; // Update the DOM

//       // Display milestone alerts
//       if (initialFollowers === 10) {
//           alert("Congratulations, you hit 10 followers!");
//       } else if (initialFollowers === 20) {
//           alert("Congratulations, you hit a major milestone: 20 followers!");
//       }
//   }

//   function resetCount() {
//       initialFollowers = parseFloat(document.getElementById("countDisplay").innerText); // Reset to default
//       console.log(`initial follower is ${initialFollowers}`);
//       document.getElementById("countDisplay").innerText = initialFollowers; // Update the DOM
//       alert("Your followers have been reset to the default value.");
//       console.log(initialFollowers);
//   }

//   return { increaseCount, resetCount };
// }

// const { increaseCount, resetCount } = createCounter();


function createCounter() {
  const defaultFollowers = parseFloat(document.getElementById("countDisplay").innerText); // Store the default value
  let initialFollowers = defaultFollowers; // Initialize `initialFollowers` with the default value

  function increaseCount() {
      initialFollowers++; // Increment the count
      document.getElementById("countDisplay").innerText = initialFollowers; // Update the DOM

      // Display milestone alerts
      if (initialFollowers === 10) {
          alert("Congratulations, you hit 10 followers!");
      } else if (initialFollowers === 20) {
          alert("Congratulations, you hit a major milestone: 20 followers!");
      }
  }

  function resetCount() {
      initialFollowers = defaultFollowers; // Reset to the default value
      document.getElementById("countDisplay").innerText = initialFollowers; // Update the DOM
      alert("Your followers have been reset to the default value.");
  }

  return { increaseCount, resetCount };
}

const { increaseCount, resetCount } = createCounter();

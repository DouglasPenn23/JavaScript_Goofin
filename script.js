    function brownCowFunction() {
        // Select the button element
        var button = document.getElementById("button-1");
    
        // Select the Element to toggle
        var brownCow = document.getElementById("brown-cow");
    
        // Add a click event listener to the button
        button.addEventListener("click", function() {
            // Toggle visibility by adding/removing a class
            if (brownCow.classList.contains("hidden")) {
                brownCow.classList.remove("hidden");
            } else {
                brownCow.classList.add("hidden");
            }
        });
    }

    document.getElementById("myBtn").addEventListener("click", displayDate);

    function displayDate() {
      document.getElementById("demo").innerHTML = Date();
    }
    
    
    // Fetch Example
    fetch('https://api.github.com/users/DouglasPenn23')
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Process the fetched data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors if any
  });




// Adding elements to DOM

// Select Parent Element
const parentElement = document.getElementById('demo-append');

// Select the Child element
const childElement = document.createElement('span');
childElement.textContent = 'This is the child element';

// Append child element ot parent Element
parentElement.appendChild(childElement)






//   Messing around with using local storage
// Storing data in local storage
localStorage.setItem('key', 'value');

// Retrieving data from local storage
const data = localStorage.getItem('key');
console.log(data); // Output: value

// Removing data from local storage
localStorage.removeItem('key');







    // Add a click event listener to the button
//     button.addEventListener("click", function() {
//         // Toggle visibility
//         if (brownCow.style.display === "" || brownCow.style.display === "block") {
//             brownCow.style.display = "none";
//         } else {
//             brownCow.style.display = "block";
//         }
//     });
// }




//     button.addEventListener("click", function() {
//         // Toggle visibility
//         if (brownCow.style.display === "none") {
//             brownCow.style.display = "block"
//         } 
//         else if (brownCow.style.display === "block") {
//             brownCow.style.display = "none"
//         } 
//         else {
//             brownCow.style.display = "none"
//         }
//     });
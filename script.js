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
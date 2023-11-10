// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
let name = document.getElementById("name"); // Fill this in 
let age = document.getElementById("age"); // Fill this in.
let dogYears = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here

name.innerHTML = "<strong> sindhu </Strong>";
age.innerHTML = "<strong> 22 </strong>";
dogYears.innerHTML = "<strong> 11 </strong>";
// document.getElementById("name").innerHTML = "sindhu";

function showDogYears(age) {
  // Step 3. Cast `age` as a number
  dogYears.innerText = Number(age) * 7;
  return age * 7
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(10)

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add(".real-input")
})
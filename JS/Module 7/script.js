console.log("page successfully loaded script.js");
console.log("javascript uses console log to print info to browser");
console.warn("This is a warning");
console.error("This is an error");
var name = "sindhu";
// if(name == "sindhu") {
//     alert("Hello World!");
//     alert("Hello, follow me on insta @sindhusmiley");
//     }
function greeting(name){
    console.log(`Hello ${name}, welcome to Javascript`);
    return `Hello ${name}, welcome to Javascript`;
    }
// const greet = greeting('sindhu');
let profession = "Programmer";
const str = "A string";  // String
const num = 3;  // Number
const flt =3.14; // Float
const bool = true; // Boolean
const list = ["Item 1", 2, "Three", 3.14, []]; // Array = list
const thing = null; // Has nothing in it
const notdefined = undefined; // currently holds not value;
const getAge =  function() { return 31; } //This is a function
const obj = {
    'name': 'sindhu',
    'profession': 'programmer'
}// Object ; can be accessed with obj['name]

const val = document.getElementById("box");
console.log(val);
val.innerText = "Something new";
console.log(val);
val.innerHTML = "Something <strong> new is bolded</strong>";
console.log(val);
let person = {}
console.log(" type of person = ",typeof(person));
person = {
    'name' :  'Sindhu',
    'job'  : 'Programmer',
    'age'  :  22,
    'skils':  ['C', 'Java', 'Python', 'DSA']
}
console.log(person);
console.log(person["job"]); 
// const course = "Javascript Basics practice";

//  ***********    STRING METHODS      **********

let course = "Javascript 101 : coding for beginners";
console.log(course.search("coding"));
console.log("course[0] = " , course[0]);
console.log("using slice method" , course.slice(16,21));
console.log("using substring method takes from and length of characters to traverse" , course.substr(16,6));
console.log("replace method", course.replace("coding", "programming"));
console.log(course.toUpperCase());
console.log(course.toLowerCase());
words = course.split(" ");
console.log(words);


//   ***********   DEMYSTIFYING DATA TYPES  ***********

arr = []
console.log(typeof(arr))

//   ***********   CASTING DATA TYPES  ***********
// For loop
let a = ["zero", "one", "two", "three"]
for(let i = 0; i < a.length; i++) {
    console.log(`index ${i} and value at that index a[i] = ${a[i]}`);
}


a.forEach(num => {
    console.log(num);
});


//  ** selecting multiple DOM nodes **

const elems = document.querySelector(".this-class")
console.log(elems.innerText);
const vals = document.querySelectorAll(".this-class")
console.log(vals);
const el = document.querySelectorAll("li");
console.log(el);
el.forEach(nodes => {
    nodes.innerText = "This is changed!";
});
el.forEach((node, index) => {
    node.innerText = `Hello this is item ${index+1}`
});

//adding class name to li tag in html from js
el.forEach(nodes => {
    nodes.classList.add("custom-class", "second-class");
});

function addNumbers(num1, num2){
    const total = num1 + num2;
    return total;
}

const addedTotal = addNumbers(1, 9);

function addnum(greetingName, ...numbers){
    let total = 0;
    for(index in numbers){
        total = total + numbers[index];
        console.log(numbers[index]);
    }
    return `${greetingName} : the total is ${total}`;
}
const newTotal = addnum("Sindhu", 1, 4, 7, 13);
console.log(newTotal);

const people = {
    'name': "Sindhu",
    "age" : 22,
    "height": "5'4\""
}
people['favfood'] = "pizza";
console.log(people['name']);
console.log(people['favfood']);
const people2 = {
    'name': "Sindhu",
    "age" : 22,
    "height": "5'4\"",
    "speak": function(want = "cookies") {
        console.log(`Meow, I want ${want}`);
    },
    talk(to="Amanda") {
        console.log(`I am talking to ${to}`);
    }
}
people2.talk("John");
console.log(people2.speak("Burger"));



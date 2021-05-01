// DOM elements
const input = document.querySelector(".search");
const listElem = document.querySelectorAll("li");
const button = document.querySelector("button");
const description = document.querySelector("p");
const desc = description.textContent;
description.style.display = 'none';
// functions
const searching = () => {
    const text = input.value.toLowerCase();
    // console.log(text);
    listElem.forEach(element => {
        // console.log(element.textContent);
        const ourElement = element.textContent;
        if(ourElement.toLowerCase().includes(text) === true) {
            // console.log(element.textContent);
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'
        }
    });
}
const buttonFcn = () => {
    console.log("eeeee");
}
// events
input.addEventListener("input", searching);
button.addEventListener("click", buttonFcn);


// dodac przyciski dop kazdego produktu z opisem produktu 

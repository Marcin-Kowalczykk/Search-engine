
const input = document.querySelector(".search");
const listElemArray = document.querySelectorAll(".text-element");
const btnMore = document.querySelector(".buttonMore");
const btnLess = document.querySelector(".buttonLess");

// searching drinks function
const searchDrinks = () => {
    const text = input.value.toLowerCase();
    listElemArray.forEach(element => {
        if(element.textContent.toLowerCase().includes(text) === true) {
            element.style.display = 'block';
            clearAllDescription();
        }
        else {
            element.style.display = 'none'
        }
    });
}
// event for searching input
input.addEventListener("input", searchDrinks);

// functions for buttons
const showDescriptionBtn = () => {
    listElemArray.forEach(element => {
        const liParentElement = element.parentElement;
        const displayText = liParentElement.classList.add('visibility');
        displayText;
    });
}
const clearAllDescription = () => {
    listElemArray.forEach(element => {
        const liParentElement = element.parentElement;
        const removeText = liParentElement.classList.remove('visibility');
        removeText;
    });
}
// events for buttons
btnMore.addEventListener('click', showDescriptionBtn);
btnLess.addEventListener('click', clearAllDescription);

//functions for showing text for each product 
function showDescription() {
    const parent = this.parentElement;
    parent.classList.toggle('visibility');
}

// event for show Text for each product 
listElemArray.forEach(element => {
    element.addEventListener('click', showDescription);
});


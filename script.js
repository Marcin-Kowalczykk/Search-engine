
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
const showProductDescriptionBtn = () => {
    listElemArray.forEach(element => {
        const liParentElement = element.parentElement;
        const displayText = liParentElement.classList.add('visibility');
        displayText;
    });
}
const clearAllProductDescription = () => {
    listElemArray.forEach(element => {
        const liParentElement = element.parentElement;
        const removeText = liParentElement.classList.remove('visibility');
        removeText;
    });
}
// events for buttons
btnMore.addEventListener('click', showProductDescriptionBtn);
btnLess.addEventListener('click', clearAllProductDescription);

//functions for showing description for each product 
function showProductDescription() {
    const parent = this.parentElement;
    parent.classList.toggle('visibility');
}

// event for show description for each product 
listElemArray.forEach(element => {
    element.addEventListener('click', showProductDescription);
});


// DOM elements
const input = document.querySelector(".search");
const listElem = document.querySelectorAll("li");
const buttonMore = document.querySelectorAll(".buttonMore");
const buttonLess = document.querySelectorAll(".buttonLess");
const description = document.querySelectorAll("p");

description.forEach(element => {
    element.style.display = 'none';
});

// functions
const searching = () => {
    const text = input.value.toLowerCase();
    listElem.forEach(element => {
        if(element.textContent.toLowerCase().includes(text) === true) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'
        }
    });
}

const buttonMoreFcn = () => {
    buttonMore.forEach(element => {
        element.addEventListener("click", moreText);
    });
};
const moreText = () => {
    // return buttonMore.appendChild(description[0]);
    description.forEach(element => {
        element.style.display = 'block';
    });
}
buttonMoreFcn();

const buttonLessFcn = () => {
    buttonLess.forEach(element => {
        element.addEventListener("click", lessText);
    });
}
const lessText = () => {
    description.forEach(element => {
        element.style.display = 'none';
    });
}
buttonLessFcn();

// const changeColor = () => {
//     listElem.forEach(element => {
//         element.addEventListener("click", changeclass);
//     });
// }
// function changeclass() {
//         this.classList.toggle("done");
// }
// changeColor();

// events
input.addEventListener("input", searching);




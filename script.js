
const input = document.querySelector(".search");
const listElemArray = document.querySelectorAll("li");
const buttonMore = document.querySelectorAll(".buttonMore");
const buttonLess = document.querySelectorAll(".buttonLess");
const description = document.querySelectorAll("p");

const searching = () => {
    const text = input.value.toLowerCase();
    listElemArray.forEach(element => {
        if(element.textContent.toLowerCase().includes(text) === true) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'
        }
    });
}
input.addEventListener("input", searching);

const buttonMoreFcn = () => {
    buttonMore.forEach(element => {
        element.addEventListener("click", moreText);
    });
};
const moreText = () => {
    description.forEach(element => {
        element.classList.add('visibility');
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
        element.classList.remove('visibility');
    });
}
buttonLessFcn();







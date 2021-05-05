
const input = document.querySelector(".search");
const listElem = document.querySelectorAll("li");
const buttonMore = document.querySelectorAll(".buttonMore");
const buttonLess = document.querySelectorAll(".buttonLess");
const description = document.querySelectorAll("p");

description.forEach(element => {
    element.style.display = 'none';
});

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
input.addEventListener("input", searching);

const buttonMoreFcn = () => {
    buttonMore.forEach(element => {
        element.addEventListener("click", moreText);
    });
};
const moreText = () => {
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








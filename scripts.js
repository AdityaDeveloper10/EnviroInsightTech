let button = document.querySelector(".searchButton");
button.addEventListener("click", onClick);

let input = document.getElementById("search");



function onClick(event) {
    event.preventDefault();
    console.log('button has been toggled')
    input.value = "";
    window.location.hash = "body"
}
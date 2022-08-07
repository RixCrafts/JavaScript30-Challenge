console.log("JS Loaded");

let items = document.querySelectorAll("div.panel");

items.forEach(item => item.addEventListener('click', () => {
    clearClass();
    item.classList.add("selected");
}))

function clearClass(){
    items.forEach(item => item.classList.remove("selected"));
}
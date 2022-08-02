let spacingValue = document.querySelector("#spacing");
let blurValue = document.querySelector("#blur");
let colorValue = document.querySelector("#base");
let root = document.firstElementChild;

root.style.setProperty("--base", 20);

console.log(root);

spacingValue.addEventListener("mousedown", function(){
    spacingValue.addEventListener("change", updateValues);
    spacingValue.addEventListener("mousemove", updateValues);
    spacingValue.addEventListener("mouseup", function(){
        spacingValue.removeEventListener("mousemove", updateValues);
    }, "once");
}, "once");

blurValue.addEventListener("mousedown", function () {
    blurValue.addEventListener("change", updateValues);
    blurValue.addEventListener("mousemove", updateValues);
    blurValue.addEventListener("mouseup", function () {
        blurValue.removeEventListener("mousemove", updateValues);
    }, "once");
}, "once");

colorValue.addEventListener("change", updateValues);

function updateValues(){
    console.log(spacingValue.value);
    root.style.setProperty("--blur", blurValue.value + blurValue.dataset.sizing);
    root.style.setProperty("--spacing", spacingValue.value + spacingValue.dataset.sizing);
    root.style.setProperty("--color", colorValue.value);
}


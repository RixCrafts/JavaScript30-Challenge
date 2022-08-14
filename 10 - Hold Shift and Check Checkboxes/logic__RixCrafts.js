console.info("logic__RixCrafts.js Loaded");

let checkBoxes = document.querySelectorAll("input");
let lastSelected = null;
let selectArea;

function selectionHandler(e) {
    checkBoxes.forEach(checkBox => {
        if (checkBox == this || checkBox == lastSelected) {
            selectArea = !selectArea;
        }
        if (e.shiftKey && selectArea) {
            checkBox.checked = true;
        }
    });
    lastSelected = this.checked ? this : null;
};

checkBoxes.forEach(element => {
    element.addEventListener('click', selectionHandler);
});
console.log("JS - Loaded");

window.addEventListener('keydown', function (e) {
    let element = this.document.querySelector(`div[data-key="${e.key}"]`);
    let sound = this.document.querySelector(`audio[data-key="${e.key}"]`);
    element.classList.add("playing");

    // Verifiying if the user os holding the key down
    if (!e.repeat) {
        // If not, check if it was a single o multiple press
        if (sound.currentTime == 0) {
            sound.play();
        } else {
            sound.currentTime = 0;
            sound.play();
        }
    } else {
        sound.play();
    }

});

window.addEventListener('keyup',
    function (e) {
        let element = this.document.querySelector(`div[data-key="${e.key}"]`);
        element.classList.remove("playing");
    });

//TODO: Make functionality for multiple long-press working together

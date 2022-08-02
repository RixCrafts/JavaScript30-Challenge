let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".second-hand");

let digitalClock = document.querySelector(".clock-digital p");

function getTime() {
    const currentTime = new Date();
    let hour = currentTime.getHours();
    setHourHand(hour);
    let minutes = currentTime.getMinutes();
    setMinutesHand(minutes);
    let seconds = currentTime.getSeconds();
    setSecondsHand(seconds);
    console.log(`${hour}:${minutes}:${seconds}`);
    digitalClock.innerHTML = `${hour}:${minutes}:${seconds}`;
}

function setHourHand(hour) {
    if (hour > 12) {
        hour -= 12;
    }
    hour_hand.style.transform = `rotateZ(${360 / 12 * hour + 90}deg)`;
}

function setMinutesHand(minutes) {
    min_hand.style.transform = `rotateZ(${360 / 60 * minutes + 90}deg)`;
}

function setSecondsHand(seconds) {
    sec_hand.style.transform = `rotateZ(${360 / 60 * seconds + 90}deg)`;
}

setInterval(getTime, 1000);

// TODO: Ver como solucionar el movimiento cuando se pasa de los 90 grados
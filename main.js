//Plan
//define the hand variable
// use the document.querySelector method to select the hand element (".hand")
//define the moveHand function
//Second hand should move 6 degrees every second
//use the setInterval method to call the moveHand function every second
//use the clearInterval method to stop the hand after 60 seconds
// then loop?

// let rotationDegrees = 90; // initial rotation in degrees

// setInterval(() => {
//   rotationDegrees += 6; // increment rotation by 6 degrees every second (60 seconds / 360 degrees = 1/6)
//   hand.style.transform = `rotate(${rotationDegrees}deg)`;
// }, 1000); // run the code inside setInterval() every 1000 milliseconds (1 second)

const hand = document.querySelector(".hand");

let i = 0
hand.style.transform = `rotate(6deg)`;
function increment() {
    i = i + 6 
    return hand.style.transform = `rotate(${i}deg)`;
}

let putItInTheClock = setInterval (increment, 1000)

/* get real seconds 
-use new date() to get the real seconds
create a function to hold 
*/
function getSeconds(){
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds * 6;
}
/* ## Bonus after your clock is ticking

- Use the JS Date object to get the real seconds.
 */
//   BONUS- Add a minute hand.
const minuteHand= document.querySelector(".minute-hand");

function moveMinute() {
    return minuteHand.style.transform = `rotate(${getMinutes}deg)`;
}
function getMinutes(){
    let date = new Date();
    let minutes = date.getMinutes();
    return minutes * 6;
}

function intervalForMinute(){
    while (getSeconds() === 0){
        return 60000;
    }
}
// BONUS- Add an hour hand.
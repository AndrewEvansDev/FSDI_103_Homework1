const day = prompt("What day is it?");
let dayMsg;
if (day === "friday") {
    dayMsg = "wooo whooo it's Friday!";
} else {
    dayMsg = "every day is less exciting";
}
document.write(dayMsg);

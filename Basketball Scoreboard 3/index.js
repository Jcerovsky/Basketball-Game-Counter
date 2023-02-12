let homeCountEl = document.getElementById("home-count");
let guestCountEl = document.getElementById("guest-count");

let countHome = 0;
let countGuest = 0;

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function plus1home() {
    countHome += 1;
    homeCountEl.textContent = countHome;
};

function plus2home() {
    countHome += 2;
    homeCountEl.textContent = countHome;
};

function plus3home() {
    countHome += 3;
    homeCountEl.textContent = countHome;
};

function plus1guest() {
    countGuest += 1;
    guestCountEl.textContent = countGuest;
};

function plus2guest() {
    countGuest += 2;
    guestCountEl.textContent = countGuest;
};

function plus3guest() {
    countGuest += 3;
    guestCountEl.textContent = countGuest;
};

function newGame() {
    countHome = 0;
    countGuest = 0;
    homeCountEl.textContent = 0;
    guestCountEl.textContent = 0;
}

let proRoomCount = 1;
let basicRoomCount = 1;
let basicCost = 199;
let proCost = 249;

const decrementBasicRoom = document.querySelector(
    ".basic-decrement-price-button"
);

decrementBasicRoom.addEventListener("click", (event) => {
    if (basicRoomCount > 1) {
        basicRoomCount -= 1;
        basicCost = basicRoomCount * 199;
        const roomCountText = document.querySelector(".basic-room-count");
        const roomCost = document.querySelector(".basic-cost");
        roomCountText.textContent = `${basicRoomCount} Room`;
        roomCost.textContent = `$${basicCost}`;
    }
});

const incrementBasicRoom = document.querySelector(".basic-add-price-button");

incrementBasicRoom.addEventListener("click", (event) => {
    basicRoomCount += 1;
    basicCost = basicRoomCount * 199;
    const roomCountText = document.querySelector(".basic-room-count");
    const roomCost = document.querySelector(".basic-cost");
    roomCountText.textContent = `${basicRoomCount} Room`;
    roomCost.textContent = `$${basicCost}`;
});

const decrementProRoom = document.querySelector(".pro-decrement-price-button");

decrementProRoom.addEventListener("click", (event) => {
    if (proRoomCount > 1) {
        proRoomCount -= 1;
        proCost = proRoomCount * 199;
        const roomCountText = document.querySelector(".pro-room-count");
        const roomCost = document.querySelector(".pro-cost");
        roomCountText.textContent = `${proRoomCount} Room`;
        roomCost.textContent = `$${proCost}`;
    }
});

const incrementProRoom = document.querySelector(".pro-add-price-button");

incrementProRoom.addEventListener("click", (event) => {
    proRoomCount += 1;
    proCost = proRoomCount * 199;
    const roomCountText = document.querySelector(".pro-room-count");
    const roomCost = document.querySelector(".pro-cost");
    roomCountText.textContent = `${proRoomCount} Room`;
    roomCost.textContent = `$${proCost}`;
});

const basicSignup = document.querySelector(".basic-button");
basicSignup.addEventListener("click", (event) => {
    const basicThanks = document.querySelector(".basic-thanks");
    basicThanks.style.display = "block";
    basicThanks.textContent = `Thank you for choosing ${basicRoomCount} room`;
    basicThanks.style.color = "#918e8e";
});

const proSignup = document.querySelector(".pro-button");
proSignup.addEventListener("click", (event) => {
    const proThanks = document.querySelector(".pro-thanks");
    proThanks.style.display = "block";
    proThanks.textContent = `Thank you for choosing ${proRoomCount} room`;
    proThanks.style.color = "#918e8e";
});

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields')
        }
    });

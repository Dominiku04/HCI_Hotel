document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const roomType = params.get('room');

    if (roomType) {
        const roomTypeSelect = document.getElementById('room-type');
        roomTypeSelect.value = roomType;
        roomTypeSelect.disabled = true;
        calculateTotalPrice(); 
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger?.classList.remove("active");
        navMenu.classList.remove("active");
    }

    const accItem = document.getElementsByClassName('accordionItem');
    const accHD = document.getElementsByClassName('accordionIHeading');

    for (let i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
        const itemClass = this.parentNode.className;
        for (let i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass === 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
});

function calculateTotalPrice() {
    const roomType = document.getElementById('room-type').value;
    const checkInDate = new Date(document.getElementById('check-in').value);
    const checkOutDate = new Date(document.getElementById('check-out').value);
    const totalPriceElement = document.getElementById('total-price');

    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
        totalPriceElement.value = '';
        return;
    }

    const dayDifference = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    if (dayDifference <= 0) {
        totalPriceElement.value = 'Invalid dates';
        return;
    }

    let roomRate;
    switch (roomType) {
        case 'deluxe':
            roomRate = 5000;
            break;
        case 'extra-deluxe':
            roomRate = 8000;
            break;
        case 'superior':
            roomRate = 10000;
            break;
        default:
            roomRate = 0;
    }

    const totalPrice = dayDifference * roomRate;
    totalPriceElement.value = `₱${totalPrice.toFixed(2)}`;
}

function showSuccessMessage(event) {
    event.preventDefault();
    alert("Booking Successful!");
    return false;
}

function goToHomePage() {
    window.location.href = "index.html";
}

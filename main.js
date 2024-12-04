import { renderRoomList, setCheckInDate, setCheckOutDate } from "./modules/roomviewer";

renderRoomList();

//Sets todays date as standard for check-in date
setCheckInDate();

//Sets tomorrows date as standard for check-out date
setCheckOutDate();


//Navbar desktop listeners
const bookYourStayNavbar = document.getElementById('book-your-stay');
bookYourStayNavbar.addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
})

const ourVisionNavbar = document.getElementById('our-vision');
ourVisionNavbar.addEventListener('click', () => {
    document.getElementById('innovation').scrollIntoView({behavior: 'smooth'});
})

const contactUsNavbar = document.getElementById('contact-us');
contactUsNavbar.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
})

//Navbar hamburger listeners
const bookYourStayHamburger = document.getElementById('book-hamburger');
bookYourStayHamburger.addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
})

const ourVisionHamburger = document.getElementById('vision-hamburger');
ourVisionHamburger.addEventListener('click', () => {
    document.getElementById('innovation').scrollIntoView({behavior: 'smooth'});
})

const contactUsHamburger = document.getElementById('contact-hamburger');
contactUsHamburger.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
})


//Running content listeners
const heroButton = document.getElementById('button--hero');
heroButton.addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
})

const bookingButton = document.getElementById('button--booking');
bookingButton.addEventListener('click', () => {
    document.getElementById('room-display').scrollIntoView({behavior: 'smooth'});
})

const learnMoreLink = document.getElementById('hero__learn-more-image');
learnMoreLink.addEventListener('click', () => {
    document.getElementById('innovation').scrollIntoView({behavior: 'smooth'});
})

//Hamburger toggle
const headerMenuToggle = document.querySelector('.header__menu-toggle');
const headerMenu = document.querySelector('.header__menu');
headerMenuToggle.addEventListener('click', () => {
        headerMenu.classList.toggle('toggle');
        headerMenuToggle.classList.toggle('rotate');
    })
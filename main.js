import { renderRoomList, setCheckInDate, setCheckOutDate } from "./modules/roomviewer";

renderRoomList();

//Sets todays date as standard for check-in date
setCheckInDate();

//Sets tomorrows date as standard for check-out date
setCheckOutDate();


//Navbar listeners
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
const header__menu = document.querySelector('.header__menu-toggle');
header__menu.addEventListener('click', () => {
    console.log('hej')
})
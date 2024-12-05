import { renderRoomList, setCheckInDate, setCheckOutDate } from "./modules/roomviewer";

renderRoomList();

//Sets todays date as standard for check-in date
setCheckInDate();

//Sets tomorrows date as standard for check-out date
setCheckOutDate();


const smoothScrollToTarget = (target) => {
    const element = document.getElementById(target);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}

//Navbar desktop listeners
document.getElementById('book-your-stay').addEventListener('click', () => {
    smoothScrollToTarget('booking');
})

document.getElementById('our-vision').addEventListener('click', () => {
    smoothScrollToTarget('innovation');
})

document.getElementById('contact-us').addEventListener('click', () => {
    smoothScrollToTarget('contact');
})

//Navbar hamburger listeners
document.getElementById('book-hamburger').addEventListener('click', () => {
    smoothScrollToTarget('booking');
})

document.getElementById('vision-hamburger').addEventListener('click', () => {
    smoothScrollToTarget('innovation');
})

document.getElementById('contact-hamburger').addEventListener('click', () => {
    smoothScrollToTarget('contact');
})

//Running content listeners
document.getElementById('button--hero').addEventListener('click', () => {
    smoothScrollToTarget('booking');
}) 

document.getElementById('button--booking').addEventListener('click', () => {
    smoothScrollToTarget('room-display');
}) 

document.getElementById('hero__learn-more-image').addEventListener('click', (event) => {
    event.preventDefault();
    smoothScrollToTarget('innovation');
})



const sectionList = document.querySelectorAll('.content');  // Use querySelectorAll to get a NodeList
sectionList.forEach(section => {
    section.addEventListener('click', () => {
        if (headerMenu.classList.contains('toggle')) {
            headerMenu.classList.toggle('toggle');
            headerMenuToggle.classList.toggle('rotate');
        }
    });
});


//Hamburger toggle
const headerMenuToggle = document.querySelector('.header__menu-toggle');
const headerMenu = document.querySelector('.header__menu');
headerMenuToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('toggle');
    headerMenuToggle.classList.toggle('rotate');
})
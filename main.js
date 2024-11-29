import { renderRoomList, setCheckInDate, setCheckOutDate } from "./modules/roomviewer";

renderRoomList();

//Sets todays date as standard for check-in date
setCheckInDate();

//Sets tomorrows date as standard for check-out date
setCheckOutDate();



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
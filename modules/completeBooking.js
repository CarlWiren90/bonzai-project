const content = document.querySelector('.content__book-room');
if (!content) {
    console.error('Content element not found.');
}
export const renderCompleteBooking = (room) => {
    createBookRoomImage(room);
    createBookRoomDescription(room);

}

const createBookRoomImage = (room) => {
    const roomImageContainer = document.querySelector('.content__image-container--book-room');
    const image = document.createElement('img');
    image.classList.add('room-display__image', 'room-display__image--complete-booking')
    image.src = room.roomImage;
    roomImageContainer.appendChild(image);
}

const createBookRoomDescription = (room) => {
    const contentInfo = document.querySelector('.content__info--book-room');
    contentInfo.innerText = `Enter your details and finalize your booking for ${room.roomName} below and take one step closer to serenity.`;
}



document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const roomData = params.get('data');
    if (roomData) {
        const room = JSON.parse(decodeURIComponent(roomData));
        console.log(room)
        renderCompleteBooking(room);
    } else {
        console.error('Room data not found in URL.');
    }
});
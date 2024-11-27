import { rooms } from "./rooms";

const roomList = document.querySelector('.room-display__room-list');

export const renderRoomList = () => {
    console.log('hej')
    rooms.forEach((room) => {
        const roomItemContainer = document.createElement('section');
        roomItemContainer.classList.add('room-display__room-item');
        roomList.appendChild(roomItemContainer);
    }) 
}
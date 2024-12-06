import { rooms } from "./rooms";


const roomList = document.querySelector('.room-display__room-list');

export const renderRoomList = () => {
    renderRooms();
}

const renderRooms = () => {
    rooms.forEach((room) => {
        //Creates room containers
        const roomItemContainer = document.createElement('section');
        roomItemContainer.classList.add('room-display__room-item', 'room-display__room-item' + room.roomID);
        roomList.appendChild(roomItemContainer);

        //Appends room image to item
        const roomImage = createRoomItemImage(room)
        roomItemContainer.appendChild(roomImage);

        //Appends room header
        const roomHeader = createRoomHeader(room); 
        roomItemContainer.appendChild(roomHeader);

        //Appends room description
        const roomDescription = createRoomDescription(room)
        roomItemContainer.appendChild(roomDescription);

        //Appends room footer w price and button
        const roomFooter = createRoomFooter(room);
        roomItemContainer.appendChild(roomFooter);
    })
}

const createRoomItemImage = (room) => {
    const roomItemImage = document.createElement('img');
    roomItemImage.classList.add('room-display__image', 'room-display__image' + room.roomID);
    roomItemImage.src = room.roomImage;
    if (room.roomName === 'Gaia') {
        roomItemImage.setAttribute('alt', 'Lush room with a queensize bed and plants');
    }
    else if (room.roomName === 'Luna') {
        roomItemImage.setAttribute('alt', 'Cozy room with a kingsize bed and white walls');

    }
    else if (room.roomName === 'Aura') {
        roomItemImage.setAttribute('alt', 'Warm room with twin beds and balcony overlooking a garden');

    }
    return roomItemImage;
}

const createRoomHeader = (room) => {
    const roomHeader = document.createElement('section');
    roomHeader.classList.add('room-display__header')
    roomHeader.innerText = room.roomName;
    return roomHeader;
}

const createRoomDescription = (room) => {
    const roomDescription = document.createElement('section');
    roomDescription.classList.add('room-display__description');
    roomDescription.innerText = room.roomDescription;
    return roomDescription;
}

const createRoomFooter = (room) => {
    const roomFooter = document.createElement('section');
    roomFooter.classList.add('room-display__footer');

    const roomPrice = document.createElement('p');
    roomPrice.classList.add('room-display__price');
    roomPrice.innerText = room.roomPrice + ' €'
    roomFooter.appendChild(roomPrice);

    const bookButton = document.createElement('a');
    bookButton.classList.add('button', 'button--booking');
    bookButton.id = 'button--book-room'
    bookButton.innerText = 'Book now'
    bookButton.type = 'submit'
/*     bookButton.href="bookRoomGaia.html"
 */
    bookButton.addEventListener('click', () => {
        const roomData = encodeURIComponent(JSON.stringify(room)); // Convert room object to string
    window.location.href = `bookRoomGaia.html?data=${roomData}`; // Pass it in the URL
    });

    roomFooter.appendChild(bookButton);
    return roomFooter;
}

export const setCheckInDate = () => {
    const date = getDate().toISOString().split('T')[0];
    const inputCheckIn = document.getElementById('check-in-date');
    inputCheckIn.value = date;
}

export const setCheckOutDate = () => {
    const date = getDate();
    date.setDate(date.getDate() + 1);
    const formattedDate = date.toISOString().split('T')[0];
    const inputCheckOut = document.getElementById('check-out-date');
    inputCheckOut.value = formattedDate;
    console.log(date);
}

const getDate = () => {
    const todaysDate = new Date();
    return todaysDate;
}



import { renderRoomList, setCheckInDate, setCheckOutDate } from "./modules/roomviewer";

renderRoomList();

//Sets todays date as standard for check-in date
setCheckInDate();

//Sets tomorrows date as standard for check-out date
setCheckOutDate();
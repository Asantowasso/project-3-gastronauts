import React from 'react';
import Sidebar from './Navbar';
import './styles/reservation.css';

const ReservationForm = () => {

    const userChecker = new RegExp("[A-Z\sa-z]{3,30}");

    const phoneChecker = new RegExp("(\d{3})-?\s?(\d{3})-?\s?(\d{4})");

    const textBoxMessage = "Dietary restrictions, handicap accessibility, special occasion, or something not listed here?";

//     // function reservationDate(){

//       var currentDateTime = new Date();

//       var year = currentDateTime.getFullYear();

//       var month = (currentDateTime.getMonth() + 1);

//       var date = (currentDateTime.getDate() + 1);

//       if(date < 10) {
//         date = '0' + date;
//       }
//       if(month < 10) {
//         month = '0' + month;
//       }

//       let saveDate = year + "-" + month + "-" + date;

//       let reservationDate = document.querySelector("#reservation-date");

//       let reservationTime = document.querySelector("#reservation-time");
//       console.log("saveDate: ", saveDate)
//       console.log("this.value: ", this.value)
//       reservationDate.setAttribute("min", saveDate);

//       reservationDate.onchange = function () {
//         console.log("this.value: ", this.value);
//           reservationTime.setAttribute("min", this.value);
//     // }
// // }

// // reservationDate();

    return (
        <div>
          <Sidebar/>
            <form action = "reservation.php" method = "post">
                <div className = "elem-group">
                    <label for = "name">Your Preferred Name</label>
                    <input type = "text" id = "name" name = "customer_name" placeholder = "Mariely Brite" pattern = {userChecker} required/>
                </div>
                <div className = "elem-group">
              <label for = "email">Your E-mail</label>
              <input type = "email" id = "email" name = "customer_email" placeholder = "marbrite10@email.com" required/>
              <div className = "elem-group">
              <label for = "phone">Your Phone Number (We text updates)</label>
              <input type = "tel" id = "phone" name = "customer_phone" placeholder = "498-348-3872" pattern = {phoneChecker} required />
            </div>
            <div className = "elem-group">
              <label for = "reservation-selection">At which restaurant are you making the reservation or to-go order?</label>
              <select id = "reservation-selection" name = "reservation_choice" required>
                  <option value = "">Choose which restaurant</option>
                  <option value = "magggie_mp">Maggie's Moon Pies</option>
                  <option value = "far_out_bar">Far Out Bar</option>
                  <option value = "estella">Estella's</option>
                  <option value = "at_the_end">At the End of the Universe</option>
                  <option value = "no-seating">No reservation / To-Go Order</option>
              </select>
            </div>
            <hr/>
            <div className = "elem-group inlined">
              <label for = "adult">Adults</label>
              <input type = "number" id = "adult" name = "total_adults" placeholder = "2" min = "1" required />
            </div>
            <div className = "elem-group inlined">
              <label for = "child">Children</label>
              <input type = "number" id = "child" name = "total_children" placeholder = "2" min = "0" required />
            </div>
            <div className = "elem-group inlined">
              <label for = "reservation-date">Reservation Date</label>
              <input type ="date" id = "reservation-date" name = "reservation-date" required />
            </div>
            <div className = "elem-group inlined">
              <label for = "reservation-time">Reservation Time</label>
              <input type = "time" id = "reservation-time" name = "reservation-time" step = "900" required />
            </div>
            <div className = "elem-group">
              <label for = "seating-selection">Seating Preference</label>
              <select id = "seating-selection" name = "seating_preference" required>
                  <option value = "">Choose a seating option or to-go</option>
                  <option value = "booth-seating">Booth</option>
                  <option value = "bar-seating">Bar</option>
                  <option value = "table-seating">Table</option>
                  <option value = "patio-seating">Patio</option>
                  <option value = "no-seating">No seating / To-Go Order</option>
              </select>
            </div>
            <hr/>
            <div className = "elem-group">
              <label for = "message">Is there anything else we should know about?</label>
              <textarea id = "message" name = "visitor_message" placeholder = {textBoxMessage} required></textarea>
            </div>
            <button type = "submit">Reservation Takeoff!</button>
            </div>
            </form>
        </div>
    )

}

export default ReservationForm;
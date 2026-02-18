"use client";
import { useEffect } from "react";

export default function TimeSlot() {
  useEffect(() => {
    const update = document.querySelector("button.is-link");
    const table = document.getElementById("slots");

    update.addEventListener("click", function () {
      update.classList.add("is-loading");

      for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
          const cell = table.rows[i].cells[j];

          if (cell.className === "is-selected") {
            cell.className = "is-booked";
          } else if (cell.className === "is-cancelled") {
            cell.className = "";
          }
        }
      }

      setTimeout(() => {
        update.classList.remove("is-loading");
      }, 800);
    });

    // enable clicking
    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 1; j < table.rows[i].cells.length; j++) {
        const cell = table.rows[i].cells[j];

        cell.addEventListener("click", function () {
          if (cell.classList.contains("is-blocked")) {
            alert("Slot already blocked");
            return;
          }

          if (cell.className === "is-booked") {
            cell.className = "is-cancelled";
            return;
          }

          if (cell.className === "is-cancelled") {
            cell.className = "is-booked";
            return;
          }

          cell.classList.toggle("is-selected");
        });
      }
    }
  }, []);

  return (
    <section className="section is-centered">
      <div className="container is-fluid">

        <table id="slots" className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>Hour</th>
              <th className="time">Sat</th>
              <th className="time">Sun</th>
              <th className="time">Mon</th>
              <th className="time">Tue</th>
              <th className="time">Wed</th>
              <th className="time">Thu</th>
              <th className="time">Fri</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 24 }).map((_, i) => (
              <tr key={i}>
                <td><strong>{i.toString().padStart(2, "0")}:00</strong></td>
                <td></td>
                <td></td>
                <td className={i === 10 ? "is-booked" : ""}></td>
                <td></td>
                <td className={i === 15 ? "is-blocked" : ""}></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link">
              Update Booking
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

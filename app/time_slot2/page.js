"use client";
import { useEffect } from "react";

export default function TimeSlot() {
  // generate 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  // generate 24 hours
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0") + ":00"
  );

  useEffect(() => {
    var update = document.querySelector("button.is-link");
    var table = document.getElementById("slots");
    var selects = [];

    update.addEventListener("click", function () {
      update.classList.add("is-loading");

      for (var i = 1, row; (row = table.rows[i]); i++) {
        for (var j = 1, col; (col = row.cells[j]); j++) {
          if (
            table.rows[i].cells[j].className == "is-selected" ||
            table.rows[i].cells[j].className == "is-booked"
          ) {
            table.rows[i].cells[j].className = "is-booked";
          } else if (table.rows[i].cells[j].className == "is-cancelled") {
            table.rows[i].cells[j].className = "";
          }
        }
      }

      setTimeout(() => {
        update.classList.remove("is-loading");
      }, 1000);
    });

    for (var i = 1, row; (row = table.rows[i]); i++) {
      for (var j = 1, col; (col = row.cells[j]); j++) {
        table.rows[i].cells[j].addEventListener("click", function () {
          bookSlot(this);
        });
      }
    }

    function bookSlot(tableCell) {
      if (tableCell.className === "is-booked") {
        tableCell.classList.replace("is-booked", "is-cancelled");
        return;
      }

      if (tableCell.className === "is-cancelled") {
        tableCell.classList.replace("is-cancelled", "is-booked");
        return;
      }

      tableCell.classList.toggle("is-selected");
    }
  }, []);

  return (
    <section className="section is-centered">
      <div className="container is-fluid">

        <table id="slots" className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>Hour</th>
              {days.map((d, i) => (
                <th key={i} className="time">{d}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {hours.map((h, row) => (
              <tr key={row}>
                <td><strong>{h}</strong></td>
                {days.map((_, col) => (
                  <td key={col}></td>
                ))}
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

"use client";
import { useEffect } from "react";

export default function TimeSlot() {
  useEffect(() => {
  const table = document.getElementById("slots");
  if (!table) return;

  let isDragging = false;
  let dragMode = null;

  function applyDrag(cell) {
    if (dragMode === "add") {
      cell.classList.add("is-selected");
    } else if (dragMode === "remove") {
      cell.classList.remove("is-selected");
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    for (let j = 1; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];

      cell.addEventListener("mousedown", function (e) {
        if (cell.classList.contains("is-blocked")) return;

        isDragging = true;
        dragMode = cell.classList.contains("is-selected")
          ? "remove"
          : "add";

        applyDrag(cell);
        e.preventDefault();
      });

      cell.addEventListener("mouseenter", function () {
        if (!isDragging) return;
        if (cell.classList.contains("is-blocked")) return;

        applyDrag(cell);
      });
    }
  }

  document.addEventListener("mouseup", function () {
    isDragging = false;
    dragMode = null;
  });

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
            {Array.from({ length: 96 }).map((_, i) => {
              const hour = Math.floor(i / 4);
              const minutes = (i % 4) * 15;

              const label =
                hour.toString().padStart(2, "0") +
                ":" +
                minutes.toString().padStart(2, "0");

              return (
                <tr key={i}>
                  <td>
                    <strong>{label}</strong>
                  </td>

                  <td></td>
                  <td></td>
                  <td className={i === 40 ? "is-booked" : ""}></td>
                  <td></td>
                  <td className={i === 60 ? "is-blocked" : ""}></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link">Update Booking</button>
          </div>
        </div>
      </div>
    </section>
  );
}

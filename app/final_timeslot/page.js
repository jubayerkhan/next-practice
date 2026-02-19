"use client";
import styles from "./timeslot.module.css";
import { useEffect } from "react";

export default function TimeSlot() {
  useEffect(() => {
    const table = document.getElementById("slots");
    const updateBtn = document.getElementById("update-booking");

    if (!table || !updateBtn) return;

    let isDragging = false;
    let dragMode = null;

    function applyDrag(cell) {
      if (cell.classList.contains("is-blocked")) return;

      // If booked → mark cancelled
      if (cell.classList.contains("is-booked")) {
        cell.classList.remove("is-booked");
        cell.classList.add("is-cancelled");
        return;
      }

      // If cancelled → restore booked
      if (cell.classList.contains("is-cancelled")) {
        cell.classList.remove("is-cancelled");
        cell.classList.add("is-booked");
        return;
      }

      // Normal selection
      if (dragMode === "add") {
        cell.classList.add("is-selected");
      } else if (dragMode === "remove") {
        cell.classList.remove("is-selected");
      }
    }

    // Attach drag events
    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 1; j < table.rows[i].cells.length; j++) {
        const cell = table.rows[i].cells[j];

        cell.addEventListener("mousedown", function (e) {
          if (cell.classList.contains("is-blocked")) return;

          isDragging = true;
          dragMode = cell.classList.contains("is-selected") ? "remove" : "add";

          applyDrag(cell);
          e.preventDefault();
        });

        cell.addEventListener("mouseenter", function () {
          if (!isDragging) return;
          applyDrag(cell);
        });
      }
    }

    document.addEventListener("mouseup", function () {
      isDragging = false;
      dragMode = null;
    });

    // ✅ UPDATE BUTTON LOGIC
    updateBtn.addEventListener("click", function () {
      updateBtn.classList.add("is-loading");

      for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
          const cell = table.rows[i].cells[j];

          // Selected → Booked
          if (cell.classList.contains("is-selected")) {
            cell.classList.remove("is-selected");
            cell.classList.add("is-booked");
          }

          // Cancelled → Remove completely
          else if (cell.classList.contains("is-cancelled")) {
            cell.classList.remove("is-cancelled");
          }
        }
      }

      setTimeout(() => {
        updateBtn.classList.remove("is-loading");
      }, 500);
    });
  }, []);

  return (
    <section className="section is-centered">
      <div className="container is-fluid">
        <table
          id="slots"
          className="table is-bordered is-fullwidth mt-10"
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
        >
          <thead>
            <tr className="bg-white">
              <th className="!bg-white border-none w-auto"></th>
              <th>Sat</th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
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
                  <td className="!bg-white border-none !w-10">
                    <strong
                      className={`${minutes === 0 ? styles.hourLabel : styles.minuteLabel}`}
                    >
                      {label}
                    </strong>
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

        <div className="field is-grouped is-grouped-centered mt-3 mb-10 ml-14">
          <div className="control">
            <button
              id="update-booking"
              className="button is-link bg-blue-500 text-white px-2 rounded-[2px]"
            >
              Update Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

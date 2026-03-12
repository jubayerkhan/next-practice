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

    // UPDATE BUTTON LOGIC
    updateBtn.addEventListener("click", function () {
      updateBtn.classList.add("is-loading");

      for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
          const cell = table.rows[i].cells[j];

          if (cell.classList.contains("is-selected")) {
            cell.classList.remove("is-selected");
            cell.classList.add("is-booked");
          } else if (cell.classList.contains("is-cancelled")) {
            cell.classList.remove("is-cancelled");
          }
        }
      }

      // ⭐ GENERATE SUMMARY HERE
      const summary = generateSummary();

      const summaryDiv = document.getElementById("booking-summary");

      summaryDiv.innerHTML =
        "<h3>Booking Summary</h3>" +
        summary
          .map(
            (d) =>
              `<p><strong>${d.day.toUpperCase()}</strong>: ${d.times
                .map((t) => `${t.start - 15} - ${t.end}`)
                .join(", ")}</p>`,
          )
          .join("");

      console.log(summary);

      setTimeout(() => {
        updateBtn.classList.remove("is-loading");
      }, 500);
    });

    // generate summery of bookings
    function generateSummary() {
      const days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
      const result = [];

      for (let d = 0; d < 7; d++) {
        let daySlots = [];

        for (let i = 1; i < table.rows.length; i++) {
          const cell = table.rows[i].cells[d + 1];

          if (cell.classList.contains("is-booked")) {
            const label = table.rows[i].cells[0].innerText;
            daySlots.push(label);
          }
        }

        if (daySlots.length === 0) continue;

        const times = [];
        let start = daySlots[0];
        let prev = daySlots[0];

        for (let i = 1; i < daySlots.length; i++) {
          const current = daySlots[i];

          const prevDate = new Date(`1970-01-01T${prev}:00`);
          const currDate = new Date(`1970-01-01T${current}:00`);

          const diff = (currDate - prevDate) / 60000;

          if (diff !== 15) {
            times.push({ start, end: prev });
            start = current;
          }

          prev = current;
        }

        times.push({ start, end: prev });

        result.push({
          day: days[d],
          times,
        });
      }

      return result;
    }
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
              <th className="bg-white! border-none w-auto"></th>
              <th className="pb-2!">Sat</th>
              <th className="pb-2!">Sun</th>
              <th className="pb-2!">Mon</th>
              <th className="pb-2!">Tue</th>
              <th className="pb-2!">Wed</th>
              <th className="pb-2!">Thu</th>
              <th className="pb-2!">Fri</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 96 }).map((_, i) => {
              const hour = Math.floor((i + 1) / 4);
              const minutes = ((i + 1) % 4) * 15;

              const label =
                hour.toString().padStart(2, "0") +
                ":" +
                minutes.toString().padStart(2, "0");

              return (
                <tr key={i}>
                  <td className="bg-white! border-none! w-10!">
                    <strong
                      className={`${minutes === 0 ? styles.hourLabel : styles.minuteLabel}`}
                    >
                      {label}
                    </strong>
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
              className="button is-link bg-blue-500 text-white px-2 rounded-[2px] cursor-pointer"
            >
              Update Booking
            </button>
          </div>
        </div>
        <div id="booking-summary">
          <h3>Booking Summary</h3>
        </div>
      </div>
    </section>
  );
}

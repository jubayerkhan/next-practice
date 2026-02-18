"use client";
import { useEffect } from "react";

export default function TimeSlot() {
  useEffect(() => {
    var currHours = new Date().getHours();
    var update = document.querySelector("button.is-link");
    var table = document.getElementById("slots");
    var selects = [];

    update.addEventListener("click", function (event) {
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

      document.querySelector(".button.is-link").value = selects;

      setTimeout(() => {
        update.classList.remove("is-loading");
      }, 1000);
    });

    for (var i = 1, row; (row = table.rows[i]); i++) {
      for (var j = 1, col; (col = row.cells[j]); j++) {
        if (table.rows[i].cells[j].classList.contains("is-blocked")) {
          table.rows[i].cells[j].addEventListener("click", function (event) {
            alrBooked(this);
          });
        } else {
          table.rows[i].cells[j].addEventListener("click", function (event) {
            bookSlot(this);
          });
        }
      }
    }

    function bookSlot(tableCell) {
      for (var i = 1; i < table.rows.length; i++) {
        if (
          table.rows[i].cells[tableCell.cellIndex].classList.contains(
            "is-booked",
          ) ||
          table.rows[i].cells[tableCell.cellIndex].classList.contains(
            "is-selected",
          )
        ) {
          if (i != tableCell.parentNode.rowIndex) {
            bookConflict(this);
            return;
          }
        } else if (tableCell.className == "is-booked") {
          tableCell.classList.replace("is-booked", "is-cancelled");
          return;
        } else if (tableCell.className == "is-cancelled") {
          tableCell.classList.replace("is-cancelled", "is-booked");
          return;
        }
      }

      tableCell.classList.toggle("is-selected");
    }

    function alrBooked() {
      alert("Slot already booked.");
    }

    function bookConflict() {
      alert("Cannot book multiple slots at once.");
    }
  }, []);

  return (
    <section className="section is-centered">
      <div className="container is-fluid">
        <div className="field is-grouped is-grouped-centered"></div>

        <table id="slots" className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>
                HOUR
              </th>
              <th className="time" id="1">
                SAT
              </th>
              <th className="time" id="2">
                SUN
              </th>
              <th className="time" id="3">
                MON
              </th>
              <th className="time" id="4">
                TUE
              </th>
              <th className="time" id="5">
                WED
              </th>
              <th className="time" id="6">
                THU
              </th>
              <th className="time" id="7">
                FRI
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>
                  ABB REB670
                  <br />
                  Busbar Protection
                  <br />
                </strong>
                RST
              </td>
              <td className="is-booked"></td>
              <td></td>
              <td></td>
              <td className="is-blocked"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                <strong>
                  ABB RED615
                  <br />
                  Differential Protection
                  <br />
                </strong>
                TU, RST
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                <strong>
                  ABB RED615 Sensor
                  <br />
                  Differential Protection
                  <br />
                </strong>
                TU, RST
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                <strong>
                  ABB RED670
                  <br />
                  Differential Protection
                  <br />
                </strong>
                TU, RST
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                <strong>
                  ABB REF615 Double
                  <br />
                  Feeder Protection
                  <br />
                </strong>
                TU, RST
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                <strong>
                  ABB REF615 Single
                  <br />
                  Feeder Protection
                  <br />
                </strong>
                TU, RST
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button type="submit" name="Bookings" className="button is-link">
              Update Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

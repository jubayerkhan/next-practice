"use client";

import { useState, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function BookingCalendar() {
  const [events, setEvents] = useState([]); // booked items: [{ id, start, end, ... }]

  // ──────────────────────────────
  //  Generate summary (same logic as your original generateSummary)
  // ──────────────────────────────
  const summary = useMemo(() => {
    const daysOrder = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
    const dayNameToIndex = {
      sat: 0, sun: 1, mon: 2, tue: 3, wed: 4, thu: 5, fri: 6,
    };

    const groupedByDay = {};

    events.forEach((ev) => {
      const startDate = new Date(ev.start);
      const dayName = startDate.toLocaleString("en-US", { weekday: "short" }).toLowerCase();
      const dayIdx = dayNameToIndex[dayName];
      if (dayIdx === undefined) return;

      const startTime = startDate.toTimeString().slice(0, 5); // "09:15"
      if (!groupedByDay[dayIdx]) groupedByDay[dayIdx] = [];
      groupedByDay[dayIdx].push(startTime);
    });

    return daysOrder
      .map((dayName, idx) => {
        const times = (groupedByDay[idx] || []).sort();
        if (times.length === 0) return null;

        const ranges = [];
        let currentStart = times[0];
        let prev = times[0];

        for (let i = 1; i < times.length; i++) {
          const curr = times[i];
          const diffMs =
            new Date(`1970-01-01T${curr}`).getTime() -
            new Date(`1970-01-01T${prev}`).getTime();

          if (diffMs !== 15 * 60 * 1000) {
            ranges.push({ start: currentStart, end: prev });
            currentStart = curr;
          }
          prev = curr;
        }
        ranges.push({ start: currentStart, end: prev });

        return { day: dayName, times: ranges };
      })
      .filter(Boolean);
  }, [events]);

  const subtract15Min = (timeStr) => {
    if (!timeStr) return "";
    let [h, m] = timeStr.split(":").map(Number);
    m -= 15;
    if (m < 0) {
      m += 60;
      h -= 1;
      if (h < 0) h = 0; // prevent negative hours (adjust if needed)
    }
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Booking Scheduler</h2>

      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "", // remove dayGrid/month/etc if you want only week view
        }}
        slotDuration="00:15:00"              // 15 min grid
        slotLabelInterval="01:00:00"          // show labels every hour
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: false,
          meridiem: "short",
        }}
        slotMinTime="00:00:00"
        slotMaxTime="24:00:00"
        weekends={true}
        firstDay={6}                          // Saturday = 6 (week starts Sat)
        editable={true}                       // allow resize/move existing bookings
        selectable={true}                     // drag to select/create
        selectOverlap={false}                 // no overlapping new selections
        selectMirror={true}                   // nice preview during drag

        // When user finishes drag-selection
        select={(selectInfo) => {
          const newEvent = {
            id: Date.now().toString(),
            start: selectInfo.start.toISOString(),
            end: selectInfo.end.toISOString(),
            // You can add: title: "Booked", backgroundColor: "#3788d8"
          };
          setEvents((prev) => [...prev, newEvent]);
          selectInfo.view.calendar.unselect(); // clear selection highlight
        }}

        // Click on existing booking → cancel
        eventClick={(clickInfo) => {
          if (window.confirm("Cancel this booking?")) {
            setEvents((prev) =>
              prev.filter((e) => e.id !== clickInfo.event.id)
            );
            clickInfo.event.remove();
          }
        }}

        // Visual style for booked slots
        eventBackgroundColor="#3788d8"
        eventBorderColor="#285e98"
        eventTextColor="white"

        events={events} // ← this drives the rendering
      />

      {/* Summary section – same style as your original */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Booking Summary</h3>
        {summary.length === 0 ? (
          <p className="text-gray-500">No bookings yet.</p>
        ) : (
          summary.map((item) => (
            <p key={item.day} className="mb-2">
              <strong>{item.day.toUpperCase()}</strong>:{" "}
              {item.times
                .map((t) => `${subtract15Min(t.start)} - ${t.end}`)
                .join(", ")}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
import React, { useState , useEffect} from "react";
import styles from "../css/calendar.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState({ start: null, end: null });
const [notes, setNotes] = useState({});
const [selectedDate, setSelectedDate] = useState(null);
  const monthImages = [
  "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5", // Jan
  "https://images.unsplash.com/photo-1519681393784-d120267933ba", // Feb
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", // Mar
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // Apr
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", // May
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Jun
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // Jul
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", // Aug
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Sep
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", // Oct
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66", // Nov
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", // Dec
];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthIndex = currentDate.getMonth();

  const handleDateClick = (date) => {
  setSelectedDate(date);

  if (!range.start || (range.start && range.end)) {
    setRange({ start: date, end: null });
  } else {
    if (date < range.start) {
      setRange({ start: date, end: range.start });
    } else {
      setRange({ ...range, end: date });
    }
  }
};

  const getDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={"empty" + i}></div>);
    }

   for (let i = 1; i <= totalDays; i++) {
  const date = new Date(year, month, i);

  const today = new Date();

  const isSelected =
  selectedDate &&
  date.toDateString() === selectedDate.toDateString();

  const isToday =
    date.toDateString() === today.toDateString();

  const isStart =
    range.start && date.toDateString() === range.start.toDateString();

  const isEnd =
    range.end && date.toDateString() === range.end.toDateString();

  const inRange =
    range.start && range.end && date > range.start && date < range.end;

  days.push(
    <div
  key={i}
  className={`${styles.day}
    ${isStart ? styles.start : ""}
    ${isEnd ? styles.end : ""}
    ${inRange ? styles.inRange : ""}
    ${isToday ? styles.today : ""}
     ${isSelected ? styles.selected : ""}`}
   
  onClick={() => handleDateClick(date)}
>
  {i}
  {notes && notes[date.toDateString()] && (
    <span className={styles.dot}></span>
  )}
</div>
  );
}

    return days;
  };

  useEffect(() => {
  try {
    const savedNotes = localStorage.getItem("calendar-notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }

    const lastDate = localStorage.getItem("last-selected-date");

    if (lastDate) {
      setSelectedDate(new Date(lastDate));
    } else {
      setSelectedDate(new Date()); // fallback → today
    }
  } catch (error) {
    console.log("Error loading data, resetting...");
    localStorage.clear();
  }
}, []);
useEffect(() => {
  localStorage.setItem("calendar-notes", JSON.stringify(notes));
}, [notes]);

useEffect(() => {
  if (selectedDate) {
    localStorage.setItem(
      "last-selected-date",
      selectedDate.toISOString()
    );
  }
}, [selectedDate]);

  return (
    <div className={styles.container}>
      {/* HERO */}
      <div className={styles.hero}>
        <img key={monthIndex} src={monthImages[monthIndex]} alt="month visual"/>
        <div className={styles.heroText}>
          <h1>
            {currentDate.toLocaleString("default", { month: "long" })}
          </h1>
          <span>{currentDate.getFullYear()}</span>
        </div>
      </div>

      {/* CALENDAR */}
      <div className={styles.calendarCard}>
        <div className={styles.header}>
          <button
  onClick={() =>
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    )
  }
>
  ←
</button>

          <h2>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>

          <button
  onClick={() =>
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    )
  }
>
  →
</button>
        </div>

       <div className={styles.grid}>
  {weekDays.map((day) => (
    <div key={day} className={styles.weekDay}>
      {day}
    </div>
  ))}
  {getDays()}
</div>

        <div className={styles.notes}>
         <h4>Notes {selectedDate && `for ${selectedDate.toDateString()}`}</h4>
         <textarea
  placeholder={
    selectedDate
      ? `Note for ${selectedDate.toDateString()}`
      : "Select a date to write notes..."
  }
  value={
    selectedDate && notes[selectedDate.toDateString()]
      ? notes[selectedDate.toDateString()]
      : ""
  }
  onChange={(e) => {
    if (!selectedDate) return;

    setNotes({
      ...notes,
      [selectedDate.toDateString()]: e.target.value,
    });
  }}
/>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
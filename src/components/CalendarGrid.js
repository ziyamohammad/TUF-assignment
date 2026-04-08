import React from "react";
import styles from "../css/calendar.module.css";

const CalendarGrid = ({ currentDate, range, onDateClick }) => {
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const startDay = startOfMonth.getDay();

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(<div key={"empty-" + i}></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i
    );

    const isStart =
      range.start && date.toDateString() === range.start.toDateString();

    const isEnd =
      range.end && date.toDateString() === range.end.toDateString();

    const inRange =
      range.start &&
      range.end &&
      date > range.start &&
      date < range.end;

    days.push(
      <div
        key={i}
        className={`${styles.day} 
          ${isStart ? styles.start : ""} 
          ${isEnd ? styles.end : ""} 
          ${inRange ? styles.inRange : ""}`}
        onClick={() => onDateClick(date)}
      >
        {i}
      </div>
    );
  }

  return <div className={styles.grid}>{days}</div>;
};

export default CalendarGrid;
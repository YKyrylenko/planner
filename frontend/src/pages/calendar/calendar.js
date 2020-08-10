import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";
import { setMonth } from "../../actions/calendarActions";
import { addMonths, getDaysInMonth } from "date-fns";
import { useDispatch } from "react-redux";
import { weekDays, months } from "../../utils/calendarUtils";

import "./calendar.css";

const getAmountDaysOfMonth = (date) => {
  return getDaysInMonth(date);
};

const currentMonthDays = (date) => {
  const days = [];
  const amountDaysInMonth = getAmountDaysOfMonth(date);
  const currentDay = date.getDate();
  for (let i = 1; i <= amountDaysInMonth; i++) {
    const link = `/tasks/${date.getFullYear()}/${date.getMonth() + 1}/${i}`;
    days.push(
      <div
        key={`${date.getMonth()}${i}`}
        className={i === currentDay ? "day current-day" : "day"}
      >
        <Link to={link}>{i}</Link>
      </div>
    );
  }
  return days;
};

const previousMonthDays = (date) => {
  const amountDaysInMonth = getAmountDaysOfMonth(date);
  const days = [];
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    amountDaysInMonth
  ).getDay(date);
  for (
    let i = amountDaysInMonth - lastDayOfMonth + 1;
    i <= amountDaysInMonth;
    i++
  ) {
    const link = `/tasks/${date.getFullYear()}/${date.getMonth() + 1}/${i}`;
    days.push(
      <div key={`${date.getMonth()}${i}`} className="day another-month-day">
        <Link to={link}>{i}</Link>
      </div>
    );
  }
  return days;
};

const nextMonthDays = (amountOfDays, date) => {
  const days = [];
  for (let i = 1; i <= 42 - amountOfDays; i++) {
    const link = `/tasks/${date.getFullYear()}/${date.getMonth() + 1}/${i}`;
    days.push(
      <div className="day another-month-day">
        <Link to={link}>{i}</Link>
      </div>
    );
  }
  return days;
};

const renderDays = (date) => {
  const prevMonthDays = previousMonthDays(addMonths(date, -1));
  const days = [...prevMonthDays, ...currentMonthDays(date)];
  days.push(...nextMonthDays(days.length, date));
  return <div className="calendar-body">{days}</div>;
};

const Calendar = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(setMonth(months[selectedDate.getMonth()]));
  }, [dispatch, selectedDate]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        {weekDays.map((day) => (
          <div className="week-day-name">{day}</div>
        ))}
      </div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: (index, elem) => {
            index > 1
              ? setSelectedDate(addMonths(selectedDate, +1))
              : setSelectedDate(addMonths(selectedDate, -1));
          },
          startSlide: 1,
        }}
      >
        {renderDays(addMonths(selectedDate, -1))}
        {renderDays(selectedDate)}
        {renderDays(addMonths(selectedDate, +1))}
      </ReactSwipe>
    </div>
  );
};

export default Calendar;

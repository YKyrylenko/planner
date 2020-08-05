import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";
import { setMonth } from "../../actions/calendarActions";
import { addMonths, getDaysInMonth } from "date-fns";
import { useDispatch } from "react-redux";

import "./calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(setMonth(months[selectedDate.getMonth()]));
  });

  const getDay = (date) => {
    let day = date.getDay();

    if (day === 0) {
      day = 7;
    }

    return day;
  };

  const getAmountDaysOfMonth = (date) => {
    return getDaysInMonth(date);
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
      days.push(<div className="day another-month-day">{i}</div>);
    }

    return days;
  };
  const currentMonthDays = (date = selectedDate) => {
    const days = [];
    const amountDaysInMonth = getAmountDaysOfMonth(date);
    const currentDay = date.getDate();

    for (let i = 1; i <= amountDaysInMonth; i++) {
      const link = `/tasks/${date.getFullYear()}/${date.getMonth() + 1}/${i}`;
      days.push(
        <div className={i === currentDay ? "day current-day" : "day"}>
          <Link to={link}>{i}</Link>
        </div>
      );
    }
    return days;
  };

  const nextMonthDays = (amountOfDays) => {
    const days = [];
    for (let i = 1; i <= 42 - amountOfDays; i++) {
      days.push(<div className="day another-month-day">{i}</div>);
    }
    return days;
  };

  const renderDays = (date = selectedDate) => {
    const prevMonthDays = previousMonthDays(addMonths(date, -1));
    const days = [...prevMonthDays, ...currentMonthDays()];
    days.push(...nextMonthDays(days.length));
    return <div className="calendar-body">{days}</div>;
  };

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
        {renderDays()}
        {renderDays(addMonths(selectedDate, +1))}
      </ReactSwipe>
    </div>
  );
};

export default Calendar;

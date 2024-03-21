"use client";

import React, { useState, useMemo } from "react";
import { BsCalendar2Heart } from "react-icons/bs";
import { PiHeartStraightFill } from "react-icons/pi";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthsOfYear = [
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

interface DatePickerProps {
  placeholder?: string;
  onDateChange?: (selectedDate: Date) => void;
}

function DatePicker({ placeholder, onDateChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(false);
    if (onDateChange) {
      onDateChange(date);
    }
  };
  const toggleDatePicker = () => setIsOpen(!isOpen);

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="flex justify-center items-center h-8">
        {day}
      </div>
    ));
  };

  const [displayYear, setDisplayYear] = useState(currentYear);
  const [displayMonth, setDisplayMonth] = useState(currentMonth);

  const goToPreviousMonth = () => {
    setDisplayMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setDisplayYear((prevYear) =>
      displayMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const goToNextMonth = () => {
    setDisplayMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setDisplayYear((prevYear) =>
      displayMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const daysInCurrentMonth = useMemo(
    () => getDaysInMonth(displayYear, displayMonth),
    [displayYear, displayMonth]
  );
  const firstDayOfMonth = useMemo(
    () => new Date(displayYear, displayMonth, 1).getDay(),
    [displayYear, displayMonth]
  );

  const renderBlankDays = () => {
    const blankDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blankDays.push(<div key={`blank-${i}`} className="h-8 w-8"></div>);
    }
    return blankDays;
  };

  const renderDays = () => {
    const days = [];
    days.push(...renderBlankDays());

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const isSelectedDate =
        selectedDate.toDateString() ===
        new Date(displayYear, displayMonth, i).toDateString();

      days.push(
        <button
          key={i}
          className={`flex justify-center items-center h-8 w-8 rounded-full font-Quicksand ${
            isSelectedDate ? "text-red-500" : "text-gray-700 hover:bg-[#ffd0d0]"
          }`}
          onClick={() => {
            setSelectedDate(new Date(displayYear, displayMonth, i));
            setIsOpen(false);
          }}
        >
          {isSelectedDate ? <PiHeartStraightFill /> : i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="relative inline-block">
      <input
        type="text"
        className="form-input font-medium rounded-md border px-4 py-2 w-full bg-transparent font-Quicksand text-md focus:border-primary-purple focus-ring:border-primary-purple focus-ring:ring-primary-purple focus-ring:2"
        value={selectedDate.toDateString()}
        placeholder={placeholder}
        readOnly
      />

      <button
        onClick={toggleDatePicker}
        className="absolute right-0 top-0 px-4 py-2"
      >
        <div className="items-center pt-1">
          <BsCalendar2Heart />
        </div>
      </button>
      {isOpen && (
        <div className="absolute bg-[#ffe4e4] border mt-1 p-2 rounded-md shadow-lg z-10 w-64 font-Quicksand font-medium">
          <div className="bg-[#ffd0d0] rounded-lg p-2">
            <div className="flex justify-between items-center mb-2">
              <button onClick={goToPreviousMonth} aria-label="Previous Month">
                <TiArrowBack />
              </button>
              <span>
                {monthsOfYear[displayMonth]} {displayYear}
              </span>
              <button onClick={goToNextMonth} aria-label="Next Month">
                <TiArrowForward />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {renderDaysOfWeek()}
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;

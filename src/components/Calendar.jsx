import React, { useState } from 'react';
import '../styles/Calendar.css';



const Calendar = ({ onDateSelect, setDate }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const [notEmptyDays, setNotEmptyDays] = useState([]);

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateClick = (day) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        setDate(newDate);
        if (onDateSelect) {
            onDateSelect(newDate);
        }
    };

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        // Корректировка для понедельника как первого дня недели
        const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        const days = [];

        // Пустые клетки в начале календаря
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Дни месяца
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            const isToday = new Date().getDate() === day &&
                new Date().getMonth() === month &&
                new Date().getFullYear() === year;

            days.push(
                <div
                    key={`day-${day}`}
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };
    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            <div className="calendar-weekdays">
                {daysOfWeek.map(day => (
                    <div key={day} className="calendar-weekday">{day}</div>
                ))}
            </div>

            <div className="calendar-days">
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;


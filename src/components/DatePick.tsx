import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePick.css";



export default function DatePick(prop: any) {

    const [from, setFrom] = useState("From");
    const [to, setTo] = useState("To");



    const onSelectFrom = (dt: any) => {
        setFrom(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
        prop.setStartDate(dt);
    };

    const onSelectTo = (dt: any) => {
        setTo(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
        prop.setEndDate(dt);
    }

    const reset = () => {
        setFrom("From");
        setTo("To");
        prop.setStartDate(null);
        prop.setEndDate(null);
    }


    return (
        <div className="date-main">
            <label htmlFor='startDate'>Date filter:</label>

            <DatePicker dateFormat="MMM d, YYYY" id='startDate' placeholderText={from} onSelect={(dt) => onSelectFrom(dt)} onChange={(dt) => prop.setStartDate(dt)} showIcon icon={<CiCalendar />} calendarIconClassName={(from === "From" && to !== "To") ? 'calicon  redBack' : 'calicon'} calendarClassName='calendar' openToDate={prop.startDate} scrollableYearDropdown showYearDropdown yearDropdownItemNumber={15} />

            <DatePicker dateFormat="MMM d, YYYY" placeholderText={to} onSelect={(dt) => onSelectTo(dt)} onChange={(dt) => prop.setEndDate(dt)} minDate={prop.startDate ? prop.startDate : ""} showIcon icon={<CiCalendar />} calendarIconClassName={(to === "To" && from !== "From") ? 'calicon  redBack' : 'calicon'} calendarClassName='calendar' openToDate={prop.endDate} scrollableYearDropdown showYearDropdown yearDropdownItemNumber={15} />

            <button onClick={reset}>Reset Date</button>


        </div>
    );
}

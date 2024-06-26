import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePick.css";



export default React.memo(function DatePick(prop: any) {

    const [from, setFrom] = useState("From");
    const [to, setTo] = useState("To");


    // A handler to set the value of constants 'from' and 'startDate' as the 'From' date is selected.
    const onSelectFrom = (dt: any) => {
        setFrom(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
        prop.setStartDate(dt);
    };

    // A handler to set the value of constants 'To' and 'endDate' as the 'To' date is selected.
    const onSelectTo = (dt: any) => {
        setTo(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
        prop.setEndDate(dt);
    };

    // Resets date input fields.
    const reset = () => {
        setFrom("From");
        setTo("To");
        prop.setStartDate(null);
        prop.setEndDate(null);
    };


    return (
        <div className="date-main">
            <label htmlFor='startDate'>Date filter:</label>


            {/* 'From' date input field */}
            <DatePicker dateFormat="MMM d, YYYY" id='startDate' placeholderText={from} onSelect={(dt) => onSelectFrom(dt)} onChange={(dt) => prop.setStartDate(dt)} showIcon icon={<CiCalendar />} calendarIconClassName={(from === "From" && to !== "To") ? 'calicon  redBack' : 'calicon'} calendarClassName='calendar' openToDate={prop.startDate} scrollableYearDropdown showYearDropdown yearDropdownItemNumber={15} />

            {/* 'To' date input field */}
            <DatePicker dateFormat="MMM d, YYYY" placeholderText={to} onSelect={(dt) => onSelectTo(dt)} onChange={(dt) => prop.setEndDate(dt)} minDate={prop.startDate ? prop.startDate : ""} showIcon icon={<CiCalendar />} calendarIconClassName={(to === "To" && from !== "From") ? 'calicon  redBack' : 'calicon'} calendarClassName='calendar' openToDate={prop.endDate} scrollableYearDropdown showYearDropdown yearDropdownItemNumber={15} />

            {/* Date reset button */}
            <button onClick={reset}>Reset Date</button>


        </div>
    );
});

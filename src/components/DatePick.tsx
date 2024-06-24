import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { CiCalendar } from "react-icons/ci";
import { es } from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import "./DatePick.css";

registerLocale("es", es);

export default function DatePick() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [from, setFrom] = useState("From");
    const [to, setTo] = useState("To");

    console.log(startDate?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), endDate?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));

    const onSelectFrom = (dt: any) => {
        setFrom(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
    };

    const onSelectTo = (dt: any) => {
        setTo(dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
    }

    const reset = () => {
        setFrom("From");
        setTo("To");
        setStartDate(null);
        setEndDate(null);
    }

    return (
        <div className="date-main">


            <DatePicker dateFormat="MMM d, YYYY" placeholderText={from} onSelect={(dt) => onSelectFrom(dt)} onChange={(dt) => setStartDate(dt)} maxDate={new Date()} showIcon icon={<CiCalendar />} calendarIconClassName='calicon' calendarClassName='calendar' />

            <DatePicker dateFormat="MMM d, YYYY" placeholderText={to} onSelect={(dt) => onSelectTo(dt)} onChange={(dt) => setEndDate(dt)} maxDate={new Date()} showIcon icon={<CiCalendar />} calendarIconClassName='calicon' calendarClassName='calendar' />

            <button onClick={reset}>Reset Date</button>


        </div>
    );
}

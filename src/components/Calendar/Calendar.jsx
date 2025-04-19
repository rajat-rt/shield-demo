import React, { useState } from "react";
import { differenceInCalendarDays, subDays } from "date-fns";
import { Calendar as ReactCalendar } from "react-calendar";
import "./Calendar.css"
import "react-calendar/dist/Calendar.css";

import Tooltip from "../Tooltip/Tooltip"; 

import { 
    messages,
    MAX_RANGE_DAYS,
    timeZones
} from '../../constants';

import { formatWithTimeZone, formatWithTimeZoneDateOnly } from '../../utils';


const Calendar = ({ range, setRange }) => {
    const [timezone, setTimezone] = useState("UTC");
    const [tooltip, setTooltip] = useState("");
    const minDate = subDays(new Date(), 120);

    const handleDateChange = (rangeValue) => {
        const [start, end] = rangeValue;

        if (start && end) {
            const daysDiff = differenceInCalendarDays(end, start) + 1;

            if (daysDiff > MAX_RANGE_DAYS) {
                setTooltip(`You can only select a maximum of ${MAX_RANGE_DAYS} days.`);
                setRange([null, null]); // Reset range if the selection exceeds max days
                return;
            } else {
                setTooltip(""); // Clear the tooltip if the range is valid
                setRange([start, end]);
            }
        } else {
            setRange(rangeValue);
        }
    };

    const tileDisabled = ({ date }) => {
        const formatted = formatWithTimeZoneDateOnly(date, timezone);
        return !!messages[formatted]?.disabled;
    };

    const tileContent = ({ date }) => {
        
        const formatted = formatWithTimeZoneDateOnly(date, timezone);
        const messageForDate = messages[formatted];
 
        if (messageForDate?.message) {
          return (
            <Tooltip message={messageForDate.message}>
              <span role="img" aria-label="event">📌</span>
            </Tooltip>
          );
        }
        return null;
    };
      

    return (
        <div className="calendar-wrap">
            <div className="calendar-wrapper">
                <span className="calendar-wrapper_span">
                    <label htmlFor="timeZoneId">Select Time Zone: </label>
                    <select
                        id="timeZoneId"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="mb-4 border p-2 rounded"
                    >
                    {timeZones.map(({label}, index) => (<option key={index} value={label}>{label}</option>))}
                    </select>
                </span>
                <ReactCalendar
                    onChange={handleDateChange}
                    value={range}
                    selectRange={true}
                    minDate={minDate}
                    tileDisabled={tileDisabled}
                    tileContent={tileContent}
                    className={tooltip ? 'calendar-error' : ''}
                />
            </div>
        
            { tooltip && (<div className="text-red-500 mt-2"> ⚠️ {tooltip}</div>)}
        
            <div className="range-div">
                {range[0] && ( <div><strong>Start:</strong> {formatWithTimeZone(range[0], timezone)}</div> )}
                {range[1] && ( <div><strong>End:</strong> {formatWithTimeZone(range[1], timezone)}</div> )}
            </div>
        </div>
    );
};

export default Calendar;

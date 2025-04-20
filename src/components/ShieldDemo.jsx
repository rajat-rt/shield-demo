import React from 'react'
import { Suspense, useState} from 'react'
import { subDays } from "date-fns";
import { formatWithTimeZone } from '../utils'

import Calendar from './Calendar/Calendar'
import Spinner from './Spinner/Spinner';

import Data from './Data';
import Modal from './Modal/Modal';

const todaysDate = Date.now() ;
const defaultRange = [subDays(todaysDate, 7), todaysDate];


const ShieldDemo = () => {

    const [timezone, setTimezone] = useState("UTC");
    const [range, setRange] = useState(defaultRange);
    const [confirmedRange, setConfirmedRange] = useState(defaultRange);
    const [toggleCalendar, setToggleCalendar] = useState(false);

    const fetchDataHandler = () => {
        setConfirmedRange(range);
        setToggleCalendar(false);
    }
    
    return (
        <>
            <div className='calendar-span' onClick={() => setToggleCalendar(true)}>{formatWithTimeZone(range[0], timezone)} - {formatWithTimeZone(range[1], timezone)}</div>
            {toggleCalendar && 
                <Modal onClose={() => setToggleCalendar(false)}>
                    <Calendar range={range} setRange={setRange} timezone={timezone} setTimezone={setTimezone}/>
                    <button onClick={() => setToggleCalendar(false)}>Cancel</button>
                    <button className="fetchData-btn" onClick={fetchDataHandler}>Go</button>
                </Modal>
            }
            <Suspense fallback={<Spinner/>}>
                <Data range={confirmedRange}/>
            </Suspense>
        </>
    )
}

export default ShieldDemo;

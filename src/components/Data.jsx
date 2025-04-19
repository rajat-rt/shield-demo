import React, { use, useMemo }  from 'react'
import { dummyURL, rowsHeader } from '../constants'
import Table from './Table/Table';

const fetchData = async () => {
    const res = await fetch(dummyURL);
    return await res.json();
};

const dataPromise = fetchData();

const Data = ({ range }) => {
    
    const data = use(dataPromise);
    const rows = data.data;

    const rowsWithRange = useMemo(() => {
        if(range[0] == null){
            return rows;
        }
        return rows.filter((row) => {
            const rowDate = new Date(row.date);
            return (rowDate >= range[0] && rowDate <= range[1]);
        })
    }, [range]);

    return (
        <div>
            <Table 
                rows={rowsWithRange}
                rowsHeader={rowsHeader}
            />
        </div>
    )
}

export default Data

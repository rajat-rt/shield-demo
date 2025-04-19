import React, { useMemo, useState } from 'react';
import "./Table.css";

const Table = ({ rows, rowsHeader }) => {

  const [sortBy, setSortBy] = useState(null);
  const [direction, setDirection] = useState('asc');
  const [searchItem, setSearchItem] = useState("");

  const getArrow = (key) => {
    if (sortBy === key) return direction === 'asc' ? ' ▲' : ' ▼';
    return '';
  };

  const handleSort = (key, sorting) => {
    if(!sorting) {
      return ;
    }
    if(key == sortBy) {
      setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(key);
      setDirection('asc');
    }
  };

  const filteredRows = useMemo(() => {
    if(!searchItem.trim()) return rows;
    return rows.filter((row) => {
      return Object.values(row).some((val) => String(val).toLowerCase().includes(searchItem.toLowerCase()))
    })
  }, [searchItem, rows]);

  const sortedRows = useMemo(() => {

    if(!sortBy) return filteredRows;

    return [...filteredRows].sort((a,b) => {
      if (!sortBy) return ;
  
      const valA = a[sortBy];
      const valB = b[sortBy];
  
      if(typeof valA === 'number') {
        return direction === 'asc' ? (valA - valB) : (valB - valA)
      }
  
      return direction === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    })
  });
  
  

  return (
    <div className='table-wrapper'>
      
      <table border="1" cellPadding="8">
        <thead>
          <tr >
            <th colSpan={rowsHeader.length-1}>
              <input placeholder="Search..." className="search-input" type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
            </th>
            <th><div>Total Rows: {sortedRows.length}</div></th>
          </tr>
          <tr>
            {rowsHeader.map(({ key, label, sorting } ,index) => {
              return (<th key={index} onClick={() => handleSort(key, sorting)}>{label}{getArrow(key)}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {sortedRows.length == 0 && <tr><td colSpan={rowsHeader.length} className='table-data-not-found'>Data  not found</td></tr>}
          {sortedRows.map((row) => {
            return (
              <tr key={row.id}>
                {rowsHeader.map(({ key }) => (<td>{row[key]}</td>))}
              </tr>)
          })}
        </tbody>
      </table>
      </div>
    );
}

export default Table

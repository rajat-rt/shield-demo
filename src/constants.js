export const messages = {
    "2025-04-20": { message: "Holiday", disabled: true },
    "2025-04-22": { message: "Special Event", disabled: false }
};

export const timeZones = [
    { "label": "Asia/Kolkata", "offset": "+0530" },
    { "label": "Asia/Dubai", "offset": "+0400" },
    { "label": "Europe/Moscow", "offset": "+0300" },
    { "label": "UTC", "offset": "+0000" },
    { "label": "America/New_York", "offset": "-0500" },
    { "label": "Europe/London", "offset": "+0000" },
    { "label": "Asia/Tokyo", "offset": "+0900" },
    { "label": "Australia/Sydney", "offset": "+1000" }
];

export const rowsHeader = [{
    key: 'id',
    label: 'ID',
    sorting: true 
}, {
    key: 'name',
    label: 'Name',
    sorting: true 
}, {
    key: 'amount',
    label: 'Amount',
    sorting: true 
}, {
    key: 'date',
    label: 'Date',
    sorting: true 
}, {
    key: 'status',
    label: 'Status',
    sorting: true 
}, {
    key: 'timezone', 
    label: 'Time Zone',
    sorting: true 
}];

export const MAX_RANGE_DAYS = 10;
export const dummyURL = 'https://mocki.io/v1/a714d4d1-cc43-4e89-b22d-816b1ff5ec17';
export const formatWithTimeZone = (date, timeZone) => {
  if (!date) return '';
  const options = {
    timeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};

export const formatWithTimeZoneDateOnly = (date, timeZone) => {
  if (!date) return '';
  const zonedDate = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
  return zonedDate; // returns like "2025-04-18"
};
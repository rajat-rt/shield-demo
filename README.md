# 📆 Calendar & Table Demo with Timezone, Range Filter, and Suspense API

A demo React application that features:

- 📅 Calendar with timezone support and tooltips
- ✅ Validation for max date range
- 💬 Special tooltips on holidays/events
- 📊 Table that displays fetched data based on date range
- 🔍 Search and Sort on table
- ⏳ Suspense-based data fetching with Error Boundary
- 🚀 Mock API integration

---

## ✨ Features

- Select a date range (max 10 days)
- Choose timezone to format dates
- Tooltips on special dates (like holidays)
- Fetch and filter data based on selected date range
- Table with:
  - Sortable columns
  - Search input
  - Sticky headers
- Uses:
  - React `use()` with Suspense
  - Error boundaries with retry button
  - Smooth CSS transitions

---

## 📦 Tech Stack

- React 18+
- `react-calendar`
- `date-fns`
- `react-error-boundary`
- Custom mock API using [mocki.io](https://mocki.io) or [mockoon.com](https://mockoon.com)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/calendar-table-demo.git
cd calendar-table-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

## 🧪 Mock API Setup

You can use a service like mocki.io to simulate an API that returns data for a given date range.

Sample payload:

[{
"id": 1,
"name": "Paula Hughes",
"date": "2024-12-21 10:55:00 +0530",
"timezone": "Asia/Kolkata",
"amount": 868.99,
"status": "Completed"
},
{
"id": 2,
"name": "Laura King",
"date": "2024-12-21 23:33:00 -0500",
"timezone": "America/New_York",
"amount": 424.64,
"status": "Completed"
}]

## 🗃 Directory Structure

src/
├── components/
│ ├── Calendar/
│ ├── Table/
│ ├── Spinner/
│ └── ErrorFallback.jsx
├── utils/
│ └── index.js
├── constants.js
├── App.jsx

## 🛠 Customization

-> Update constants.js with your desired timezones and mock API URL

-> Modify Calendar or Table components to enhance styles or logic

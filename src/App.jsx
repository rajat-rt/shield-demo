
import { Suspense, useState} from 'react'
import './App.css'

import { subDays } from "date-fns";
import { ErrorBoundary } from 'react-error-boundary';

import Calendar from './components/Calendar/Calendar'
import Data from './components/Data';
import Spinner from './components/Spinner/Spinner';
import ErrorFallback from './components/ErrorFallback';

const todaysDate = Date.now() ;
const defaultRange = [subDays(todaysDate, 7), todaysDate];

const App = () => {

  const [range, setRange] = useState(defaultRange);
  const [confirmedRange, setConfirmedRange] = useState(defaultRange);
  const [reset, setReset] = useState(0);
  const fetchDataHandler = () => setConfirmedRange(range);
  const resetDataHandler = () => setReset(prev => prev+1);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={resetDataHandler}
      resetKeys={[reset]}
      >
      <Calendar range={range} setRange={setRange}/>
      <button className="fetchData-btn" onClick={fetchDataHandler}>Fetch Data</button>
      <Suspense fallback={<Spinner/>}>
        <Data range={confirmedRange}/>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

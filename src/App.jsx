import './App.css'
import { useState } from 'react';
import ErrorFallback from './components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

import ShieldDemo from './components/ShieldDemo'

const App = () => {
  
  const [reset, setReset] = useState(0);
  const resetDataHandler = () => setReset(prev => prev+1);
  
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={resetDataHandler}
      resetKeys={[reset]}>
      <ShieldDemo/>
    </ErrorBoundary>
  )
}

export default App

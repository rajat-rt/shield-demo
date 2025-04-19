import React from 'react'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert" style={StyledErrorWrapper}>
            <p>Something went wrong!!!</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
};

const StyledErrorWrapper = {
    color: 'red',
    padding: '1rem'
};

export default ErrorFallback

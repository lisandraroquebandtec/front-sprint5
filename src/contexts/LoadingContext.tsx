import React from 'react';

interface LoadingContextValue{
    isLoading: Function;
    addRequest: Function;
    removeRequest: Function;
}

const LoadingContext = React.createContext<LoadingContextValue>(null!);

export default LoadingContext;

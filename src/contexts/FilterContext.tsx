import React from 'react';

interface FilterContextValue{
    filter: any;
    setFilter: Function;
    typeSelected: string;
    setTypeSelected: Function;
}

const FilterContext = React.createContext<FilterContextValue>(null!);

export default FilterContext;
import React from 'react';

interface CategoriesContextValue {
    categories: any;
}

const CategoriesContext = React.createContext<CategoriesContextValue>(null!);


export default CategoriesContext;

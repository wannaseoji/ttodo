import React from 'react';
import CategoryItem from './CategoryItem'

function CategoryNameList({ categories = [] }) {
    return (categories.map((category, i) => {
        return (<CategoryItem key={i} category={category} />);
    }))
}

export default CategoryNameList;
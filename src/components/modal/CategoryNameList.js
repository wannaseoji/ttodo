import React from 'react';
import CategoryItem from './CategoryItem'

function CategoryNameList({ categories = [], modifyCategoryHandler = f => f }) {
    return (categories.map((category, i) => {
        return (<CategoryItem key={i} category={category} modifyCategoryHandler={modifyCategoryHandler} />);
    }))
}

export default CategoryNameList;
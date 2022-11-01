/**
 * proj_path: ch06/proj/color-org
 * ./src/components/StarRating.js
 */

// import React from "react";
import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = function ({ totalStars = 5 }) {
    // return [
    //     <FaStar color="red" />,
    //     <FaStar color="red" />,
    //     <FaStar color="red" />,
    //     <FaStar color="grey" />,
    //     <FaStar color="grey" />
    // ];

    // return createArray(totalStars).map( (n, i) => <Star key={i} selected={false} />);

    const [selectedStars, setSelectedStars] = useState(3);
    console.log(selectedStars)
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}

export default StarRating;

import React from 'react';

export default function Movie(properties) {

    let starIndex = 0;

    function addStars(nbr) {
        let stars = [];
        for (var i = 0; i < parseInt(nbr); i++) {
            stars.push(<img src="star.png" alt="Star" key={starIndex} />);
            starIndex++;
        }
        return stars
    }

    return (
        <li className="list-group-item mt-4">
            <span className="align-middle">
                {properties.item.title}
            </span>
            <span className="float-end">
                {addStars(properties.item.grade).map(star => star)}
                <img src="delete-img.png" alt="Delete movie" style={{cursor: "pointer"}} className="float-end" onClick={() => properties.deleteMovie(properties.item.title)} />
            </span>
        </li>
    )
}

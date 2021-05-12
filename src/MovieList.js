import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovie] = useState([
        {
            title: "Herkules",
            grade: "5"
        }
    ]);

    //skapar referenser 
    const titleRef = useRef();
    const gradeRef = useRef();


    //lägga till film - funkar inte 
    function addMovie() {

        //validera med if-satser
        if (titleRef.current.value === "") {
            alert("Titel saknas");
        }
        else if (gradeRef.current.value === "0") {
            alert("Betyg saknas");
        }

        else {
            setMovie([...movies, {
                title: titleRef.current.value[0].toUpperCase() + titleRef.current.value.substring(1),
                grade: gradeRef.current.value,
            }])

            //funktion som gör betyg från nummer till en stjärna

            gradeRef.current.value = "";
            titleRef.current.value = "";
        }
    }

    //ta bort film 
    function deleteMovie(title) {
        setMovie(movies.filter((item) => item.title !== title));
    }

    //sortera i alfabetiskordning
    function compareTitle(a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        }
        return 0;
    }

    //skriver ut den sorterade listan 
    function orderByAlpha() {
        let n = movies.sort(compareTitle);
        setMovie([...n]);
    }

    //sortera efter betyg 
    function compareGrade(a, b) {
        if (a.grade > b.grade) {
            return -1;
        }
        if (a.grade < b.grade) {
            return 1;
        }
        return 0;
    }

    //skriver ut den sorterade listan
    function orderByGrade() {
        let m = movies.sort(compareGrade);
        setMovie([...m]);
    }

    return (
        <div>
            <label><strong>Title:</strong></label>
            <input type="text" className="form-control titleInput mb-3" ref={titleRef} placeholder="Title här..." />

            <label><strong>Betyg:</strong></label>
            <select className="form-control gradeInput" ref={gradeRef}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="button" className="btn btn-success mt-3" value="Spara film" onClick={addMovie} />

            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.title} item={movie} deleteMovie={deleteMovie} />)}
            </ul>

            <input type="button" className="btn btn-primary mt-3 me-3" value="Alfabetisk ordning" onClick={() => orderByAlpha()} />
            <input type="button" className="btn btn-primary mt-3 me-3" value="Betygsordning" onClick={() => orderByGrade()} />

        </div>
    )
}


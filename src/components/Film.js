import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Film = (props) => {
    const [film, setFilm] = useState([]);
    const {gFilm, itemId, isOpen} = props;   

    useEffect(() => {   
        axios.get(gFilm)
            .then((response) => {
                setFilm(response.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, [isOpen]);
     
    return (
        <AccordionItem> 
            <AccordionHeader targetId={itemId.toString()}> {film ? film.title: "Undifned"} </AccordionHeader>
            <AccordionBody accordionId={itemId.toString()} className='accordion-body'>
                <p className='filmAciklama'> {film ? film.opening_crawl: "Undifned"} </p>
                <p className='filmYonetmen'>
                    Directed by: {film ? film.director: "Undifned"}  <br />
                    Produced by: {film ? film.producer: "Undifned"} <br />
                    Release Date: {film ? film.release_date: "Undifned"} 
                </p>
            </AccordionBody>
        </AccordionItem>
    );
};

export default Film;
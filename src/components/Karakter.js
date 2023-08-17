import React, {useEffect, useState} from 'react'; 
import Film from './Film';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Karakter = (props) => {
    const {karakter, itemId, filmler} = props;
    //const [filmler, setFilmler] = useState();
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }; 
 
    let filmId = 0;

    const Gender = styled.p``;
    const Height = styled.p``;
    const Mass = styled.p``;
    const BirthYear = styled.p``;
    const EyeColor = styled.p``;
    const HairColor = styled.p``;
    const SkinColor = styled.p``; 

    return (
        <AccordionItem>
            <AccordionHeader targetId={itemId.toString()}>{karakter.name}</AccordionHeader>
            <AccordionBody accordionId={itemId.toString()} className='accordion-body'>
                <Gender>Gender: {karakter.gender}</Gender> 
                <Height>Height: {karakter.height}</Height> 
                <Mass>Mass: {karakter.mass}</Mass> 
                <BirthYear>Birth Year: {karakter.birth_year}</BirthYear> 
                <EyeColor>Eye Color: {karakter.eye_color}</EyeColor> 
                <HairColor>Hair Color: {karakter.hair_color}</HairColor> 
                <SkinColor>Skin Color: {karakter.skin_color}</SkinColor>
                { filmler &&
                    <Accordion open={open} toggle={toggle}>
                        { 
                            filmler.map((item) => {
                                filmId++; 
                                return (<Film gFilm={item} itemId={filmId}/>) 
                            })
                        }
                    </Accordion>
                }
            </AccordionBody>
        </AccordionItem>
    );
};

export default Karakter; 
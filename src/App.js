import React, {useState, useEffect, StrictMode} from 'react';
import axios from 'axios';
import Karakter from './components/Karakter';
import PaginationC from './components/PaginationC';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'; 

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterler, setKarakterler] = useState([]); 
  const [open, setOpen] = useState('1');
  const [sayfaURL, setSayfaURL] = useState("https://swapi.dev/api/people/?page=1");
  
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  }; 

  const sayfaCek = (gelenSayfa) => {
    setSayfaURL("https://swapi.dev/api/people/?page="+gelenSayfa);
  } 

  let itemId = 0;

  useEffect(()=> {
    axios.get(sayfaURL)
    .then((response) => {
      setKarakterler(response.data.results); 
    })
    .catch((err) => {
      console.log(err);
    })
  }, [sayfaURL]); 
  
  return (
    <div className='App'> 
      <Accordion open={open} toggle={toggle}> 
        {
          Array.isArray(karakterler) ?
            karakterler.map((item) => {
              itemId++;
              return (<Karakter karakter={item} itemId={itemId} />);
            })
            : null
        }  
      </Accordion>
      <PaginationC sayfaCek={sayfaCek}/>
    </div>
  );
}

export default App;

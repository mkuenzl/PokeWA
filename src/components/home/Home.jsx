import React from 'react'
import './Home.css'
import Card from '../card/Card.jsx'
import { useState } from 'react';
import { useEffect } from 'react'


function getRandomId(range){
  return Math.floor(Math.random() * range);
}

const Home = () => {

  const pokemonCount = 151;

  const initialPokemon = [getRandomId(pokemonCount), getRandomId(pokemonCount)];
  const [ids, setIds] = useState(initialPokemon)

  const handleClick = () => {
    setIds([getRandomId(pokemonCount), getRandomId(pokemonCount)]);
  }

  return (
    <div className='container wrapper__container'>
        <div className="container wrapper__card">
          <Card id={ids[0]}/>
          <Card id={ids[1]}/>
        </div>
        <button id='update-pokemon' onClick={handleClick}>update</button>
    </div>
  )
}

export default Home
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Card.css'

const Card = (props) => {

  const id = props.id;
  const[pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  };

  useEffect(() => {
    fetchPokemon()
      .then((result) => setPokemon(result));
  }, [id]);

  return (
    <div className='pokemon__data'>
      <img src={require(`pokemon-sprites/sprites/pokemon/${id}.png`)} width="100"/>
      <div>{pokemon.name}</div>
      <div>The id is : {id}</div>
    </div>
  )
}

export default Card
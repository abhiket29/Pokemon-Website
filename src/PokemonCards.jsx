/* eslint-disable react/prop-types */
// import React from 'react'

function PokemonCards({ pokemonData }) {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemoninfo">
          <span>Height:</span> {pokemonData.height}
        </p>
        <p className="pokemoninfo">
          <span>Weight:</span> {pokemonData.weight}
        </p>
        <p className="pokemoninfo">
          <span>Speed:</span> {pokemonData.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemoninfo">
          <p>{pokemonData.base_experience}</p>
          <span>Experience:</span>
        </div>
        <div className="pokemoninfo">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemoninfo">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span>Abilities:</span>
        </div>
      </div>
    </li>
  );
}

export default PokemonCards;

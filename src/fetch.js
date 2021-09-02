const btn = document.querySelector('[data-js="btn"]');
const pokemonOne = document.querySelector('[data-js="pokemonOne"]');
const pokemonTwo = document.querySelector('[data-js="pokemonTwo"]');


btn.addEventListener("click",(e)=>{
    e.preventDefault();

   console.log(fetchFunction(pokemonOne.value,pokemonTwo.value))
    
})

async function fetchFunction(pokemonOne,pokemonTwo){
   const first = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonOne}`)
   const firstResp = await first.json();

   const second = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTwo}`)
   const secondResp = await second.json();

   console.log(firstResp.name +` `+ secondResp.name);
}


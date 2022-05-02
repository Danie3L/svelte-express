<script>
import Axios from 'axios';

import Country from './Country.svelte';
   let countries =[];
const getCountries = () => {
  Axios.get('http://localhost:8080/countries/getCountries').then((res) => {
    console.log(res.data)
    countries = res.data
    console.log(countries)
  })
}
</script>

<div>
  <button on:click={getCountries}>display countries</button>
  {#if countries.length > 0}
  <article>
    {#each countries as {id,capital_id,name,president,population,_id}}
      <Country {id} {capital_id} {name} {president} {population} {_id}/>
    {/each}
</article>
  {/if}
</div>

<style>

</style>
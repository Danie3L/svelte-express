<script>
  import Axios from 'axios';
  
  import Capital from './Capital.svelte';
     let capitals =[];
  const getCapitals = () => {
    Axios.get('http://localhost:8080/capitals/getCapitals').then((res) => {
      console.log(res.data)
      capitals = res.data
      console.log(capitals)
    })
  }
  </script>
  
  <div>
    <button on:click={getCapitals}>display capitals</button>
    {#if capitals.length > 0}
    <article>
      {#each capitals as {id,name,_id}}
        <Capital {id} {name} {_id} />
      {/each}
  </article>
    {/if}
  </div>
  
  <style>
  
  </style>
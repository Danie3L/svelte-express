<script>
  import Axios from 'axios';
  import Dynasty from './Dynasty.svelte';
  
     let dynasties = [];
     let isOpen = false;
  const getCapitals = () => {
    if(dynasties.length===0) {
      Axios.get('http://localhost:8080/dynasties/getDynasties').then((res) => {
      console.log(res.data)
      dynasties = res.data
     
    })
    }
    isOpen=!isOpen;
  }
  </script>
  
  <div>
    <button on:click={getCapitals}>display dynasties</button>
    {#if dynasties.length > 0 && isOpen}
    <article>
      {#each dynasties as {id,name,_id}}
        <Dynasty {id} {name} {_id} />
      {/each}
  </article>
    {/if}
  </div>
  
  <style>
  
  </style>
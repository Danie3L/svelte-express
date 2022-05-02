<script>
  import Axios from 'axios';
  export let id,capital_id,name,population,president,_id;
  let isUpdated = false;
  let countryData = {
    nameValue: '',
    populationValue: '',
    presidentValue: ''
  }
  const deleteCountry = (id) => {
    Axios.delete(`http://localhost:8080/deleteCountry/${id}`).then(() => {
    console.log('ok')
  })
  }
  const updateCountry = (id) => {
   Axios.put('http://localhost:8080/updateCountry',{countryData,id})
   window.location.reload(true);
  }
  const showUpdateForm = () => {
    isUpdated = !isUpdated;
  }
</script>

<article>
  <small>id: {id}</small>
  <small>capital_id: {capital_id}</small>
  <h1>name: {name}</h1>
  <span>population: {population}</span>
  <span>president: {president}</span>
  {#if isUpdated}
    <form on:submit|preventDefault={() => updateCountry(_id)}>
      <input type="text" placeholder="name" bind:value={countryData.nameValue}>
      <input type="number" min="0" placeholder="population" bind:value={countryData.populationValue}>
      <input type="text" placeholder="president" bind:value={countryData.presidentValue}>
      <button>submit</button>
    </form>
  {/if}
  <button on:click={showUpdateForm}>show update form</button>
  <button on:click={() => deleteCountry(_id)}>delete</button>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin: 5px 0;
  }
  h1 {
    margin: 5px 0;
  }
  button {
    width: 100px;
    margin: 5px 0;
  }
</style>
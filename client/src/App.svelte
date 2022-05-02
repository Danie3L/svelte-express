<script>
  import Axios from 'axios';
  import Countries from './components/Countries.svelte';
  import Capitals from './components/Capitals.svelte';
  let data = [];
  const getData = () => {
    Axios.get('http://localhost:8080/getAll').then((res) => {
      data = res.data;
      data.forEach((el) => {
        console.log(el)
      })
    })
  }
const deleteHandler = (capitalID,countryID) => {
  console.log(capitalID,countryID)
  Axios.delete(`http://localhost:8080/deleteCapital/${capitalID}`).then(() => {
    console.log('ok')
  })
  Axios.delete(`http://localhost:8080/deleteCountry/${countryID}`).then(() => {
    console.log('ok')
  })
}
</script>

<main>
  <button on:click={getData}>get all</button>
 <Countries/>
 <Capitals/>
 {#if data.length>0}
 {#each data as obj }
    <div class='box'>
      <div>{obj.id}</div>
      <div>{obj.name}</div>
      <div>{obj.key[0].id}</div>
      <div>{obj.key[0].capital_id}</div>
      <div>{obj.key[0].name}</div>
      <div>{obj.key[0].population}</div>
      <div>{obj.key[0].president}</div>
      <button on:click={() => deleteHandler(obj._id,obj.key[0]._id)}>delete</button>
    </div>
 {/each}
 {/if}
   

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
.box {
  border: 2px solid black;
  margin: 5px;
}
  
</style>

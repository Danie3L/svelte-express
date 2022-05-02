<script>
  import Axios from 'axios';
  import AddRuler from './components/AddRuler.svelte';
  import Dynasties from './components/Dynasties.svelte';
  import Filter from './components/Filter.svelte';
  import Rulers from './components/Rulers.svelte';

  let data = [];
  let isOpen = false;
  const getData = () => {
  if(data.length === 0) {
    Axios.get('http://localhost:8080/getAll').then((res) => {
      data = res.data;
      console.log(data)
      data.forEach((el) => {
        console.log(el)
      })
    })
  }
  isOpen = !isOpen;
  }

</script>

<main>
  <button on:click={getData}>get all</button>
 <Dynasties/>
 {#if data.length>0 && isOpen}
 {#each data as obj }
  <Rulers id={obj.id} name={obj.name} data={obj.key}/>
  
 {/each}
 {/if}
   <Filter/>
  <AddRuler/>
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

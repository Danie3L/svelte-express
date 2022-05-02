<script>
  import Axios from 'axios';
const dynasties = [
  "Piastowie","Jagiellonowie","Wazowie"
];
let rulers = [];
let dynasty="Piastowie";
const filterHandler = () => {
  Axios.post('http://localhost:8080/postDynastyName',{name: dynasty})
}
const display = () => {
  Axios.get('http://localhost:8080/filteredDynasty').then((res) => {
    rulers = res.data;
    console.log(rulers);
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<div>
  <select bind:value={dynasty}>
    {#each dynasties as dynasty}
      <option value={dynasty}>
        {dynasty}
      </option>
    {/each}
  </select>
  <button on:click={filterHandler}>wyslij</button>
  <button on:click={display}>wyswietl</button>
  <article>
   {#if rulers.length>0}
   {#each rulers as ruler}
   <section>
     <h1>{ruler.name}</h1>
   </section>
   {/each}
   {/if}
  </article>
</div>

<style>
  button {
    cursor: pointer
  }
</style>
<script>
  import Axios from 'axios';
  let isOpen = false;
  const dynasties = [
  "Piastowie","Jagiellonowie","Wazowie"
];
let nameValue;
let dynasty="Piastowie";
  const showForm = () => {
    isOpen = !isOpen;
  }
  const submitHandler = () => {
    console.log(nameValue,dynasty)
    Axios.post('http://localhost:8080/postNewRuler',{nameValue,dynasty})
  }
</script>

<div>
  <button on:click={showForm}>add a new ruler</button>
 {#if isOpen}
 <form on:submit|preventDefault={submitHandler}>
  <select bind:value={dynasty}>
    {#each dynasties as dynasty}
      <option value={dynasty}>
        {dynasty}
      </option>
    {/each}
  </select>
  <input type="text" placeholder="name" bind:value={nameValue}>
  <button>add</button>
</form>
 {/if}
</div>

<style>
  button {
    cursor: pointer;
  }
</style>
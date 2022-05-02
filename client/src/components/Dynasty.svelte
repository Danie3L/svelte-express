<script>
  import Axios from "axios";
  export let id,name,_id;
</script>

<article>
  <small>id: {id}</small>
  <h1>name: {name}</h1>
  <!-- <button on:click={() => deleteCapital(_id)}>delete</button> -->
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
<script>
export let name,id;
import Axios from 'axios';
let textarea;
let nameValue=name;
let isUpdated = false;
const showUpdate = () => {
  textarea.disabled = false;
  isUpdated = !isUpdated;
  if(isUpdated) {
    console.log(nameValue);
  }
}
const updateHandler = (id) => {
  console.log(id)
  console.log(id,nameValue)
  Axios.put('http://localhost:8080/updateRuler',{nameValue,id}).then(() => {
    location.reload();
  })
};
const deleteHandler = (id) => {
  Axios.delete(`http://localhost:8080/deleteRuler/${id}`).then(() => {
    location.reload();
  })
}
</script>

<div class='box'>
  <textarea bind:this={textarea} bind:value={nameValue} disabled></textarea>
  {#if isUpdated}
  <button on:click={() => updateHandler(id)}>send</button>
  {/if}
  <button on:click={() => showUpdate()}>update</button>
  <button on:click={() => deleteHandler(id)}>delete</button>
</div>

<style>
 button {
    margin-left: 8px;
    cursor: pointer;
  }
  textarea {
     height: 30px;
     resize: none;
     display: flex;
  }
  .box {   
    border: 2px solid black;
    display: inline-flex;
    margin: 15px 10px;
    min-width: 290px;
    max-width: 500px;
  }
</style>

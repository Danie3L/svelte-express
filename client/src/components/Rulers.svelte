<script>
import Ruler from "./Ruler.svelte";
export let id,name,data;
console.log(data)
let textarea;
let isUpdated = false;
const updateHandler = () => {
  textarea.disabled = false;
  isUpdated = !isUpdated;
  console.log(true)
  console.log(textarea)
}
</script>

<div class="box">
 <div class="inf-box">
  <span>id: {id}</span>
  <span><strong>dynastia</strong>: {name}</span>
 
   <strong>Władcy:</strong>
 </div>
   {#each data as el}
   <Ruler name={el.name} id={el._id}/>
   {/each}
 </div>


<style>

  .box {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin: 10px;
  }
  .inf-box {
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
  }
</style>
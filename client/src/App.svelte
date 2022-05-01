<script>
  import Axios from 'axios';

  const getData = () => {
    Axios.get('http://localhost:8080/capitals').then((res) => {
      console.log(res.data);
    })
  }

</script>

<main>
 <button on:click={getData}>get</button>
</main>
//2pv3wiRwvYpEjOEV
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  
</style>

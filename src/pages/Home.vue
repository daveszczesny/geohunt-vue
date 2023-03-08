
<template>
    <div class="mainText">
        <center><h1 style="font-weight: 600; font-size:xx-large;">Welcome to<br>Geo-Hunt</h1></center>
    </div>
    <div class="button-container">
        <router-link  class="link" to="/create">Start</router-link>
        <router-link  class="link" to="/info">Info</router-link>
    </div>
</template>

<script>
</script>

<style>

html, body {
    height: 100%;
    overflow: hidden;
    background-color: #adc178;
    background: repeating-linear-gradient(0deg, #adc178 0, #adc178 20%, transparent 0, transparent 50%),repeating-linear-gradient(45deg, #A98467 0, #A98467 10%, transparent 0, transparent 50%);
    background-size: 3em 3em;
    background-color: #adc178;
    opacity: 1
}

.mainText {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0ead2;
  }

  /* Button Container */
  .button-container {  
    position: relative;
    height: 20%;
    top: 50vh;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .link {
    float: none;
    /* float the buttons to the left */
    margin-left: 20%;
    background-color: #A98467;
    /* matte grey */
    border: 1px solid black;
    /* off white */
    -webkit-text-fill-color: whitesmoke;
    padding: 0px 20px;
    /* add some padding */
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: x-large;
}

</style>
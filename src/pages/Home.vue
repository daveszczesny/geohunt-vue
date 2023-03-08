
<template>
    <div class="mainText">
        <h2 style="font-size: medium;">Welcome to</h2>
        <h1 style="font-weight: 600; font-size:xx-large;">Geo-Hunt</h1>
    </div>
    <div class="button-container">
        <router-link  class="link" to="/create">Start</router-link>
        <router-link class="link" to="/info">Info</router-link>
    </div>
</template>

<script>
</script>

<style>

html, body {
    height: 100%;
    overflow: hidden;
    background-color: #adc178;
}

/* Heading For the Home Page */
.mainText {
    position: absolute;
    top: 0%;
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
    border: 1px solid;
    /* off white */
    -webkit-text-fill-color: whitesmoke;
    padding: 0px 20px;
    /* add some padding */
    border-radius: 5px;
    cursor: pointer;
}

</style>
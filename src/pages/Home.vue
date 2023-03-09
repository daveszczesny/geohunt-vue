
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
}

.mainText {
    align-items: center;
    background-color: #f0ead2;
    display: flex;
    flex-direction: column;
    height: 15%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

/* Button Container */
.button-container {  
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 20%;
    left: 0;
    position: relative;
    top: 50vh;
    width: 100%;
}

.link {
    background-color: #A98467;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    float: none;
    font-size: x-large;
    margin-left: 20%;
    padding: 0 20px;
    text-decoration: none;
    -webkit-text-fill-color: whitesmoke;
}

</style>
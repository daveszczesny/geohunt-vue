
<template>
    <div class="mainText">
        <h1>Welcome to GeoHunt</h1>
    </div>
    <div class="button-container">
        <router-link  class="link" to="/create">Start</router-link>
        <router-link class="link" to="/info">Info</router-link>
    </div>


</template>

<script>
</script>

<style scoped>
.link {
    float: none;
    /* float the buttons to the left */

    margin-left: 20%;
    background-color: var(--vt-c-button-brown);
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
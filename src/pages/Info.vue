<template>
    <div class="titleDiv">
        <center>
            <h3 style="font-weight: 400; font-size: large;" >The team at DesperaBros present to you</h3>
            <h1 style="font-weight: 900; font-size: xx-large;">Geo-Hunt</h1>
        </center>
    </div>
    <div class="infoDiv">
        <ul>
        <li>Geohunt is a fun lobby based, hunting game, where the hunter uses real-time geolocation of the hunted to find them
        </li>
        <li>Geohunt uses the location of your device to enable geo-location. Your location after you leave the lobby is not
            stored / kept.</li>
        <li>Precise location must be enabled in order to play the game</li>
        </ul>
    </div>
    <div class="howToPlayDiv">
        <center>
            <h2 class="title2">How to play</h2>
        </center>
    </div>
    <div class="rulesDiv">
        <ul>
            <li>Click [start] on the home page</li>
            <li>Create or join a lobby</li>
            <li>Invite your friends via join lobby or quick share</li>
            <li>Let the host start the game and enjoy</li>
            <li>In the current development version, catching is trust based. So if you do get found by the hunter, be respectful
                and leave the lobby</li>
        </ul>
    </div>
    <div class="teamDiv">
        <center>
            <h2>Team DesperaBros</h2>   
        </center>
    </div>
    <div class="namesDiv">
        <ul>
            <li>&emsp;Brian - Frontend Developer </li>
            <li>&emsp;Dave - Backend Developer </li>
            <li>&emsp;Tomas- Frontend Developer </li>
        </ul>
    </div>
    <div class="leaveInfoPage" id="leaveInfo">
        <button @click="home()" class="leaveBtn">Play GeoHunt</button>
    </div>

</template>

<script>
export default{
 methods: {
       home() {
        this.$router.push('/')
       }
    }
}
   
</script>
<style scoped>

/* Brian's CSS */

/* NB!!! MAKE ALL THE POSITIONS IN MAIN.CSS */
body {
    height: 100%;
    overflow: scroll;
}
.titleDiv {
    background-color: #A98467;
    height: 15vh;
    left: 2%;
    position: absolute;
    top: 1%;
    width: 96%;
}
.infoDiv {
    background-color: cornsilk;
    height: 28vh;
    left: 2%;
    position: absolute;
    top: 18%;
    width: 96%; 
    height: fit-content;
}

</style>
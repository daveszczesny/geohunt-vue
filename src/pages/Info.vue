<template>
    <div class="wrapper">
        <h1 class="title">Geo Hunt</h1>
    </div>
    <br>
    <h2>The team at DesperaBros present to you, GeoHunt</h2><br />
    <p>Geohunt is a fun lobby based, hunting game, where the hunter uses real-time geolocation of the hunted to find them
    </p>
    <p>Geohunt uses the location of your device to enable geo-location. Your location after you leave the lobby is not
        stored / kept.</p>
    <p>Precise location must be enabled in order to play the game</p>
    <br />
    <div class="wrapper">
        <h2 class="title2">How to play</h2>
    </div><br>
    <ul>
        <li>Click [start] on the home page</li>
        <li>Create or join a lobby</li>

        <li>Invite your friends via join lobby or quick share</li>

        <li>Let the host start the game and enjoy</li>
        <li>In the current development version catching is trust based. So if you do get found by the hunter, be respectful
            and leave the lobby</li>
    </ul>
    <p>So now you know, what are you waiting for!?! </p><br><router-link class="wrapper link" to='/create'>Go catch those runaways </router-link>
    <br><br>
    <div class="wrapper">
        <h3 class="title2">Terms and Conditions</h3>
    </div><br>
    <p>Please don't sue us... even if you do get hit by a car</p>

    <br><br>
    <div class="wrapper">
        <h3 class="title2">Team DesperaBros</h3>
    </div><br>
    <p>Meet the team behind Geohunt</p>
    <p>Team leader: <span>Brian</span></p>
    <p>Fullstack developer: <span>Dave</span></p>
    <p>Front end developer: <span>Tomasz</span></p>

</template>


<script>
</script>
<style scoped>
.container {
    max-width: 440px;
    padding: 0 20px;
    margin: 170px auto;

}

.wrapper {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}

.link {
    height: 20px;
    background: #A98467;
    max-width: 90%;
    text-decoration: none;
    min-width: 80%;
    border-radius: 2px, 2px, 0,0;
    color: black;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper .title {
    height: 90px;
    background: #a98467;
    border-radius: 5px 5px 0 0;
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

}

.wrapper .title2 {
    height: 90px;
    background: #a98467;
    border-radius: 5px 5px 0 0;
    color: rgb(0, 0, 0);
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

}

</style>
<template>
  <div class="container">
    <div class="titleDiv">
      <h4>The team at DesperaBros present to you</h4>
      <h1>Geo-Hunt</h1>
    </div>
    <div class="infoDiv">
      <ul>
        <li>Geohunt is a fun lobby based, hunting game, where the hunter uses real-time geolocation of the hunted to find them</li>
        <li>Geohunt uses the location of your device to enable geo-location. Your location after you leave the lobby is not stored / kept.</li>
        <li>Precise location must be enabled in order to play the game</li>
      </ul>
    </div>
    <div class="howToPlayDiv">
      <h2>How to play</h2>
    </div>
    <div class="rulesDiv">
      <ul>
        <li>Click [start] on the home page</li>
        <li>Create or join a lobby</li>
        <li>Invite your friends via join lobby or quick share</li>
        <li>Let the host start the game and enjoy</li>
        <li>In the current development version, catching is trust based. So if you do get found by the hunter, be respectful and leave the lobby</li>
      </ul>
    </div>
    <div class="teamDiv">
      <h2>Team DesperaBros</h2>
    </div>
    <div class="namesDiv">
      <ul>
        <li>Brian - Frontend Developer</li>
        <li>Dave - Backend Developer</li>
        <li>Tomas - Frontend Developer</li>
      </ul>
    </div>
    <div class="leaveInfoPage">
      <button class="leaveBtn" @click="home()">Play GeoHunt</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

.titleDiv {
  background-color: #a98467;
  text-align: center;
  padding: 2px;
  height: fit-content;
}

.infoDiv {
  background-color: cornsilk;
  padding: 5px;
  margin-top: 2px;
}

.howToPlayDiv {
  background-color: #a98467;
  text-align: center;
  padding: 5px;
  margin-top: 2px;
}

.rulesDiv {
  background-color: cornsilk;
  padding: 5px;
  margin-top: 2px;
}

.teamDiv {
  background-color: #a98467;
  text-align: center;
  padding: 5px;
  margin-top: 2px;
}

.namesDiv {
  background-color: cornsilk;
  padding: 5px;
  margin-top: 2px;
}

.leaveInfoPage {
  margin-top: 22x;
  text-align: center;
}

.leaveBtn {
  background-color: #a98467;
  border: none;
  border-radius: 100%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  font-size: x-large;
  padding: 5px;
  width: 100%;
  color: black;
}
</style>
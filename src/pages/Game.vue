

<template>
  <div id="roleArea"><center>You are <span id="banner">being hunted</span></center></div>
  <GoogleMap api-key="AIzaSyB0vMYrB2rlb-aDao6aMHbRqQg3oIlQby4" class="map" :map-id="mapID"
    :center="center" :zoom="15" :streetViewControl=false :mapTypeControl=false :scaleControl=false :zoomControl=false
    :keyboardShortcuts=false scrollwheel=true :navigationControl=false :fullscreenControl=false draggable=true
    disableDefaultUI=true disableDoubleClickZoom=false gestureHandling="greedy">
    <Circle v-for="circle in proxyCircles" :options="circle" />
    <div v-for="hunter in proxyHunter">
      <CustomMarker :options="
        {
          position: hunter.position
        }">
        <InfoWindow v-if="this.infoWindow" :options="{

          position: {lat: hunter.position.lat,
            lng: hunter.position.lng},
          content: hunter.name,
          maxWidth: 150,
        }"/>
        <div>
          <img :src="hunter.icon" />
        </div>
      </CustomMarker>
    </div>


    <CustomMarker v-for="hunted in proxyHunted" :options="{
      position: hunted.position,
    }">
    <InfoWindow :options="{
          position: hunted.position, content: hunted.name
        }"/>
      <img :src="hunted.icon" />
    </CustomMarker>

  </GoogleMap>
</template>
  
<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, Circle, CustomMarker, InfoWindow } from 'vue3-google-map'
import { getAuth } from '@firebase/auth'
import { getDatabase, ref, update, get, child } from 'firebase/database'
import { getLBname } from '../global'

import { settings } from '../settings'

export default defineComponent({
  components: { GoogleMap, Marker, Circle, CustomMarker, InfoWindow },
  data() {
    return {
      lobby_name: getLBname(),
      proxyCircles: this.circles,
      proxyHunter: this.hunterProxy,
      proxyHunted: this.huntedProxy,
      infoWindow: settings["nameTags"],

    }
  },
  mounted: function () {
    window.setInterval(() => {
      window.scrollTo(500, 0);
      this.getLocation();
    }, settings["intervalTimer"])
  },

  setup() {

    const center = { lat: 53.2740621, lng: -9.0534727 }
    const mapID = "bc3210211695b110"

    const circles = []
    const hunterProxy = []
    const huntedProxy = []

    get(child(ref(getDatabase()), getLBname() + "/users/" + getAuth().currentUser.uid + "/")).then(snapshot => {
      if (snapshot.val()["team"] == "hunter") {
        document.getElementById('banner').innerText = "a hunter";
        document.getElementById('roleArea').style = "background-color: rgb(200,0,0)";

        document.getElementById('htmlTitle').innerText = "GeoHunt - gone hunting";
      } else {

        document.getElementById('htmlTitle').innerText = "GeoHunt - gone hiding";
      }
    });


    return { center, mapID, circles, hunterProxy, huntedProxy }
  },

  methods: {
    drawCircle(coords) {
      this.proxyCircles.push({
        strokeColor: "#FF0000",
        strokOpacity: 0.7,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        center: coords,
        radius: 40
      });
    },

    drawHunter(coords, img, name) {
      this.proxyHunter.push({
        position: coords,
        icon: img,
        name: name,
      });
    },

    drawHunted(coords, img, name) {
      this.proxyHunted.push({
        position: coords,
        icon: img,
        name: name,
      });
    },

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            update(ref(getDatabase(), this.lobby_name + "/users/" + getAuth().currentUser.uid), {
              location: pos
            })

            get(child(ref(getDatabase()), this.lobby_name + "/users/" + getAuth().currentUser.uid + "/")).then(snapshot => {
              this.proxyCircles = []
              this.proxyHunter = []
              this.proxyHunted = []
              if (snapshot.val()["team"] == "hunter") {
                get(child(ref(getDatabase()), this.lobby_name + "/users/")).then(snap => {
                  snap.forEach(player => {
                    if (player.val()["team"] == "hunter") {
                      this.drawHunter(player.val()["location"], player.val()["icon"], player.val()["display_name"]); // hunter icon
                    } else {
                      this.drawCircle(player.val()["location"]); // hunted icon
                    }
                  })
                })
              } else if (snapshot.val()["team"] == "hunted") {
                get(child(ref(getDatabase()), this.lobby_name + "/users/")).then(snap => {
                  snap.forEach(player => {
                    if (player.val()["team"] == "hunter") { return; } // prevents the drawing of the hunter for the hunted
                    this.drawHunted(player.val()["location"], player.val()["icon"],  player.val()["display_name"]);
                  })
                })
              }
            })

          }
        )
      }
    }
  }

})
</script>

<style> 
body {
    height: 80%;
    overflow: hidden;
    background-color: #adc178;
}

.map {
  width: 96%;
  position: absolute;
  height: 95%;
}
</style>
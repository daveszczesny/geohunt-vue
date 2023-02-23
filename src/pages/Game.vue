

<template>
  <div id="roleArea">You are <span id="banner">being hunted</span></div>
  <GoogleMap api-key="AIzaSyB0vMYrB2rlb-aDao6aMHbRqQg3oIlQby4" style="width: 100%; height:800px;" :map-id="mapID" :center="center" :zoom="15"
    streetViewControl=false :mapTypeControl=false scaleControl=false zoomControl=false keyboardShortcuts=false
    scrollwheel=true :navigationControl=false :fullscreenControl=false draggable=true disableDefaultUI=true
    disableDoubleClickZoom=false gestureHandling="greedy">
    <Circle v-for="circle in proxyCircles" :options="circle" />
    <div v-for="hunter in proxyHunter">
      <CustomMarker :options="
        {
          position: hunter.position,
        }">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/geohunt-dff18.appspot.com/o/icons%2Fhunter.png?alt=media&token=8dbbfdde-2972-4f21-84b0-a3415fea435d" />
        </div>
      </CustomMarker>
    </div>

  </GoogleMap>
</template>
  
<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, Circle, CustomMarker } from 'vue3-google-map'
import { getAuth } from '@firebase/auth'
import { getDatabase, ref, update, get, child } from 'firebase/database'
import { getLBname } from '../global'

export default defineComponent({
  components: { GoogleMap, Marker, Circle, CustomMarker },
  data() {
    return {
      lobby_name: getLBname(),
      proxyCircles: this.circles,
      proxyHunter: this.hunterProxy,
      hunterIcon: "https://firebasestorage.googleapis.com/v0/b/geohunt-dff18.appspot.com/o/icons%2Fhunter.png?alt=media&token=2bf806bd-98ab-467d-aba7-08270ceeef1b",
    }
  },
  mounted: function () {
    window.setInterval(() => {
      window.scrollTo(500,0);
      this.getLocation();
    }, 5000)
  },

  setup() {
    
    const center = { lat: 53.2740621, lng: -9.0534727 }
    const mapID = "bc3210211695b110"

    const circles = []
    const hunterProxy = []

    get(child(ref(getDatabase()), getLBname() + "/users/" + getAuth().currentUser.uid + "/")).then(snapshot => {
      if (snapshot.val()["team"] == "hunter") {
        document.getElementById('banner').innerText = "a hunter";
        document.getElementById('roleArea').style = "background-color: rgb(200,0,0)";
      }
    });

    return { center, mapID, circles, hunterProxy }
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

    drawHunter(coords) {
      this.proxyHunter.push({
        position: coords
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
              if (snapshot.val()["team"] == "hunter") {
                get(child(ref(getDatabase()), this.lobby_name + "/users/")).then(snap => {
                  snap.forEach(player => {
                    if (player.val()["team"] == "hunter") {
                      this.drawHunter(player.val()["location"]); // hunter icon
                    } else {
                      this.drawCircle(player.val()["location"]); // hunted icon
                    }
                  })
                })
              } else if (snapshot.val()["team"] == "hunted") {
                get(child(ref(getDatabase()), this.lobby_name + "/users/")).then(snap => {
                  snap.forEach(player => {
                    if (player.val()["team"] == "hunter") { return; } // prevents the drawing of the hunter for the hunted
                    this.drawCircle(player.val()["location"]);
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
body{
  overscroll-behavior-y: contain;
  overflow: hidden;
}
</style>
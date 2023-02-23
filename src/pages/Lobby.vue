
<template>
    <h1>Lobby {{ lobby_name }}</h1>
    <div style="display: block" id="lobbyDiv" class="gameContainer">
        <div class="wrapper">
            <div class="player-list">
                <center>
                    <ul id="myList">

                    </ul>
                    <div id="startGameDiv" style="display: none">
                        <button id="startGameBtn">Start</button>
                        <!-- <router-link to="/game" id="startGameBtn">Start</router-link> -->
                    </div>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { get, child, onValue, ref, getDatabase, update } from 'firebase/database';

import { getLBname } from '../global'
export default {


    method: {
        gamestart() {
            console.log("Hello?")
            this.$router.push('/')
        }
    },

    data() {
        return {
            lobby_name: getLBname(),

        }
    },

    async mounted() {
        if (getAuth().currentUser == null)
            this.$router.push('/')

        document.getElementById('htmlTitle').innerText = "GeoHunt - " + this.lobby_name

        // shows start button for host
        get(child(ref(getDatabase()), this.lobby_name + '/users')).then((snap) => {
            if (Object.keys(snap.val()).length == 1) {
                document.getElementById('startGameDiv').style = "display: block";
                get(child(ref(getDatabase()), this.lobby_name + "/users/")).then((snap) => {
                    const random = Math.floor(Math.random() * Object.keys(snap.val()).length)

                    update(ref(getDatabase(), this.lobby_name + "/users/" + Object.keys(snap.val())[random]), {
                        team: "hunter"
                    })
                });
            }
        });

        document.getElementById('startGameBtn').addEventListener('click', () => {
            update(ref(getDatabase(), this.lobby_name + "/settings/"), {
                start: true
            });
        })


        // ensuring this only runs while at the lobby stage
        if (this.$router.currentRoute._rawValue.fullPath == "/lobby") {
            try {
                onValue(ref(getDatabase(), this.lobby_name + '/users'), (snap) => {
                    document.getElementById("myList").innerText = " ";
                    snap.forEach(x => {
                        const node = document.createElement("li");
                        const userNode = document.createTextNode(x.val()['display_name']);
                        document.getElementById("myList").appendChild(node);
                        // adds host icon
                        if (x.val()['host']) {
                            const icon = document.createElement("i");
                            icon.classList.add("fas");
                            icon.classList.add("fa-crown")
                            icon.setAttribute("style", "color:yellow;border:0;padding:0;position:relative;top:0.1%;left: 0%;")
                            node.appendChild(icon)
                        }
                        node.appendChild(userNode);
                    })
                });
            } catch (err) { }

        }


        onValue(ref(getDatabase(), this.lobby_name + '/settings/start'), (snap) => {
            if (snap.val()) {
                this.$router.push('/game')
            }
        });

    },

};

</script>
<style scoped>
.wrapper {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}
</style>

<template>
    <h1>Lobby {{ lobby_name }}</h1>
    <div style="display: block" id="lobbyDiv" class="gameContainer">
        <div class="wrapper">
            <div class="player-list">
                <center>
                    <ul id="myList">

                    </ul>
                    <div id="startGameDiv" style="display: none">
                        <div class="start-button">
                            <button id="startGameBtn" class="button">Start</button>
                        </div>

                    </div>

                </center>
            </div>
        </div>
    </div>
    <div class="getURLdiv"><button @click="copyLobbyURL" class="button">Share</button></div>
</template>

<script>


import { getLBname } from '../global'
import { getAuth } from 'firebase/auth';
import { get, child, onValue, ref, getDatabase, update } from 'firebase/database';


import { icons } from '../assets/icons';
export default {


    data() {
        return {
            lobby_name: getLBname(),
            lobbyID: null,
        };
    },

    methods: {
        gamestart() {
            console.log('Hello?');
            this.$router.push('/');
        },

        async copyLobbyURL() {

            const url = window.location.href.replace(/\/$/, '')
            const shareLink = url.replace(/\/lobby$/, '/sharelink/') + this.lobby_name;
            await navigator.clipboard.writeText(shareLink);
            alert('Lobby URL copied to clipboard!');
        },
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
                        team: "hunter",
                        icon: icons.hunter
                    })
                });
            }
        });

        document.getElementById('startGameBtn').addEventListener('click', () => {
            update(ref(getDatabase(), this.lobby_name + "/settings/"), {
                start: true
            });
        })
        onValue(ref(getDatabase(), this.lobby_name + '/users'), (snap) => {
            try {
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
            }
            catch (err) { }
        });


        onValue(ref(getDatabase(), this.lobby_name + '/settings/start'), (snap) => {
            if (snap.val()) {
                this.$router.push('/game')
            }
        });

    },
}


</script>
<style scoped>
.gameContainer {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper {
    position: absolute;
    top: 15%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}

.button {
    background-color: #A98467;
    border: none;
    color: white;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

#startGameBtn {
    width: 200px;
    height: 50px;
    font-size: 18px;
}

.start-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.button:hover {
    background-color: #8B6C4E;
}

h1 {

    border: 1px solid #8B6C4E;
    border-radius: 10px;
    background-color: #A98467;

    padding: 10px;
    text-align: center;
    font-size: 32px;
    margin: 0;
    padding: 16px;
    margin-bottom: 10px;
}

.gameContainer {
    align-self: center;
}

.getURLdiv {
    border-radius: 5px;
    position: fixed;
    bottom: 5%;
    left: 28%;
    width: 40%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 16px;
    z-index: 1;
}

</style>
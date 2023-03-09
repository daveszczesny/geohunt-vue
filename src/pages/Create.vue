<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    </head>

    <header>
        <center>
            <div class="header">
                <h1>Geo-Hunt;</h1>
            </div>
        </center>
    </header>

    <div id="preLobbyDiv" class="container">
        <div class="wrapper">
            <div class="title"><span>Geo-Hunt Login</span></div>
            <form action="#" autocomplete="off">
                <div class="row">
                    <i class="fas fa-user"></i>
                    <input id="displayname" type="text" placeholder="Username" required>
                </div>
                <div class="row">
                    <i class='fas fa-users'></i>
                    <input id="lobbyname" type="text" placeholder="Lobby Name" required>
                </div>
                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input @focus="passwordListener" id="password" type="text" placeholder="Lobby Password" required>
                </div>
                <div class="row-button">
                    <input @click="login" type="button" id="loginbutton" class="login-button" value="Login">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, signInAnonymously } from 'firebase/auth';
import { get, child, ref, getDatabase, remove } from 'firebase/database'
import { getFunctions } from 'firebase/functions';
import { httpsCallable } from 'firebase/functions';
import { updateUser } from '../scripts/create'

import { setLBname } from '../global.js'
import { icons } from '../assets/icons';
import { settings } from '../settings';
export default {
    setup() {
        document.getElementById('htmlTitle').innerText = "GeoHunt - Create Lobby"
    },
    data() {
        return {
            wrongpassword_boolean: false,
        }
    },
    methods: {
        create_lobby(lobbyname, password) {
            const createLobby = httpsCallable(getFunctions(), 'createLobby');
            const updateLobby = httpsCallable(getFunctions(), 'updateLobbySettings')
            // create lobby on rtdb
            // creates lobby
            createLobby({
                lobbyname: lobbyname,
                password: password
            })
                .then((result) => {
                    console.log(result.data);

                })
            updateLobby({
                lobbyname: lobbyname,
                password: password,
                setting: "hunter_selection",
                value: settings["hunterSelection"],
            }).then((result) => {
                console.log(result.data)
            })
            updateLobby({
                lobbyname: lobbyname,
                password: password,
                setting: "nameTags",
                value: settings["nameTags"],
            })

        },

        // creates anonymous user
        login() {
            let lobbyname = document.getElementById("lobbyname");
            let password = document.getElementById("password");
            let displayname = document.getElementById('displayname');

            if (lobbyname.value == "" || password.value == "" || displayname.value == "") {
                alert("Some fields are empty");
                return;
            }

            const writeUser = httpsCallable(getFunctions(), 'writeUserToRTDB');
            signInAnonymously(getAuth())
                .then(() => {
                    console.log("Signed in succesfully");
                    if (document.getElementById('loginbutton').value == 'join') {
                        get(child(ref(getDatabase()), lobbyname.value + "/settings")).then(async (snap) => {
                            if (password.value != snap.val()['password']) {
                                alert("Wrong Password");
                            } else {
                                writeUser({
                                    displayname: displayname.value,
                                    lobbyname: lobbyname.value,
                                    icon: icons[Object.keys(icons).filter(key => key !== Object.keys(icons)[0])[Math.floor(Math.random() * (Object.keys(icons).length - 1))]],
                                }).then((result) => {
                                    console.log(result.data);
                                    updateUser(getAuth(), lobbyname.value);
                                    setLBname(lobbyname.value);
                                    this.$router.push('/lobby')
                                })
                            }
                        })
                    }
                    if (document.getElementById('loginbutton').value == 'create') {
                        this.create_lobby(lobbyname.value, password.value);
                        writeUser({
                            displayname: displayname.value,
                            lobbyname: lobbyname.value,
                            icon: icons[Object.keys(icons).filter(key => key !== Object.keys(icons)[0])[Math.floor(Math.random() * (Object.keys(icons).length - 1))]],
                        }).then((result) => {
                            console.log(result.data);
                            updateUser(getAuth(), lobbyname.value);
                            setLBname(lobbyname.value);
                            this.$router.push('/lobby')
                        })
                    }

                })
        },
        passwordListener() {

            let lobbyname = document.getElementById('lobbyname').value;
            let loginButton = document.getElementById('loginbutton')

            get(child(ref(getDatabase()), lobbyname)).then((snap) => {

                if (snap.exists()) {

                    // checks if the lobby is apart of garbage,
                    // aka if the lobby has been left behind without any users.
                    get(child(ref(getDatabase()), lobbyname + '/users')).then(async (snap2) => {
                        if (await (!snap2.exists())) {
                            remove(ref(getDatabase()), lobbyname)
                            loginButton.value = 'create'
                        } else {
                            loginButton.value = 'join'
                        }
                    });


                } else {

                    loginButton.value = 'create'
                }
            })
        }
    },
}

</script>

<style>
body {
    height: 80%;
    overflow: hidden;
}

.row-button {
    align-items: center;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
}

.login-button {
    align-items: center;
    background: none;
    background-color: #a98467;
    border-radius: 5px;
    color: black;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: center;
    outline: 0;
    transition: all 0.3s ease;
    width: 100%;
}

.header {
    align-items: center;
    background-color: #f0ead2;
    height: 10%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.container {
    margin: 170px auto;
    max-width: 440px;
    padding: 0 20px;
}

.wrapper {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.wrapper form {
    padding: 30px 25px 25px 25px;
}

.wrapper .title {
    align-items: center;
    background: #a98467;
    border-radius: 5px 5px 0 0;
    color: rgb(0, 0, 0);
    display: flex;
    font-size: 30px;
    font-weight: 600;
    height: 90px;
    justify-content: center;

}

.wrapper form .row {
  height: 45px;
  margin-bottom: 15px;
  position: relative;
  width: 80%;
}

.wrapper form .row input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    font-size: 16px;
    height: 100%;
    outline: none;
    padding-left: 60px;
    transition: all 0.3s ease;
    width: 100%;
}

form .row input:focus {
  border-color: #a98467;
  box-shadow: inset 0 0 2px 2px rgba(26, 188, 156, 0.25);
}

form .row input::placeholder {
  color: #999;
}

.wrapper form .row i {
    align-items: center;
    background: #a98467;
    border: 1px solid #a98467;
    border-radius: 5px 0 0 5px;
    color: #fff;
    display: flex;
    font-size: 18px;
    height: 105%;
    justify-content: center;
    position: absolute;
    width: 47px;
}

</style>
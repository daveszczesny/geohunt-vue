

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
                <div class="row button">
                    <input @click="login" type="button" id="loginbutton" value="Login">
                </div>
                <p style="display: none;" id="wrongpassword">Wrong password</p>
                <p style="display: none;" id="emptyFields">Some fields are empty</p>
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
            // create lobby on rtdb
            // creates lobby
            createLobby({
                lobbyname: lobbyname,
                password: password
            })
                .then((result) => {
                    console.log(result.data);
                })

                

        },

        // creates anonymous user
        login() {
            let lobbyname = document.getElementById("lobbyname");
            let password = document.getElementById("password");
            let displayname = document.getElementById('displayname');

            if (lobbyname.value == "" || password.value == "" || displayname.value == "") {
                document.getElementById('emptyFields').style = "display:block;";
                return;
            }

            const writeUser = httpsCallable(getFunctions(), 'writeUserToRTDB');
            signInAnonymously(getAuth())
                .then(() => {
                    console.log("Signed in succesfully");
                    if (document.getElementById('loginbutton').value == 'join') {
                        get(child(ref(getDatabase()), lobbyname.value + "/settings")).then(async (snap) => {
                            if (password.value != snap.val()['password']) {
                                document.getElementById('wrongpassword').style = "display: block";
                            } else {
                                writeUser({
                                    displayname: displayname.value,
                                    lobbyname: lobbyname.value,
                                    icon: icons.hunted_1,
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
                            icon: icons.hunted_1,
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

.wrapper form {
    padding: 30px 25px 25px 25px;
}

.wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
}

.wrapper form .row input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 60px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    font-size: 16px;
    transition: all 0.3s ease;
}

form .row input:focus {
    border-color: #a98467;
    box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25);
}

form .row input::placeholder {
    color: #999;
}

.wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    color: #fff;
    font-size: 18px;
    background: #a98467;
    border: 1px solid #a98467;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper form .button input {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding-left: 0px;
    background: #a98467;
    border: 1px solid #a98467;
    cursor: pointer;
}

form .button input:hover {
    background: #6c584c;
}
</style>
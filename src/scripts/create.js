import { get, child, ref, getDatabase, update, onValue, onDisconnect, set } from "firebase/database";

import { database } from "../api/firebase";


export function createLobby(lobbyname, password) {
    set(ref(database, lobbyname + "/settings"), {
        password: password,
        start: false,
        gameSettings: {
            hunter_selection: "random",
            in_game_names: true
        }
    })
}

/*
function writeUserToRTDB
writes user to rtdb

*/

export function updateUser(auth, lobbyname) {

    // checks if the user is the first player in lobby, sets them to host
    get(child(ref(database), lobbyname + "/users")).then((snap) => {
        if (Object.keys(snap.val()).length == 1) {

            update(ref(database, lobbyname + "/users/" + auth.currentUser.uid), {
                host: true
            })
        }

    })

    // creates an onValue function that checks whether the user leaves the lobby
    const userRTDBRef = ref(database, lobbyname + "/users/" + auth.currentUser.uid)
    const connectedRef = ref(database, ".info/connected");

    // actively listens for change of online status
    onValue(connectedRef, () => {
        // if connection exists, user exists and their rtdb ref exists
        // it listens if that user disconnections.
        // removes instance of user on rtdb if they disconnect.
        onDisconnect(userRTDBRef).remove();
    })

}
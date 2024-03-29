const functions = require("firebase-functions");
const admin = require('firebase-admin')


admin.initializeApp(functions.config().database);

exports.updateLobbySettings = functions.https.onCall((data, context) => {
    cors: 'Access-Control-Allow-Origin';

    try{
        const lobbyname = data.lobbyname;
        const password = data.password;
        const setting = data.setting;
        const res = data.value;
        if (setting == "hunter_selection"){
            return admin.database().ref(lobbyname + '/settings/gameSettings/').update({
                hunter_selection: res
            })
        } else if(setting == "nameTags"){
            return admin.database().ref(lobbyname + '/settings/gameSettings/').update({
                in_game_names: res
            })
        }
    }catch(err){
        console.log("Lobby updated");
        return "Lobby updated";
    }

})

exports.createLobby = functions.https.onCall((data, context) => {
    cors: 'Access-Control-Allow-Origin';
    try {
        const lobbyname = data.lobbyname;
        const password = data.password;

        return admin.database().ref(lobbyname + '/settings').set({
            password: password,
            start: false,
            gameSettings: {
                hunter_selection: "random",
                in_game_names: false
            }
        }).then(() => {
            console.log("Added lobby");
            return "Success"
        })
    }catch(err){
        console.error(err);
        return "Error creating lobby in RTDB";
    }
});

exports.writeUserToRTDB = functions.https.onCall((data, context) => {
    cors: 'Access-Control-Allow-Origin';
    try{
        const displayname = data.displayname;
        const lobbyname = data.lobbyname;
        const iconlink = data.icon;
        const uid = context.auth.uid;

        return admin.database().ref(lobbyname + "/users/" + uid).set({
            display_name: displayname,
            host: false,
            location: null,
            team: "hunted",
            icon: iconlink,
        }).then(()=>{
            console.log("User added to lobby");
            return "User added!";
        })

    }catch(err){
        console.error(err);
        return "Error adding user to RTDB";
    }
});

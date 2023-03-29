
<template>
    <div class="mainText">
        <center>
            <h1 id="txt" style="font-weight: 600; font-size:xx-large;">Welcome to<br>GeoHunt</h1>
        </center>
    </div>
    <div class="button-container">
        <router-link class="link" to="/create">Start</router-link>
        <router-link class="link" to="/info">Info</router-link>
    </div>
</template>

<script>

</script>

<style>
.mainText {
    align-items: center;
    background-color: #f0ead2;
    display: flex;
    flex-direction: column;
    height: 15%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}



@media (max-width: 1000px) {

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        margin-top: 50%;
    }

    .link {
        display: inline-block;
        margin: 0 10px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;

        background-color: #A98467;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        float: none;
        font-size: x-large;
        padding: 0 20px;
        margin-right: 10%;
        margin-left: 10%;
        -webkit-text-fill-color: whitesmoke;

    }
}

@media(min-width: 1005px) {
    .button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        margin-top: 10%;
        margin-bottom: 50%;
    }

    .link{
        display: inline-block;
        margin: 10px 0;
        padding: 20px 10px;
        text-align: center;
        text-decoration: none;
        background-color: #A98467;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        float: none;
        font-size: x-large;
        padding: 2% 10%;
        margin-right: 10%;
        margin-left: 10%;
        -webkit-text-fill-color: whitesmoke;
    }
}


/* Button Container
.button-container {  
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 20%;
    left: 0;
    position: relative;
    top: 50vh;
    width: 100%;
}

.link {
    background-color: #A98467;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    float: none;
    font-size: x-large;
    margin-left: 20%;
    padding: 0 20px;
    text-decoration: none;
    -webkit-text-fill-color: whitesmoke;
} */
</style>
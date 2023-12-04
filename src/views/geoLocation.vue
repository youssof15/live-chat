<template>
    <h2>Map</h2>
    <div>
        <div class="google-map" id="map">
        </div>
    </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import { projectfirestore } from '../firebase/config.js'
import getUser from '../composables/getUser';

export default {

setup(){
    const {user} = getUser()
    const docX = []

    projectfirestore.collection('users').get().then(users=>{
            users.forEach((doc)=>{
                const data = doc.data()
                if(data.userX === user.value.uid){
                    docX.push(data.geolocation)
                }})})
                
    const initMap = async() => {

        projectfirestore.collection('users').get().then(users=>{
            users.forEach((doc)=>{
                const data = doc.data()
                    if(data.geolocation){
                        const marker = new google.maps.Marker({
                            position:{
                                lat:data.geolocation.lat,
                                lng:data.geolocation.lng
                            },map})
                            marker.setMap(map)
                        }
            })
        })
        const { Map } = await google.maps.importLibrary("maps");
        const map = await new Map(document.getElementById("map"), {
            center: {lat:docX[0].lat ,lng:docX[0].lng },
            zoom: 6,
        })
    };
onMounted(()=>{
    setTimeout(()=>{ if(user.value)initMap()}, 1000)})
}}
</script>

<style>
    .google-map{
        height: 100%;
        width: 100%;
        margin:0 auto;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
    }
    h2{
        position: relative;
        z-index: 1;
        margin: 0;
    }
</style>
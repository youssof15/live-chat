<template>
    <div class="navis">
        <router-link class="router-L" :to="{name:'Chatroom'}">Chatroom</router-link>
        <router-link class="router-L"  :to="{name:'geoLocation'}">geo-Location</router-link>
  </div>
</template>

<style>
.navis{
    padding: 20px;
    background-color: #02001800;
    border-bottom: 2px solid #f3f3f3;
    font-size: 30px;
}
.router-L{
    position: relative;
    z-index: 2;
    padding: 20px;
    color: #9999a582;
    text-decoration: none;
}
.router-L.router-link-active{
  color: #5ae4ca;
  text-decoration: none;
  text-shadow: 0px 1px 2px #434343
}
</style>
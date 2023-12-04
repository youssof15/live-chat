import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// waits untill vue gets a response from firebase to create app
// app is not App <===>
import { projectAuth } from './firebase/config.js'
let app 
projectAuth.onAuthStateChanged(()=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

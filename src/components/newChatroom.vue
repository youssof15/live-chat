<template>
    <form>
        <textarea 
                placeholder="Type a message hit enter to send..." v-model="msg"
                @keypress.enter.prevent="handleSubmit"
                ></textarea>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import  {timestamp}  from '../firebase/config'
import useCollection from '../composables/useCollection'
    export default {
        setup(props,context){
            const {user} = getUser()
            const { addDoc, error } = useCollection('messages')
            const msg = ref('')
            const handleSubmit = async ()=>{
                if(msg.value !== ''){
                const chat = {
                    name: user.value.displayName,
                    message: msg.value,
                    createdAt: timestamp(),
                }
                msg.value=''
                await addDoc(chat)
                return chat
            }}
            return{ handleSubmit ,msg ,error}
        }
    }
</script>

<style scoped>
    form{
        margin:10px
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        font-family: inherit;
        outline: none;
        resize: none;
    }
    .messages{
        background-color: #eee;
        margin: 10px;
    }
</style>
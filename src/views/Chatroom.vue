<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <newChatroom />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import newChatroom from '../components/newChatroom.vue'
import ChatWindow from '../components/ChatWindow.vue'
export default {
    components:{ Navbar , newChatroom, ChatWindow},
}
</script>

<style>
    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 15px;
        color: #999;
    }

</style>
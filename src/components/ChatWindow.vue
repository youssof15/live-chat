<template>
    <div class="dog" ref="messages">
        <div v-for ="doc in computedDate" :key="doc.id" class="messages">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}</span>
            <span class="msg">{{ doc.message }}</span>
        </div>
    </div>
</template>

<script>
    import getCollection from '../composables/getCollection'

    // destructuring date fns
    import {formatDistanceToNow} from 'date-fns'

    import { onUpdated, ref , computed} from 'vue'
    export default {
        setup(){
            const { error , documents } = getCollection('messages')
            const computedDate = computed(()=>{
                if(documents.value){
                    return documents.value.map(doc=>{

                        // initial time value taken as argument
                        let time = formatDistanceToNow(doc.createdAt.toDate())

                        // overrides the createAt Value
                        return {...doc,createdAt:time}
                    })
                }
            })

            // create template refs to ref to a dom element
            // auto scroll to bottom of messages
            //return its value to reference the dom obj
            const messages = ref(null)

            onUpdated(() => {
                // refs to .dog
                // scrl from top = .dog height
                messages.value.scrollTop = messages.value.scrollHeight
            })

            return {error, computedDate, messages}
        }

    }
</script>

<style>
.dog{overflow-y: scroll;max-height: 500px;}
.messages{
    background-color: #f3f3f3;
    padding: 5px 10px;
    margin: 18px 9px;
    border-radius: 5px;
    text-align: left;
}
.created-at{
    display: block;
    color: #999;
    font-size:12px ;
    margin-bottom: 4px;
    width: 100%;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
span.msg{
    display: block;
    word-wrap: break-word;
}
</style>
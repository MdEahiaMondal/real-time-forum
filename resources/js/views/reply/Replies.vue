<template>
    <div style="border-top: 2px solid #39bbef; margin-top: 50px">
        <h1 class="p-5">All Replies</h1>

        <v-container>
            <reply v-for="(reply, index) in content" :key="reply.id" :reply="reply"></reply>
           <replay-create :questionSlug="questionSlug"></replay-create>
        </v-container>

    </div>
</template>

<script>
import Reply from "./Reply";
import ReplayCreate from "./ReplayCreate";
export default {
name: "Replies",
    components: {ReplayCreate, Reply},
    props: ['replies', 'questionSlug'],
    data(){
    return {
        content: this.replies
    }
    },

    created() {
        this.listen()
    },
    methods: {
        listen()
        {
            EventBus.$on('replayCreated', (reply) =>{
                this.content.unshift(reply)
            })
        }
    }
}
</script>

<style scoped>

</style>

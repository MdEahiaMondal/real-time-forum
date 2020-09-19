<template>
    <div style="border-top: 2px solid #39bbef; margin-top: 50px">
        <h1 class="p-5">All Replies</h1>

        <v-container>
            <reply v-for="(reply, index) in content" :key="reply.id" :questionSlug="questionSlug" :index="index" :reply="reply"></reply>
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
            EventBus.$on('destroyReplay', (index) =>{
                this.content.splice(index, 1)
            })

            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    console.log(notification.type);
                });

        }
    }
}
</script>

<style scoped>

</style>

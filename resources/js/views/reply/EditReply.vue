<template>
    <div>
        <vue-simplemde v-model="content" ref="markdownEditor" />
        <v-btn
            color="success"
            class="mr-4"
            @click="updateReplay"
            icon
        >
           <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
            color="dark"
            class="mr-4"
            @click="cancelReplay"
            icon
        >
            <v-icon>mdi-close-circle</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
name: "EditReply",
    props: ['reply', 'questionSlug'],
    data(){
        return {
            content: this.reply.body
        }
    },
    methods: {
        updateReplay(){
            axios.put(`http://localhost:8000/api/questions/${this.questionSlug}/replies/${this.reply.id}`, {body: this.content})
                .then(res => {
                    this.cancelReplay()
                })
                .catch(e => {
                    console.log(e.response.data.message)
                })
        },
        cancelReplay(){
            EventBus.$emit('cancelEdit')
        }
    }
}
</script>

<style scoped>

</style>

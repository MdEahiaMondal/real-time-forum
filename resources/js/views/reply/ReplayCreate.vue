<template>
    <div>
        <vue-simplemde v-model="body" ref="markdownEditor" />
        <v-btn
            color="success"
            class="mr-4"
            @click="createReplay"
        >
            Replay
        </v-btn>
    </div>
</template>

<script>
export default {
name: "ReplayCreate",
    props: ['questionSlug'],
    data()
    {
        return {
            body: ''
        }
    },
    methods: {
        createReplay(){
            axios.post(`http://localhost:8000/api/questions/${this.questionSlug}/replies`, {body: this.body})
                .then(res => {
                    this.body = ''
                    EventBus.$emit('replayCreated', res.data.reply)
                    window.scrollTo(0,0)
                })
                .catch(e => {
                    console.log(e.response.data.message)
                })
        }
    }
}
</script>

<style scoped>

</style>

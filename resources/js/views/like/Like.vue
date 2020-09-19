<template>
<div>
    <v-btn icon @click="likeReplay">
        <v-icon :color="color">mdi-heart</v-icon> {{ count }}
    </v-btn>
</div>
</template>

<script>
export default {
name: "Like",
    props: ['reply'],
    data()
    {
        return {
            count: this.reply.all_likes,
            like: this.reply.auth_liked
        }
    },
computed: {
    color()
    {
        return this.like ? 'red' : 'red lighten-2'
    }
},
    methods: {
        likeReplay()
        {
            this.like ? this.dec() : this.inc()
            this.like = !this.like
        },
        dec() {
            axios.delete(`http://localhost:8000/api/replies/${this.reply.id}/likes`)
                .then(res => {
                    this.count --
                })
                .catch(e => {
                    console.log(e.response.data.message)
                })

        },
        inc() {
            axios.post(`http://localhost:8000/api/replies/${this.reply.id}/likes`)
                .then(res => {
                    this.count ++
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

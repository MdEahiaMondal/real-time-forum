<template>
    <v-row no-gutters>
            <v-col>
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    <question v-for="question in questions" :key="question.id" :question="question"></question>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    Variable width content
                </v-card>
            </v-col>
        </v-row>
</template>
<script>
import Question from "./Question";
export default {
    name: "Forum",
    components: {Question},
    data(){
        return {
            questions: []
        }
    },
    created() {
        axios.get('api/questions')
        .then(res => {
            this.questions = res.data.data
        })
        .catch(e => {
            console.log(e.response)
        })
    }
}
</script>

<style scoped>

</style>

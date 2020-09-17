<template>
    <v-row no-gutters >
            <v-col>
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    <question v-for="question in questions" v-if="questions" :key="question.id" :question="question"></question>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    <app-sidebar></app-sidebar>
                </v-card>
            </v-col>
        </v-row>
</template>
<script>
import Question from "./Question";
import AppSidebar from "./AppSidebar";
export default {
    name: "Forum",
    components: {AppSidebar, Question},
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

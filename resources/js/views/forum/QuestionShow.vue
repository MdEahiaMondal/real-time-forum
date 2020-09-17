<template>
    <v-card
        class="mx-auto"
        v-if="question"
    >
        <v-card-title>
            <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{ question.user ? question.user.name : '' }} said {{ question.created_at }}</v-list-item-title>
            </v-list-item-content>
            <v-card-text class="headline font-weight-bold">
                {{ question.title }}
            </v-card-text>
            <v-row
                align="center"
                justify="end"
            >
                <v-btn color="accent" dark>Replays</v-btn>

            </v-row>
        </v-card-title>

            <v-card-text class="font-weight-bold" v-html="content"> </v-card-text>

        <v-card-actions>
            <v-list-item class="grow">
                <v-row
                    align="center"
                    justify="end"
                >
                    <v-col md="6" v-if="access">
                        <v-card-actions>
                            <v-btn icon>
                               <v-icon color="orange">mdi-border-color</v-icon>
                            </v-btn>
                            <v-btn icon @click="deleteQuestion">
                               <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-col md="6">
                        <v-icon class="mr-1">mdi-heart</v-icon>
                        <span class="subheading mr-2">256</span>
                        <span class="mr-1">·</span>
                        <v-icon class="mr-1">mdi-share-variant</v-icon>
                        <span class="subheading">45</span>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
name: "QuestionShow",
    data(){
        return {
            question: '',
        }
    },
    created() {
        axios.get(`/api/questions/${this.$route.params.slug}`)
        .then(res => {
            this.question = res.data.data
        }).catch(e => {
            console.log(e.response)
        })
    },
    computed:{
        content()
        {
            return md.parse(this.question.content)
        },
        access()
        {
            return User.own(this.question.user.id)
        }
    },
    methods:
    {
        deleteQuestion(){
            axios.delete(`http://localhost:8000/api/questions/${this.question.slug}`)
                .then(res => {
                    this.$router.push({name: 'forum'})
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

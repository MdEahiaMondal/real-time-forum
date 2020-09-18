<template>
   <div>
       <div v-if="!editing">
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
                       <v-btn color="accent" dark>({{ question.reply_count}}) Replays</v-btn>

                   </v-row>
               </v-card-title>

               <v-card-text class="font-weight-bold" v-html="content"> </v-card-text>

               <v-card-actions>
                   <v-list-item class="grow">
                       <v-card-actions v-if="access">
                           <v-btn icon @click="editQuestion">
                               <v-icon color="orange">mdi-border-color</v-icon>
                           </v-btn>
                           <v-btn icon @click="deleteQuestion">
                               <v-icon color="red">mdi-delete</v-icon>
                           </v-btn>
                       </v-card-actions>
                   </v-list-item>
               </v-card-actions>

               <replies :replies="question.replies" :questionSlug="question.slug"></replies>
           </v-card>
       </div>
       <question-edit v-if="editing" :question="question"></question-edit>
   </div>
</template>

<script>
import questionEdit from '../question/Edit'
import Replies from "../reply/Replies";
export default {
name: "QuestionShow",
    data(){
        return {
            question: '',
            editing: false
        }
    },
    components: {Replies, questionEdit},
    created() {
    this.listion()
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
        } ,
        editQuestion(){
           this.editing = true
        },
        listion()
        {
            EventBus.$on('cancelEdit', () =>{
                this.editing = false

            })
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <v-card
            class="mx-auto">
            <v-card-title>
                <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ reply.user ? reply.user.name : '' }} said {{
                            reply.created_at
                        }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <like :reply="reply"></like>
                <v-card-text v-if="editing">
                    <edit-reply :reply="reply" :questionSlug="questionSlug" ></edit-reply>
                </v-card-text>
                <v-card-text v-else v-html="replyBody"></v-card-text>
            </v-card-title>
            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn small icon @click="editReply">
                        <v-icon color="orange">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn small icon @click="deleteReplay">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-divider></v-divider>
        </v-card>
    </div>
</template>

<script>
import EditReply from "./EditReply";
import Like from "../like/Like";
export default {
    created() {
        this.listen()
    },
    name: "Reply",
    components: {Like, EditReply},
    props: ['reply', 'index', 'questionSlug'],
    data(){
        return {
            editing: false
        }
    },
    computed:
        {
            own() {
                return User.own(this.reply.user.id)
            },
            replyBody()
            {
                return md.parse(this.reply.body)
            }
        },
    methods:
        {
            deleteReplay() {

                axios.delete(`http://localhost:8000/api/questions/${this.questionSlug}/replies/${this.reply.id}`)
                    .then(res => {
                        EventBus.$emit('destroyReplay', this.index)
                    })
                    .catch(e => {
                        console.log(e.response.data.message)
                    })
            },

            editReply()
            {
                this.editing = true
            },
            listen(){
                EventBus.$on('cancelEdit', () => {
                    this.editing = false;
                })
            }
        }
}
</script>

<style scoped>

</style>

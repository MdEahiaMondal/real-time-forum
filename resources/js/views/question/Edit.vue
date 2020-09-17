<template>
    <v-row no-gutters>
        <v-col
            md="12"
        >
            <v-card
                class="pa-2"
            >
                <v-form
                    ref="form"
                    @submit.prevent="updateQuestion"
                >
                    <v-text-field
                        v-model="question.title"
                        label="Title"
                        required
                        type="text"
                    ></v-text-field>
                  <!--  <v-select
                        v-model="question.category_id"
                        :items="categories"
                        item-text="title"
                        item-value="id"
                        label="Category"
                    ></v-select>-->
                    <vue-simplemde v-model="question.content" ref="markdownEditor" />
                    <v-btn
                        color="success"
                        class="mr-4"
                        type="submit"
                    >
                        save
                    </v-btn>
                    <v-btn
                        color="red"
                        class="mr-4"
                        type="submit"
                        @click="cancelEdit"
                    >
                        Cancel
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Edit",
    props:['question'],
    methods: {
        cancelEdit()
        {
            EventBus.$emit('cancelEdit')
        },
        updateQuestion()
        {
            axios.put(`http://localhost:8000/api/questions/${this.question.slug}`, this.question)
                .then(res => {
                    this.cancelEdit()
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

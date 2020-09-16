<template>
    <div>
        <v-card-title class="headline text--primary">
            <router-link :to="{name: 'question-show', params: {slug: question.slug}}">
                {{ question.title }}
            </router-link>
        </v-card-title>
        <v-card-subtitle> <strong>{{question.user.name }}</strong> said {{ question.created_at }}</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{ question.content }}</div>
        </v-card-text>
    </div>

</template>

<script>
export default {
name: "Question",
    props: ['question'],
}
</script>

<style scoped>

</style>

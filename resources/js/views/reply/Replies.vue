<template>
    <div style="border-top: 2px solid #39bbef; margin-top: 50px">
        <h1 class="p-5">All Replies</h1>
        <reply v-for="(reply, index) in replies" :reply="reply"></reply>
    </div>
</template>

<script>
import Reply from "./Reply";
export default {
name: "Replies",
    components: {Reply},
    props: ['replies']
}
</script>

<style scoped>

</style>

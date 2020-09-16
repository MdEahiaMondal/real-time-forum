<template>

</template>

<script>
export default {
name: "Logout",
    beforeCreate() {
        EventBus.$emit('logout')
    }
}
</script>

<style scoped>

</style>

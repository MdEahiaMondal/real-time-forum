<template>
   <div>
       <toolbar></toolbar>
       <router-view></router-view>
      <app-footer></app-footer>
   </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import AppFooter from "../components/AppFooter";
export default {
name: "MainHome",
    components: {AppFooter, Toolbar}
}
</script>

<style scoped>

</style>

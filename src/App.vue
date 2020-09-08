<template>
  <v-app id="inspire">
    <navigation/>
    <router-view></router-view>
    <footerapp/>
  </v-app>
</template>

<script>
import home from "./views/Home";
import navigation from "./components/navbar"
import footerapp from "./components/footer"

export default {
  components: {
   home,
   navigation,
   footerapp
  },
};
</script>

<style>
</style>
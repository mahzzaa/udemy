<template>
  <div>
    <v-app-bar color="deep-black accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>carol course</v-toolbar-title>

      <v-spacer></v-spacer>

       <p class="navbar-p">
         <router-link  to="/">Home</router-link>
      </p>

       <p class="navbar-p">
         <router-link  to="/about">About Us</router-link>
      </p>

      
       <p class="navbar-p">
        <router-link  to="/course">Courses</router-link>
      </p>
      
       <p class="navbar-p">
        <router-link  to="/pricing">Pricing</router-link>
      </p>
      
       <p class="navbar-p">
        <router-link  to="/option">Option</router-link>
      </p>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title> <router-link  to="/">Home</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title> <router-link  to="/about">About Us</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title> <router-link  to="/course">Courses</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title> <router-link  to="/pricing">Pricing</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title> <router-link  to="/option">Option</router-link></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import carousel from "../components/Carousels";
import options from "../components/options";
import course from "../components/course";
import about from "../components/aboutUs";
import pricing from "../components/pricing";

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.navbar-p {
  margin: 5px;
  padding-right: 20px;
}
</style>
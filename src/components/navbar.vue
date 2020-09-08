<template>
  <div >
    <v-app-bar color="deep-black accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>carol course</v-toolbar-title>

      <v-spacer></v-spacer>

      <p class="hidden-sm-and-down " style="margn:5px; padding-right:20px; text-decoration:none">
        <router-link to="/" style="text-decoration:none;  color: antiquewhite;">Home</router-link>
      </p>

      <p class="hidden-sm-and-down " style="margn:5px; padding-right:20px; text-decoration:none">
        <router-link to="/about" style="text-decoration:none;  color: antiquewhite;">About Us</router-link>
      </p>

      <p class="hidden-sm-and-down " style="margn:5px; padding-right:20px; text-decoration:none">
        <router-link to="/course" style="text-decoration:none;  color: antiquewhite;">Courses</router-link>
      </p>

      <p class="hidden-sm-and-down " style="margn:5px; padding-right:20px; text-decoration:none">
        <router-link to="/pricing" style="text-decoration:none;  color: antiquewhite;">Pricing</router-link>
      </p>

      <p class="hidden-sm-and-down " style="margn:5px; padding-right:20px; text-decoration:none">
        <router-link to="/option" style="text-decoration:none;  color: antiquewhite;">Option</router-link>
      </p>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }" >
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-lg-and-up" >
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up" >
            <v-icon >mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>
              <router-link to="/" style="text-decoration:none;  color: antiquewhite;">Home</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>
              <router-link to="/about" style="text-decoration:none;  color: antiquewhite;">About Us</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>
              <router-link to="/course" style="text-decoration:none;  color: antiquewhite;">Courses</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>
              <router-link to="/pricing" style="text-decoration:none;  color: antiquewhite;">Pricing</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>
              <router-link to="/option" style="text-decoration:none;  color: antiquewhite;">Option</router-link>
            </v-list-item-title>
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

<style scoped>
#navbar-p {
  margin: 5px;
  padding-right: 20px;
  color: antiquewhite;
  text-decoration: none;
}
</style>
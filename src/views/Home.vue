<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp" temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-weight:300; font-size:25px; justify-content:center">Carol Course</v-toolbar-title>
      <v-spacer></v-spacer>
      <p class="navbar-p">Home</p>
      <p class="navbar-p">About</p>
      <p class="navbar-p">Options</p>
      <p class="navbar-p">Pricing</p>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <carousel />
        <options v-bind:cards="cards" />
        <about />
        <course v-bind:courses="courses" />
        <pricing v-bind:prices="prices" />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import carousel from "../components/Carousels";
import options from "../components/options";
import course from "../components/course";
import about from "../components/aboutUs";
import pricing from "../components/pricing";
import Image from "../assets/image/1.png";

export default {
  components: {
    carousel,
    options,
    course,
    about,
    pricing,
  },

  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    cards: [
      {
        id: 1,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
      {
        id: 2,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
      {
        id: 2,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
      {
        id: 2,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
    ],
    prices: [
      {
        id: 1,
        title: "Title",
        rank: "450",
        price: "20$",
        location: "Italy",
        course: "web",
        detail:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        classTime: "Tonight",
        image: "../../assets/image/1.png",
        minute: "20",
        hour: "2",
        img: Image,
      },
      {
        id: 2,
        title: "Title",
        rank: "450",
        price: "20$",
        location: "Italy",
        course: "web",
        detail:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        classTime: "Tonight",
        image: "../../assets/image/1.png",
        minute: "20",
        hour: "2",
        img: Image,
      },
    ],
    courses: [
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
      {
        id: 1,
        title: "course",
        subtitle: "web course",
        detail:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        img: Image,
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
.navbar-p {
  margin: 5px;
  padding-left: 20px;
}
</style>
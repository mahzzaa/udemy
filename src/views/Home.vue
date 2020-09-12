<template>
  <v-app id="inspire">
    <section id="sec-3"></section>
    <v-main>
      <v-container class="fill-height" fluid>
        <carousel />
        <options v-bind:cards="cards" />
        <about />
        <div class="title" style="width:100%; margin-buttom:10px;">
          <p class="text-center text-option">Courses</p>
        </div>
        <div v-for="course in courses" :key="course.id">
          <course v-bind:course="course" />
        </div>
        <pricing v-bind:prices="prices" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import carousel from "../components/Carousels";
import options from "../components/options";
import course from "../components/course";
import about from "../components/aboutUs";
import pricing from "../components/pricing";
import Image from "../assets/image/1.png";
import Image1 from "../assets/image/2.png";
import Image2 from "../assets/image/3.png";
import Image3 from "../assets/image/4.png";
import Image4 from "../assets/image/5.png";
import Image5 from "../assets/image/6.png";
import db from "@/fb";

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
        id: 3,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
      {
        id: 4,
        icon: "mdi-twitter",
        iconTitle: "twitter",
        detail:
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      },
    ],
    prices: [],
    courses: [],
  }),
  created() {
    this.$vuetify.theme.dark = true;
    db.collection("courses").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.courses.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });

    db.collection("prices").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.prices.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>

<style>
.navbar-p {
  margin: 5px;
  padding-right: 20px;
}
</style>
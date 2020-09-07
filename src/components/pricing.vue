<template>
  <v-container>
    <section id="sec-4"></section>
    <div class="row">
      <p class="text-center text-title" style="width:100%; font-size:25px">Pricing</p>

      <v-col md="4" v-for="price in prices" :key="price.id">
        <v-card class="pa-2" style="border:none; background-color:transparent;" outlined tile>
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <v-img height="250" v-bind:src="price.img"></v-img>

            <v-card-title>{{price.title}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ml-4">{{price.rank}}</div>
              </v-row>

              <div class="my-4 subtitle-1">{{price.price}} • {{price.location}}, {{price.course}}</div>

              <div>{{price.detail}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{price.classTime}}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>{{price.hour}}:{{price.minute}}PM</v-chip>

                <v-chip>{{price.hour}}:{{price.minute}}PM</v-chip>

                <v-chip>{{price.hour}}:{{price.minute}}PM</v-chip>

                <v-chip>{{price.hour}}:{{price.minute}}PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>
<script>
import db from "@/fb";

export default {
  props: ["prices"],
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
    db.collection('prices').onSnapshot((res) => {
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
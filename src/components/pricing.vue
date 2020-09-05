<template>
  <v-container>
    <div class="row">
      <p class="text-center text-title" style="width:100%; font-size:25px">Pricing</p>

      <v-col v-for="n in 4" :key="n" md="4">
        <v-card class="pa-2" style="border:none; background-color:transparent;" outlined tile>
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            v-for="card in cards"
            :key="card"
          >
            <v-img height="250" v-bind:src="card.image"></v-img>

            <v-card-title>{{card.title}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ml-4">{{card.rank}}</div>
              </v-row>

              <div class="my-4 subtitle-1">{{card.price}} • {{card.location}}, {{card.course}}</div>

              <div>{{card.detail}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{card.classTime}}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
                v-for="time in times"
                :key="time"
              >
                <v-chip>{{time.hour}}:{{time.minute}}PM</v-chip>

                <v-chip>{{time.hour}}:{{time.minute}}PM</v-chip>

                <v-chip>{{time.hour}}:{{time.minute}}PM</v-chip>

                <v-chip>{{time.hour}}:{{time.minute}}PM</v-chip>
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
export default {
  data: () => ({
    loading: false,
    selection: 1,
    times: [{ minute: "20", hour: "2" }],
    cards: [
      {
        title: "Title",
        rank: "450",
        price: "20$",
        location: "Italy",
        course: "web",
        detail:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        classTime: "Tonight",
        image: "../../assets/image/1.png",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
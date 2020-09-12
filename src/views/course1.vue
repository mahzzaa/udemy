<template>
  <div class>
    <v-row no-gutters>
      <v-col col-sm-12 col-md-8 col-lg-8>
        <v-card>
          <v-container>
            <div class="hidden-md-and-up">
              <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
            </div>
            <ul class="listItem">
              <li class="hidden-md-and-down">Development</li>
              <v-icon class="hidden-md-and-down">mdi-chevron-right</v-icon>
              <li>Programming Languages</li>
              <v-icon>mdi-chevron-right</v-icon>
              <li>ASP.NET Core</li>
            </ul>
            <h2 style="padding-left:20px">Which ASP.NET Core</h2>
            <h5 style="padding-left:20px">How To Choose & How To Use</h5>
            <div class="row">
              <div class="col col-md-2">
                <v-btn color="yellow darken-3 yellow--text darken-6">Highest Rated</v-btn>
              </div>
              <div class="col col-md-2">
                <span class="grey--text text--lighten-2 mr-2">4.7</span>
              </div>
              <div class="col col-md-2">
                <v-rating
                  v-model="rating"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  size="18"
                ></v-rating>
              </div>
              <div class="col col-md-2">
                <p>(464 ratings)</p>
              </div>
            </div>
            <v-row>
              <v-avatar class="pr-3 pl-2">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
              <span class="pr-3 pl-2">Created by</span>
              <span class="pr-3 pl-2">Timothy Corey</span>
            </v-row>
            <ul class="listItem pl-0">
              <v-icon class="pr-2 pl-2">mdi-alert-decagram</v-icon>
              <li>Last updated 4/2020</li>
              <v-icon class="pr-2 pl-2">mdi-web</v-icon>
              <li>English</li>
              <v-icon class="pr-2 pl-2">mdi-google-translate</v-icon>
              <li>English [Auto]</li>
            </ul>
            <div class="row">
              <v-btn>
                Add To Wishlist
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn>
                share
                <v-icon>mdi-share</v-icon>
              </v-btn>
              <v-btn>
                Gift This Course
                <v-icon>mdi-gift</v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    rating: 4.7,
  }),
};
</script>

<style>
.listItem li {
  display: inline;
}
p {
  padding: 10px;
}
</style>
<template>
  <div class>
    <v-row no-gutters>
      <v-col col-sm-12 col-md-8 col-lg-8>
        <v-card>
          <v-container>
            <div class="hidden-md-and-down">
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
    <div class="row">
      <div class="col-sm-3">
        <v-card outlined class="mx-auto my-12" max-width="374">
          <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE" width="374"></video-embed>

          <v-card-title>£59.99</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="pb-3">
                <v-btn>Add To Wishlist</v-btn>
              </div>
              <div class="pb-3">
                <v-btn>share</v-btn>
              </div>
            </v-row>

            <div class="my-4 subtitle-1 text-center">30-Day Money-Back Guarantee</div>

            <div>
              <span>This course includes:</span>
              <ul id="option1">
                <li>
                  <i class="fab fa-youtube pr-3"></i>
                  <span>12 hours on-demand video</span>
                </li>
                <li>
                  <i class="fas fa-download pr-3"></i>
                  <span class="pl-1">8 downloadable resources</span>
                </li>
                <li>
                  <i class="fas fa-infinity pr-3"></i>
                  <span>Full lifetime access</span>
                </li>
                <li>
                  <i class="fas fa-mobile pr-3"></i>
                  <span class="pl-2">Access on mobile and TV</span>
                </li>
                <li>
                  <i class="fas fa-award pr-3"></i>
                  <span class="pl-2">Certificate of completion</span>
                </li>
              </ul>
            </div>
          </v-card-text>
          <!-- 
          <v-divider class="mx-4"></v-divider>-->

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text-center>Apply Coupon</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-sm-9 mt-12">
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">What you'll learn</v-list-item-title>
              <v-list-item>
                <div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>Which ASP .NET Core Project Is Best For You
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>MVC
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>Blazor Server
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>Razor Pages
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>API
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <i class="fas fa-check pr-3"></i>Blazor Web Assembly / Client
                  </div>
                </div>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </div>
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
#option1 {
  list-style: none;
}
</style>
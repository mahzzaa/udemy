<template>
  <div class="course1">
    <div class="card1">
      <div class="d-flex flex-row mb-6">
        <p>Development</p>
        <v-icon>mdi-chevron-right</v-icon>
        <p>Programming Language</p>
        <v-icon>mdi-chevron-right</v-icon>
        <p>ASP.NET Core</p>
      </div>
      <h2>Which ASP.NET Core</h2>
      <h4>How To Choose & How To Use</h4>
      <div class="d-flex flex-row mb-6">
        <div class="grey--text ml-4">4.7</div>
        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
        <div class="grey--text ml-4">(459 rating)</div>
        <div class="grey--text ml-4">1,952 students</div>
      </div>
      <div class="d-flex flex-row mb-6">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <p>Created by</p>

        <v-list-item-title>Evan You</v-list-item-title>
      </div>

      <div class="d-flex flex-row mb-6">
        <v-icon>mdi-history</v-icon>
        <p>Last updated 4/2020</p>
        <v-icon>mdi-web</v-icon>
        <p>English</p>
        <v-icon>mdi-keyboard</v-icon>
        <p>English [Auto]</p>
      </div>

      <div class="d-flex flex-row mb-6">
        <v-btn class="ma-2" tile outlined color="white">
          <v-icon left>mdi-heart-outline</v-icon>Wishlist
        </v-btn>
        <v-btn class="ma-2" tile outlined color="white">
          <v-icon left>mdi-share</v-icon>Share
        </v-btn>
        <v-btn class="ma-2" tile outlined color="white">
          <v-icon left>mdi-gift</v-icon>Gift this course
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

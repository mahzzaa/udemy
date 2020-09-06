<template>
  <div class="row">
    <div class="title" style="width:100%; margin-buttom:0;">
      <section id="options"></section>
      <p class="text-center text-option">Options of Page</p>
    </div>

    <v-row>
      <v-col cols="12" md="3" v-for="card in cards" :key="card.id">
        <v-card class="pa-2" outlined tile style="margin:10px">
          <v-card-title>
            <v-icon large left>{{card.icon}}</v-icon>
            <span class="title font-weight-light">{{card.iconTitle}}</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">"{{card.detail}}"</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["cards"],
  data: () => ({}),
};
</script>

<style>
.title {
  margin: 15px;
}

.v-application p {
  margin-bottom: 0px;
}
</style>
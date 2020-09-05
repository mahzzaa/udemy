<template>
  <v-container class="course">
    <div class="title" style="width:100%; margin-buttom:10px;">
      <p class="text-center text-option">Courses</p>
    </div>
    <v-row>
      <v-col v-for="n in 4" :key="n" md="6">
        <v-card class="pa-2" style="border:none;" outlined tile>
          <v-card class="mx-auto" height="50%" v-for="card in cards" :key="card">
            <v-img src="" height="250px"></v-img>

            <v-card-title>{{card.title}}</v-card-title>

            <v-card-subtitle>{{card.subtitle}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Share</v-btn>

              <v-btn color="purple" text>Explore</v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>{{card.detail}}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    cards:[
      {title:'course', subtitle:'web course', detail:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."}
    ]
  }),
};
</script>

<style>
</style>
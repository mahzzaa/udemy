<template>
  <v-container class="course">
    <section id="sec-5"></section>
    
    <v-row>
      <v-col md="12">
        <v-card class="pa-2" style="border:none;" outlined tile>
          <v-card class="mx-auto" height="50%">
            <v-img :src="course.img" height="250px"></v-img>

            <v-card-title>{{course.title}}</v-card-title>

            <v-card-subtitle>{{course.subtitle}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text><router-link to="/course1/123">detail</router-link></v-btn>
              <v-btn text><router-link to="/course1/123">id-detail</router-link></v-btn>


              <v-btn color="purple" text>Explore</v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>{{course.detail}}</v-card-text>
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
  props: ["course"],
  data: () => ({
    show: false,
  })
};
</script>

<style>
</style>
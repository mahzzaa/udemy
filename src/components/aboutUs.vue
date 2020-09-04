<template>
  <div class="row">
    <p class="text-center text-title" style="width:100%">About Us</p>
    <p class="text-center justify-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus explicabo magni ipsam, saepe labore odio
      inventore officia amet ipsa praesentium eveniet suscipit! Beatae quaerat illum nemo amet minima consectetur!
    </p>
    <br />
    <v-col md="7">
      <v-card class="pa-2" style="border:none; background-color:transparent;" outlined tile>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="list">
          <li class="list-item">
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </li>
          <li class="list-item">
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </li>
          <li class="list-item">
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </li>
        </ul>
      </v-card>
    </v-col>
    <v-col md="5">
      <v-card class="pa-2" style="border:none; background-color:transparent;" outlined tile>
        <p class="text-center">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {};
</script>

<style>
.row {
  margin: 10px;
}

.list-item {
  margin: 10px;
  justify-content: start;
}

.list {
  margin: 20px;
}

.text-title {
  padding: 20px;
}
</style>
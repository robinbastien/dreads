<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Dreads App</v-toolbar-title>
      <!-- add a list of navigation items including Home, Search, Account, and Post -->
      <v-spacer></v-spacer>
      <v-btn text><v-icon>fa fa-magnifying-glass</v-icon></v-btn>
      <v-btn text><v-icon>fa fa-user</v-icon></v-btn>
      <v-btn elevation="2" color="primary" variant="outlined"><v-icon>fa fa-plus</v-icon></v-btn>

    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App ',
  data() {
    return {
      message: 'Hello from Vue',
    };
  },
};
</script>

<style>
  body .v-application {
    background: #222 url(../assets/images/bg.jpg) center center no-repeat;
    background-size: cover;
  }

  .mh-100vh {
    min-height: 100vh;
  }
</style>

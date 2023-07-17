<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vue.js SSR</v-toolbar-title>
      <!-- add a list of navigation items including Home, Search, Account, and Post -->
      <v-spacer></v-spacer>
      <v-btn text><v-icon large>mdi-chevron-right</v-icon></v-btn>
      <v-btn text><v-icon>fa fa-magnifying-glass</v-icon></v-btn>
      <v-btn text>fa fa-user</v-btn>
      <v-btn text>fa fa-plus</v-btn>

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

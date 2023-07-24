<template>
  <div class="d-flex justify-center align-center mb-6 mh-100vh">
      <v-card elevation="4" light tag="section" align-self="center">
        <v-card-title>
          <v-layout align-self="center" class="justify-center pt-2 pb-2">
            <h3 class="headline">Login to Threads</h3>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>Sign in with your username and password:</p>
          <v-tooltip location="top">
            <template v-slot:activator="{ props }">
              <v-alert type="info" dismissible v-bind="props" class="mt-3 mb-3" border="start"
        variant="tonal"
        closable
        close-label="Close Alert"
        icon="fa fa-exclamation-triangle">
                <strong>Note</strong> - Your user and password are stored locally only.
              </v-alert>
            </template>
            <p>There is only an unofficial API for Threads currently. As a result, you must use your username and password to log in directly.<br /> This is only stored locally and Dreads.app doesn't store this information on the server.</p>
          </v-tooltip>
          <v-form>
            <v-text-field
                          outline
                          label="Username"
                          type="text"
                          v-model="username"></v-text-field>
            <v-text-field
                          outline
                          hide-details
                          label="Password"
                          type="password"
                          v-model="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info">
            <v-icon left>fa fa-lock</v-icon>
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>

<template>
  <div class="d-flex justify-start mb-6">
      <v-card elevation="4" light tag="section" align-self="center">
        <v-card-title>
          <v-layout align-self="center" justify-space-between>
            <h3 class="headline">Login to Threads</h3>
            <v-flex align-self="center">
              <v-img alt="Login to Threads" class="ml-3" contain height="48px" position="center right" src="https://www.mobygames.com/images/i/12/25/1435075.png"></v-img>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>Sign in with your username and password:</p>
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

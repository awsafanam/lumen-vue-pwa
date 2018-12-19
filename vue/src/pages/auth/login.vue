<template>
  <v-app class="primary" id="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-layout class="header-section">
            <v-flex><v-btn large block flat>Login</v-btn></v-flex>
            <v-flex><v-btn large color="accent" to="register" depressed block>Register</v-btn></v-flex>
          </v-layout>
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <v-form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <v-text-field append-icon="person" name="email" label="Email" type="text" v-model="form.email"></v-text-field>
                <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="form.password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <login-with-fb/>
              <v-spacer></v-spacer>
              <v-btn block color="primary" @click="login" :loading="form.busy">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Form from 'vform'
import LoginWithFb from '~/components/LoginWithFb'

export default {
  middleware: 'guest',

  components: {
    LoginWithFb
  },
  layout: 'blank',
  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss" scoped>
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
.header-section {
  background: white;
  .v-btn {
    margin: 0;
    border-radius: 0;
  }
}
</style>
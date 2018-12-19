<template>
  <v-app class="primary" id="register">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-layout class="header-section">
            <v-flex><v-btn large   to="login" depressed block color="accent">Login</v-btn></v-flex>
            <v-flex><v-btn large flat block>Register</v-btn></v-flex>
          </v-layout>
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <v-form @submit.prevent="register" @keydown="form.onKeydown($event)">
                <v-text-field name="name" label="Name" type="text" v-model="form.name"></v-text-field>
                <v-text-field name="email" label="Email" type="text" v-model="form.email"></v-text-field>
                <v-text-field name="password" label="Password" id="password" type="password" v-model="form.password"></v-text-field>
                <v-text-field name="password" label="Confirmation Password" id="confirmationPassword" type="password" v-model="form.password_confirmation"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <login-with-fb/>
              <v-spacer></v-spacer>
              <v-btn block color="primary" @click="register" :loading="form.busy">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
          <!-- 
<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('register')">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
            <div class="col-md-7">
              <input v-model="form.name" type="text" name="name" class="form-control"
                :class="{ 'is-invalid': form.errors.has('name') }">
              <has-error :form="form" field="name"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" type="email" name="email" class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }">
              <has-error :form="form" field="email"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password" type="password" name="password" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password') }">
              <has-error :form="form" field="password"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
              <has-error :form="form" field="password_confirmation"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <v-button :loading="form.busy">
                {{ $t('register') }}
              </v-button>

              <login-with-fb/>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>
 -->
<script>
import Form from 'vform'
import LoginWithFb from '~/components/LoginWithFb'

export default {
  middleware: 'guest',
  layout: 'blank',

  components: {
    LoginWithFb
  },

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token }} = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  #register {
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
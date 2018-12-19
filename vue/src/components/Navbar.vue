<template>
  <v-toolbar
          fixed
          app
  >
    <v-toolbar-title class="ml-0 pl-3">
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    >
    </v-text-field>
    <v-spacer></v-spacer>
    <!--<v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">-->
      <!--<v-btn icon flat slot="activator">-->
        <!--<v-badge color="red" overlap>-->
          <!--<span slot="badge">3</span>-->
          <!--<v-icon medium>notifications</v-icon>-->
        <!--</v-badge>-->
      <!--</v-btn>-->
      <!--<notification-list></notification-list>-->
    <!--</v-menu>-->
    <v-menu v-if="user" offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img :src="require('~/assets/logo-mini.png')" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

    <!-- Guest -->
    <v-toolbar-items class="hidden-sm-and-down" v-else>
      <v-btn flat :to="{ name: 'login' }">
        {{ $t('login') }}
      </v-btn>
      <v-btn flat :to="{ name: 'register' }">
        {{ $t('register') }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '~/config';
// import LocaleDropdown from './LocaleDropdown'

export default {
  data: () => ({
    appName: config.appName,
    items: [
      // {
      //   name: 'Logout',
      //   href: '#',
      //   click: this.logout.bind(this)
      // }
    ]
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  components: {
    // LocaleDropdown
  },

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
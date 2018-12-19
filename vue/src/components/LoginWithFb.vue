<template>
  <a v-if="fbAuth" href="/oauth/facebook" class="btn btn-dark ml-auto">
    {{ $t('login_with') }}
    <fa :icon="['fab', 'facebook-square']"/>
  </a>
</template>

<script>
import config from '~/config';

export default {
  name: 'LoginWithFb',

  computed: {
    fbAuth: () => config.fbAuth
  }
}
</script>
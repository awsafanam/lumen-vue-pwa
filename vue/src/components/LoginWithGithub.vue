<template>
  <a v-if="githubAuth" href="/oauth/github" class="btn btn-dark ml-auto">
    {{ $t('login_with') }}
    <fa :icon="['fab', 'github']"/>
  </a>
</template>

<script>
import config from '~/config';

export default {
  name: 'LoginWithGithub',

  computed: {
    githubAuth: () => config.githubAuth
  }
}
</script>
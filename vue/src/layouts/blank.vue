<template>
  <div class="blank-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BlankLayout',

  components: {
  }
}
</script>
<style>
.hidden .v-image__image--cover {
  background-image: none !important;
}
</style>

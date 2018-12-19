<template>
  <v-app>
    <drawer class="app--drawer"></drawer>
    <navbar />
    
    <v-content>
      <page-header v-if="$route.meta.breadcrumb"></page-header>
      <div class="page-wrapper">
        <v-container grid-list-xl fluid pt-0>
          <v-card>
            <v-card-text>
              <router-view/>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from '~/components/Drawer'
import Navbar from '~/components/Navbar'
import PageHeader from '~/components/PageHeader'

export default {
  name: 'MainLayout',

  components: {
    Drawer,
    Navbar,
    PageHeader
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.v-text-field--enclosed .v-input__slot {
  margin-bottom: 0;
}

#pageEditor .ql-editor {
  height : 150px;
}
.small-label .v-label {
  font-size: 12px;
}
</style>

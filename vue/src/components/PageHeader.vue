<template>
    <v-layout row class="align-center layout px-4 pt-4 app--page-header">
        <div class="page-header-left">
            <h3 class="pr-3">{{title}}</h3>
        </div>
        <v-breadcrumbs :items="breadcrumbs" divider=">">
          <v-icon slot="divider">forward</v-icon>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
    </v-layout>
</template>

<script>
  import menu from '../utils/menu';
  export default {
    data () {
      return {
        title: ''
      };
    },
    computed: {
      breadcrumbs: function () {
        let breadcrumbs = [], $this = this;
        menu.forEach(item => {
          if (item.items) {
            let child =  item.items.find(i => {
              return i.component === this.$route.name;
            });
            if (child) {
              breadcrumbs.push({
                text: 'Dashboard',
                disabled: false,
                to: '/'
              });
              breadcrumbs.push({
                text: item.title,
                disabled: false,
                href: item.path
              });
              breadcrumbs.push({
                text: child.title,
                disabled: true,
                href: ''
              });
              // breadcrumbs.push(item.title);
              // breadcrumbs.push(child.title);
              $this.title = child.title;
            }
          } else {
            if (item.name === $this.$route.name) {
              $this.title = item.title;
              breadcrumbs.push({
                text: 'Dashboard',
                disabled: false,
                href: '/'
              });
              breadcrumbs.push({
                text: item.title,
                disabled: true,
                href: ''
              });
            }
          }
        });
        return breadcrumbs;
      },
    }
  };
</script>
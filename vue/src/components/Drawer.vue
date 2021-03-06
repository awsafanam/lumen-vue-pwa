<template>
    <v-navigation-drawer permanent
            id="appDrawer"
            :mini-variant.sync="mini"
            fixed
            :dark="$vuetify.dark"
            app
            v-model="drawer"
            width="260"
    >
        <v-toolbar color="primary darken-1" dark>
          <v-list-tile-avatar>
            <img :src="require('~/assets/logo-mini.png')" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Logo</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-toolbar>
        <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
            <v-list dense expand>
                <template v-for="(item, i) in menus">
                    <!--group with subitems-->
                    <v-list-group v-if="item.items" :key="item.name" :group="item.group" :prepend-icon="item.icon" no-action="no-action">
                        <v-list-tile slot="activator" ripple="ripple">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <template v-for="(subItem, i) in item.items">
                            <!--sub group-->
                            <v-list-group v-if="subItem.items" :key="subItem.name" :group="subItem.group" sub-group="sub-group">
                                <v-list-tile slot="activator" ripple="ripple">
                                    <v-list-tile-action v-if="subItem.icon">
                                        <v-icon>{{ subItem.icon }}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile v-for="(grand, i) in subItem.children" :key="i" :to="genChildTarget(item, grand)" :href="grand.href" ripple="ripple">
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list-group>
                            <!--child item-->
                            <v-list-tile v-else :key="i" :to="genChildTarget(item, subItem)" :href="subItem.href" :disabled="subItem.disabled" :target="subItem.target" ripple="ripple">
                                <v-list-tile-action v-if="subItem.icon">
                                    <v-icon>{{ subItem.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
                                </v-list-tile-content>
                                <!-- <v-circle class="white--text pa-0 circle-pill" v-if="subItem.badge" color="red" disabled="disabled">{{ subItem.badge }}</v-circle> -->
                                <v-list-tile-action v-if="subItem.action">
                                    <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
                        </template>
                    </v-list-group>
                    <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
                    <v-divider v-else-if="item.divider" :key="i"></v-divider>
                    <!--top-level link-->
                    <v-list-tile v-else :to="!item.href ? { name: item.name } : null" :href="item.href" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="item.name">
                        <v-list-tile-action v-if="item.icon">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <!-- <v-circle class="white--text pa-0 chip--x-small" v-if="item.badge" :color="item.color || 'primary'" disabled="disabled">{{ item.badge }}</v-circle> -->
                        <v-list-tile-action v-if="item.subAction">
                            <v-icon class="success--text">{{ item.subAction }}</v-icon>
                        </v-list-tile-action>
                        <!-- <v-circle class="caption blue lighten-2 white--text mx-0" v-else-if="item.chip" label="label" small="small">{{ item.chip }}</v-circle> -->
                    </v-list-tile>
                </template>
            </v-list>
        </vue-perfect-scrollbar>
    </v-navigation-drawer>
</template>
<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import menu from '../utils/menu'
  export default {
    name: 'drawer',
    components: {
      VuePerfectScrollbar,
    },
    props: {
      expanded: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      mini: true,
      drawer: true,
      menus: menu,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }),

    methods: {
      genChildTarget (item, subItem) {
        if (subItem.href) return;
        if (subItem.component) {
          return {
            name: subItem.component,
          };
        }
        return { name: `${item.group}/${(subItem.name)}` };
      },
    }
  };
</script>


<style lang="scss">
#appDrawer {
    overflow: hidden;
    .drawer-menu--scroll {
        height: calc(100vh - 48px);
        overflow: auto;
    }
}
</style>

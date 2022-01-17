<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h4">
          <q-avatar>
            <img
              src="avatar.png"
              alt="LOgo"
            >
          </q-avatar>
          TodoApp
        </div>
        <div class="text-subtitle1">
          {{todaysDate}}
        </div>
      </div>

      <q-img
        src="todo9.jpg"
        class="header-image absolute-top"
      />

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            to="/todo"
            exact
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Todos
            </q-item-section>
          </q-item>

          <q-item
            to="/dashboard"
            exact
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section>
              Dashboardd
            </q-item-section>
          </q-item>

          <q-item
            to="/help"
            exact
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>

          <q-item
            to="/"
            exact
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="todo9.jpg"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="70px"
            class="q-mb-md"
          >
            <img src="ava3.png">
          </q-avatar>
          <div class="text-weight-bold">ladySiayor</div>
          <div>@abbyharns</div>
        </div>
      </q-img>
    </q-drawer>
    <q-footer
      reveal
      primary-7
    >
      <q-toolbar>
        <q-toolbar-title
          dark
          class="row justify-center items-center text-grey-6"
        >
          All rights reseved ~ ladySiayor@2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar';
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  computed: {
    todaysDate () {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM YYYY')
    }
  },

  setup () {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>

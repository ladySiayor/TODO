<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      primary-7
    >
      <q-toolbar>
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img
                src="avatar.png"
                alt="LOgo"
              >
            </q-avatar>
            TodoApp
          </q-toolbar-title>
        </q-toolbar>
      </q-toolbar>
    </q-header>

    <q-footer
      reveal
      elevated
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>

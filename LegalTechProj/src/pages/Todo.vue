<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        bg-color="white"
        placeholder="Add Task"
        dense
      >
        <template v-slot:append>
          <q-btn
            @click="addTask"
            round
            dense
            flat
            icon="add"
            color="primary"
          >

            <q-tooltip
              q-tooltip
              anchor="top middle"
              self="top middle"
            >Add Task
            </q-tooltip>
          </q-btn>

          <q-btn
            round
            dense
            icon="event"
            flat
            color="secondary"
          >

            <q-tooltip
              anchor="top middle"
              self="top middle"
            >Start Date
            </q-tooltip>
            <q-popup-proxy
              @before-show="updateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="proxyDate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn
                    label="Cancel"
                    color="primary"
                    flat
                    v-close-popup
                  />
                  <q-btn
                    label="OK"
                    color="primary"
                    flat
                    @click="save"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>

          <q-btn
            round
            dense
            icon="event"
            flat
            color="negative"
          >

            <q-tooltip
              anchor="top middle"
              self="top middle"
            >End Date
            </q-tooltip>
            <q-popup-proxy
              @before-show="updateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="proxyDate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn
                    label="Cancel"
                    color="primary"
                    flat
                    v-close-popup
                  />
                  <q-btn
                    label="OK"
                    color="negative"
                    flat
                    @click="save"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>

        </template>
      </q-input>
    </div>
    <q-list
      div
      class="bg-white"
      separator
      bordered
    >
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{'done bg-blue-1' : task.done}"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>

        <q-item-section
          v-if="task.done"
          side
        >
          <q-btn
            @click.stop="deleteTask(index)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div
      v-if="!tasks.length"
      class="no-task absolute-center"
    >
      <q-icon
        name="check"
        size="100px"
        color="primary"
      />
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>

import { ref } from 'vue';
export default {
  data () {
    return {
      newTask: '',
      tasks: [

      ]
    }
  },
  setup () {
    return {
      text: ref('Field content')
    }
  },
  methods: {
    //Deleting a task
    deleteTask (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Task successfuly deleted')
      })
    },
    //Adding a new task
    addTask () {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      //clearing the input field
      this.newTask = ''
    }
  }

}
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-task {
  opacity: 0.5;
}
</style>
<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive?'blue_dark':'bg-blue-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Completed Tasks</div>
                <div class="text-h5">160</div>
              </div>
              <div class="col-2">
                <q-icon
                  size="62px"
                  name="far fa-calendar-check"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive?'green_dark':'bg-green-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Tasks In Progress</div>
                <div class="text-h5">140</div>
              </div>
              <div class="col-2">
                <q-icon
                  size="62px"
                  name="trending_up"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive?'orange_dark':'bg-orange-9'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Failed Tasks</div>
                <div class="text-h5">20</div>
              </div>
              <div class="col-2">
                <q-icon
                  size="62px"
                  name="far fa-calendar-times"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
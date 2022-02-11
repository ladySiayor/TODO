<template>
  <q-page
    class=" row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card
          square
          class="shadow-24"
          style="width:430px;height:460px;"
        >
          <q-card-section class="bg-primary">
            <h4 class="text-h5 text-white q-my-md">TODO APP</h4>
            <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%);"
            >
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-px-sm q-pt-xl"
              @submit="onSubmit"
            >
              <q-input
                square
                clearable
                required
                v-model="name"
                type="text"
                label="Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 ]"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-user" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                required
                v-model="number"
                type="number"
                label="Contact"
                :rules="[
                val => val !== null && val !== '',
                val => val > 0 && val < 100
            ]"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-phone-square-alt" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                required
                v-model="password"
                type="password"
                label="Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              to="/"
              unelevated
              size="md"
              color="primary"
              class="full-width text-white"
              label="Sign Up"
              type="submit"
            />
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>


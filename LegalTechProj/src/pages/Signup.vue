<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card
          square
          class="shadow-24"
          style="width:600px;height:750px;"
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
                v-model="email"
                type="email"
                label="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
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
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <a
                href="https://www.facebook.com/login"
                style="text-decoration: none;"
              >
                <q-btn
                  round
                  color="indigo-7"
                >

                  <q-icon
                    name="fab fa-facebook-f"
                    size="1.2rem"
                  />
                </q-btn>
              </a>

              <a
                href="https://accounts.google.com/signin"
                style="text-decoration: none;"
              >
                <q-btn
                  round
                  color="red-8"
                >
                  <q-icon
                    name="fab fa-google-plus-g"
                    size="1.2rem"
                  />
                </q-btn>
              </a>

              <a
                href="https://www.twitter.com/login"
                style="text-decoration: none;"
              >
                <q-btn
                  round
                  color="light-blue-5"
                >
                  <q-icon
                    name="fab fa-twitter"
                    size="1.2rem"
                  />
                </q-btn>
              </a>
            </div>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn
              to="/"
              unelevated
              size="lg"
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

<style>
</style>


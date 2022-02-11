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
          style="width:480px;height:650px;"
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
                v-model="password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              to="/todo"
              unelevated
              size="md"
              color="primary"
              class="md-width text-white"
              label="Sign In"
            />
          </q-card-actions>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <div class="q-mt-xl">
                <q-btn
                  color="primary"
                  glossy
                  push
                  class="full-width"
                  icon="fab fa-facebook-f"
                  label="Login with Facebook"
                  size="md"
                  @click="auth('facebook')"
                >
                </q-btn>
              </div>
              <div class="q-mt-xl">
                <q-btn
                  color="negative"
                  glossy
                  push
                  class="full-width"
                  icon="fab fa-google"
                  label="Login with Google"
                  size="md"
                  @click="auth('google')"
                >
                </q-btn>
              </div>

            </div>
          </q-card-section>

          <q-card-section class="text-center q-pa-sm">
            <span class="text-grey-6">No account?</span> &nbsp;
            <span>
              <q-btn
                round
                color="primary"
                to="/signup"
              >
                <q-icon name="fas fa-user-plus">
                  <q-tooltip
                    anchor="top middle"
                    self="top middle"
                  >Create Account
                  </q-tooltip>
                </q-icon>
              </q-btn>
            </span>

          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>


<script>
import hello from 'hellojs'//'../facebookAuth.js'
export default {
  name: 'Login',
  methods: {
    auth (network) {
      hello(network).login()
        .then(() => {
          // console.log($Router.query)
          this.$router.push('todo')
        })
    }
  }
}
</script>

<style scoped>
.dark {
  background: #1817309a;
}
</style>

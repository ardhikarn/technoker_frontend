<template>
  <div style="width:100%">
    <b-row class="login" align-h="center">
      <b-col sm="6" class="left">
        <b-row align-v="center" class="content-left">
          <b-col>
            <h2>Temukan developer berbakat &#38; terbaik di berbagai bidang keahlian</h2>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" class="right">
        <b-row class="content-right" align-v="center">
          <b-col>
            <div class="text-left p-3">
              <h3>
                <strong>Halo, Pewpeople</strong>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
                tempore.
              </p>

              <b-form @submit.prevent="onSubmit">
                <b-form-group label="Email">
                  <b-form-input
                    type="email"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-row align-h="center" class="text-right">
                  <b-col>
                    <router-link to="/reset-password">Lupa kata sandi?</router-link>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-button
                      block
                      variant="warning"
                      type="submit"
                      class="my-3"
                      style="color:white;"
                    >Masuk</b-button>
                  </b-col>
                </b-row>
                <b-row class="text-center">
                  <b-col>
                    Anda belum punya akun?
                    <span
                      @click="$bvModal.show('modalRegister')"
                    >Daftar disini</span>
                    <b-modal id="modalRegister" hide-footer hide-header>
                      <template>
                        <strong>Select your role:</strong>
                      </template>
                      <div class="d-block text-center">
                        <b-row>
                          <b-col @click="$bvModal.hide('modalRegister')">
                            <b-button
                              variant="info"
                              class="mt-3"
                              block
                              @click="registerCandidatePage()"
                            >Candidate</b-button>
                          </b-col>
                          <b-col @click="$bvModal.hide('modalRegister')">
                            <b-button
                              variant="warning"
                              style="color:white;"
                              class="mt-3"
                              block
                              @click="registerRecruiterPage()"
                            >Recruiter</b-button>
                          </b-col>
                        </b-row>
                      </div>
                    </b-modal>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.login(this.form)
        .then((result) => {
          console.log(result)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error.data.msg)
          if (error.data.msg === 'Wrong Pasword') {
            alert('Wrong Password!')
          } else if (error.data.msg === 'Email Not Registered') {
            alert('Your email is not registered')
          }
        })
    },
    registerCandidatePage() {
      this.$router.push('/register-candidate')
    },
    registerRecruiterPage() {
      this.$router.push('/register-recruiter')
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
  width: 90%;
  margin: 30px 50px;
  height: 100vh;
  background-color: #f6f7f8;
}

.content-left {
  color: azure;
  height: 100%;
  background-image: linear-gradient(
      rgba(94, 80, 161, 0.5),
      rgba(94, 80, 161, 0.5)
    ),
    url('../../assets/bg-login2.jpg');
  background-size: cover;
}

.content-right {
  height: 100%;
}

.left {
  height: 100%;
  width: 100%;
}

.right {
  /* color: aqua; */
  height: 100%;
  width: 100%;
}

span {
  color: #fbb017;
  cursor: pointer;
}
</style>
